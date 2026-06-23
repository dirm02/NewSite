/// <reference path="../pb_data/types.d.ts" />
migrate(
  (app) => {
    // Idempotent: skip if MVP seed already applied
    try {
      app.findFirstRecordByFilter("cities", "slug = 'toronto-on'");
      return;
    } catch (_) {
      // not seeded yet
    }

    const SEED_PASSWORD = $os.getenv("LIF3LINE_SEED_PASSWORD") || "change-me-for-local-seed";

    const citiesCol = app.findCollectionByNameOrId("cities");
    const categoriesCol = app.findCollectionByNameOrId("service_categories");
    const usersCol = app.findCollectionByNameOrId("users");
    const providersCol = app.findCollectionByNameOrId("provider_profiles");
    const servicesCol = app.findCollectionByNameOrId("services");
    const reviewsCol = app.findCollectionByNameOrId("reviews");

    const cityIds = {};

    const citySeed = [
      { slug: "toronto-on", name: "Toronto", region: "ON" },
      { slug: "mississauga-on", name: "Mississauga", region: "ON" },
      { slug: "brampton-on", name: "Brampton", region: "ON" },
      { slug: "ottawa-on", name: "Ottawa", region: "ON" },
      { slug: "hamilton-on", name: "Hamilton", region: "ON" },
      { slug: "montreal-qc", name: "Montreal", region: "QC" },
      { slug: "laval-qc", name: "Laval", region: "QC" },
      { slug: "quebec-city-qc", name: "Quebec City", region: "QC" },
      { slug: "vancouver-bc", name: "Vancouver", region: "BC" },
      { slug: "surrey-bc", name: "Surrey", region: "BC" },
      { slug: "burnaby-bc", name: "Burnaby", region: "BC" },
      { slug: "calgary-ab", name: "Calgary", region: "AB" },
      { slug: "edmonton-ab", name: "Edmonton", region: "AB" },
      { slug: "winnipeg-mb", name: "Winnipeg", region: "MB" },
      { slug: "halifax-ns", name: "Halifax", region: "NS" },
      { slug: "saskatoon-sk", name: "Saskatoon", region: "SK" },
      { slug: "regina-sk", name: "Regina", region: "SK" },
    ];

    for (const c of citySeed) {
      const record = new Record(citiesCol);
      record.set("name", c.name);
      record.set("slug", c.slug);
      record.set("region", c.region);
      record.set("country", "Canada");
      app.save(record);
      cityIds[c.slug] = record.id;
    }

    const categoryIds = {};
    const categorySeed = [
      { slug: "construction", name: "Construction", featured: true, sort: 1, listings: 24 },
      { slug: "removals", name: "Removals", featured: true, sort: 2, listings: 18 },
      { slug: "cleaning", name: "Cleaning", featured: true, sort: 3, listings: 32 },
      { slug: "computer-service", name: "Computer Service", featured: true, sort: 4, listings: 15 },
      { slug: "electrical", name: "Electrical", featured: true, sort: 5, listings: 28 },
      { slug: "man-van", name: "Man & Van", featured: true, sort: 6, listings: 12 },
      { slug: "deliveries", name: "Deliveries", featured: false, sort: 7, listings: 20 },
      { slug: "mobile-barber", name: "Mobile Barber", featured: false, sort: 8, listings: 9 },
      { slug: "interior", name: "Interior", featured: false, sort: 9, listings: 14 },
      { slug: "plumbing", name: "Plumbing", featured: false, sort: 10, listings: 26 },
      { slug: "nail-technicians", name: "Nail Technicians", featured: false, sort: 11, listings: 11 },
      { slug: "hair-dressers", name: "Hair Dressers", featured: false, sort: 12, listings: 10 },
    ];

    for (const cat of categorySeed) {
      const record = new Record(categoriesCol);
      record.set("name", cat.name);
      record.set("slug", cat.slug);
      record.set("featured", cat.featured);
      record.set("sort_order", cat.sort);
      record.set("listing_count", cat.listings);
      app.save(record);
      categoryIds[cat.slug] = record.id;
    }

    function createUser(email, name, role, citySlug) {
      const record = new Record(usersCol);
      record.set("email", email);
      record.set("name", name);
      record.set("role", role);
      record.set("verified", true);
      if (citySlug && cityIds[citySlug]) {
        record.set("city", cityIds[citySlug]);
      }
      record.setPassword(SEED_PASSWORD);
      app.save(record);
      return record.id;
    }

    const providerSeed = [
      {
        email: "hendry.thompson@seed.lif3line.ca",
        name: "Hendry Thompson",
        business: "Thompson Trade Services",
        city: "toronto-on",
        bio: "Licensed electrician and general contractor serving the GTA.",
        rateMin: 60,
        ratingAvg: 4.4,
        ratingCount: 123,
        servicesCount: 46,
      },
      {
        email: "william.patterson@seed.lif3line.ca",
        name: "William Patterson",
        business: "Patterson Home Services",
        city: "vancouver-bc",
        bio: "Reliable home repairs and renovations across Metro Vancouver.",
        rateMin: 70,
        ratingAvg: 4.8,
        ratingCount: 200,
        servicesCount: 40,
      },
      {
        email: "lorenzo.verduzco@seed.lif3line.ca",
        name: "Lorenzo Verduzco",
        business: "Verduzco Cleaning Co.",
        city: "montreal-qc",
        bio: "Residential and commercial cleaning in Montreal and Laval.",
        rateMin: 55,
        ratingAvg: 4.6,
        ratingCount: 270,
        servicesCount: 52,
      },
      {
        email: "rafael.smith@seed.lif3line.ca",
        name: "Rafael Smith",
        business: "Smith Plumbing & Heating",
        city: "calgary-ab",
        bio: "Emergency plumbing and water heater installs in Calgary.",
        rateMin: 65,
        ratingAvg: 4.8,
        ratingCount: 300,
        servicesCount: 40,
      },
      {
        email: "robert.boyd@seed.lif3line.ca",
        name: "Robert Boyd",
        business: "Boyd IT & Computer Repair",
        city: "ottawa-on",
        bio: "Computer repair, custom builds, and small-business IT support.",
        rateMin: 70,
        ratingAvg: 4.8,
        ratingCount: 300,
        servicesCount: 40,
      },
      {
        email: "joe.fletcher@seed.lif3line.ca",
        name: "Joe Fletcher",
        business: "Fletcher Moving & Delivery",
        city: "edmonton-ab",
        bio: "Local moves, deliveries, and man-with-a-van service in Edmonton.",
        rateMin: 50,
        ratingAvg: 4.9,
        ratingCount: 370,
        servicesCount: 65,
      },
    ];

    const providerIds = {};

    for (const p of providerSeed) {
      const userId = createUser(p.email, p.name, "provider", p.city);
      const profile = new Record(providersCol);
      profile.set("user", userId);
      profile.set("business_name", p.business);
      profile.set("bio", p.bio);
      profile.set("hourly_rate_min", p.rateMin);
      profile.set("rating_avg", p.ratingAvg);
      profile.set("rating_count", p.ratingCount);
      profile.set("services_count", p.servicesCount);
      profile.set("city", cityIds[p.city]);
      profile.set("verified", true);
      profile.set("status", "active");
      app.save(profile);
      providerIds[p.email] = profile.id;
    }

    const customerSeed = [
      { email: "robert.anderson@seed.lif3line.ca", name: "Robert Anderson", city: "toronto-on" },
      { email: "delois.coffin@seed.lif3line.ca", name: "Delois Coffin", city: "vancouver-bc" },
      { email: "matthew.hicks@seed.lif3line.ca", name: "Matthew Hicks", city: "calgary-ab" },
      { email: "daniel.davis@seed.lif3line.ca", name: "Daniel Davis", city: "montreal-qc" },
      { email: "sarah.martin@seed.lif3line.ca", name: "Sarah Martin", city: "ottawa-on" },
      { email: "james.wilson@seed.lif3line.ca", name: "James Wilson", city: "halifax-ns" },
    ];

    const customerIds = {};
    for (const c of customerSeed) {
      customerIds[c.email] = createUser(c.email, c.name, "customer", c.city);
    }

    const serviceSeed = [
      { slug: "professional-delivery-services", title: "Professional Delivery Services", category: "deliveries", provider: "joe.fletcher@seed.lif3line.ca", city: "edmonton-ab", priceFrom: 40, priceTo: 120, duration: 60, featured: true, rating: 4.5 },
      { slug: "classic-manicure-nails", title: "Classic Manicure & Set of Nails", category: "nail-technicians", provider: "lorenzo.verduzco@seed.lif3line.ca", city: "montreal-qc", priceFrom: 20, priceTo: 45, duration: 90, featured: true, rating: 4.4 },
      { slug: "water-heater-installation", title: "Water Heater Installation", category: "plumbing", provider: "rafael.smith@seed.lif3line.ca", city: "calgary-ab", priceFrom: 65, priceTo: 350, duration: 180, featured: true, rating: 4.2 },
      { slug: "house-carpet-cleaning", title: "General House & Carpet Clean", category: "cleaning", provider: "lorenzo.verduzco@seed.lif3line.ca", city: "laval-qc", priceFrom: 95, priceTo: 220, duration: 240, featured: true, rating: 4.7 },
      { slug: "custom-pc-builds", title: "Custom PC Builds", category: "computer-service", provider: "robert.boyd@seed.lif3line.ca", city: "ottawa-on", priceFrom: 85, priceTo: 400, duration: 120, featured: true, rating: 4.8 },
      { slug: "residential-electrical-inspection", title: "Residential Electrical Inspection", category: "electrical", provider: "hendry.thompson@seed.lif3line.ca", city: "toronto-on", priceFrom: 80, priceTo: 200, duration: 120, featured: false, rating: 4.6 },
      { slug: "local-moving-removals", title: "Local Moving & Removals", category: "removals", provider: "joe.fletcher@seed.lif3line.ca", city: "edmonton-ab", priceFrom: 90, priceTo: 450, duration: 300, featured: false, rating: 4.7 },
      { slug: "emergency-plumbing-repair", title: "Emergency Plumbing Repair", category: "plumbing", provider: "rafael.smith@seed.lif3line.ca", city: "calgary-ab", priceFrom: 75, priceTo: 250, duration: 90, featured: false, rating: 4.5 },
      { slug: "deep-home-cleaning", title: "Deep Home Cleaning", category: "cleaning", provider: "lorenzo.verduzco@seed.lif3line.ca", city: "montreal-qc", priceFrom: 110, priceTo: 280, duration: 300, featured: false, rating: 4.8 },
      { slug: "laptop-desktop-repair", title: "Laptop & Desktop Repair", category: "computer-service", provider: "robert.boyd@seed.lif3line.ca", city: "ottawa-on", priceFrom: 60, priceTo: 180, duration: 90, featured: false, rating: 4.6 },
      { slug: "kitchen-renovation-consult", title: "Kitchen Renovation Consultation", category: "construction", provider: "hendry.thompson@seed.lif3line.ca", city: "mississauga-on", priceFrom: 120, priceTo: 500, duration: 180, featured: false, rating: 4.5 },
      { slug: "mobile-barber-home-visit", title: "Mobile Barber Home Visit", category: "mobile-barber", provider: "william.patterson@seed.lif3line.ca", city: "vancouver-bc", priceFrom: 35, priceTo: 65, duration: 60, featured: false, rating: 4.9 },
      { slug: "interior-design-consultation", title: "Interior Design Consultation", category: "interior", provider: "william.patterson@seed.lif3line.ca", city: "burnaby-bc", priceFrom: 100, priceTo: 300, duration: 120, featured: false, rating: 4.4 },
      { slug: "man-van-same-day", title: "Man & Van Same-Day Service", category: "man-van", provider: "joe.fletcher@seed.lif3line.ca", city: "saskatoon-sk", priceFrom: 55, priceTo: 180, duration: 120, featured: false, rating: 4.3 },
      { slug: "panel-upgrade-service", title: "Electrical Panel Upgrade", category: "electrical", provider: "hendry.thompson@seed.lif3line.ca", city: "hamilton-on", priceFrom: 150, priceTo: 800, duration: 360, featured: false, rating: 4.7 },
      { slug: "hair-styling-home", title: "Hair Styling at Home", category: "hair-dressers", provider: "william.patterson@seed.lif3line.ca", city: "surrey-bc", priceFrom: 45, priceTo: 95, duration: 90, featured: false, rating: 4.5 },
      { slug: "furniture-assembly", title: "Furniture Assembly", category: "interior", provider: "william.patterson@seed.lif3line.ca", city: "vancouver-bc", priceFrom: 50, priceTo: 150, duration: 120, featured: false, rating: 4.6 },
      { slug: "same-day-courier-gta", title: "Same-Day Courier (GTA)", category: "deliveries", provider: "hendry.thompson@seed.lif3line.ca", city: "brampton-on", priceFrom: 30, priceTo: 90, duration: 45, featured: false, rating: 4.4 },
    ];

    const serviceIds = {};

    for (const s of serviceSeed) {
      const record = new Record(servicesCol);
      record.set("title", s.title);
      record.set("slug", s.slug);
      record.set("description", `<p>${s.title} — professional service across Canada. Book trusted local providers on Lif3line.</p>`);
      record.set("category", categoryIds[s.category]);
      record.set("provider", providerIds[s.provider]);
      record.set("city", cityIds[s.city]);
      record.set("price_from", s.priceFrom);
      record.set("price_to", s.priceTo);
      record.set("duration_minutes", s.duration);
      record.set("featured", s.featured);
      record.set("status", "active");
      record.set("rating_avg", s.rating);
      app.save(record);
      serviceIds[s.slug] = record.id;
    }

    const reviewSeed = [
      { author: "robert.anderson@seed.lif3line.ca", provider: "hendry.thompson@seed.lif3line.ca", service: "residential-electrical-inspection", rating: 5, comment: "Quality of work was excellent. The electrician arrived on time and explained everything clearly." },
      { author: "delois.coffin@seed.lif3line.ca", provider: "lorenzo.verduzco@seed.lif3line.ca", service: "deep-home-cleaning", rating: 5, comment: "They use eco-friendly products without compromising on cleanliness. Highly recommend." },
      { author: "matthew.hicks@seed.lif3line.ca", provider: "william.patterson@seed.lif3line.ca", service: "mobile-barber-home-visit", rating: 5, comment: "Exceptional care and attention to detail. Professional from start to finish." },
      { author: "daniel.davis@seed.lif3line.ca", provider: "rafael.smith@seed.lif3line.ca", service: "water-heater-installation", rating: 4, comment: "Fixed my issue quickly and got everything running smoothly again." },
      { author: "sarah.martin@seed.lif3line.ca", provider: "robert.boyd@seed.lif3line.ca", service: "custom-pc-builds", rating: 5, comment: "Built a great workstation for my home office. Fast turnaround in Ottawa." },
      { author: "james.wilson@seed.lif3line.ca", provider: "joe.fletcher@seed.lif3line.ca", service: "local-moving-removals", rating: 5, comment: "Careful with our furniture and very efficient. Would use again in Halifax." },
      { author: "robert.anderson@seed.lif3line.ca", provider: "lorenzo.verduzco@seed.lif3line.ca", service: "house-carpet-cleaning", rating: 4, comment: "Great carpet cleaning service in Toronto. Carpets look brand new." },
      { author: "delois.coffin@seed.lif3line.ca", provider: "william.patterson@seed.lif3line.ca", service: "interior-design-consultation", rating: 5, comment: "Helpful design advice for our Vancouver condo renovation." },
      { author: "matthew.hicks@seed.lif3line.ca", provider: "hendry.thompson@seed.lif3line.ca", service: "panel-upgrade-service", rating: 5, comment: "Panel upgrade completed safely and passed inspection on first try." },
      { author: "daniel.davis@seed.lif3line.ca", provider: "lorenzo.verduzco@seed.lif3line.ca", service: "classic-manicure-nails", rating: 4, comment: "Friendly service and beautiful results. Booking again next month." },
      { author: "sarah.martin@seed.lif3line.ca", provider: "joe.fletcher@seed.lif3line.ca", service: "professional-delivery-services", rating: 5, comment: "Same-day delivery worked perfectly for our business shipment." },
      { author: "james.wilson@seed.lif3line.ca", provider: "rafael.smith@seed.lif3line.ca", service: "emergency-plumbing-repair", rating: 4, comment: "Responded quickly to a late-night leak. Fair pricing in Calgary." },
    ];

    for (const r of reviewSeed) {
      const record = new Record(reviewsCol);
      record.set("author", customerIds[r.author]);
      record.set("provider", providerIds[r.provider]);
      record.set("service", serviceIds[r.service]);
      record.set("rating", r.rating);
      record.set("comment", r.comment);
      record.set("status", "published");
      app.save(record);
    }
  },
  (app) => {
    const seedEmails = [
      "hendry.thompson@seed.lif3line.ca",
      "william.patterson@seed.lif3line.ca",
      "lorenzo.verduzco@seed.lif3line.ca",
      "rafael.smith@seed.lif3line.ca",
      "robert.boyd@seed.lif3line.ca",
      "joe.fletcher@seed.lif3line.ca",
      "robert.anderson@seed.lif3line.ca",
      "delois.coffin@seed.lif3line.ca",
      "matthew.hicks@seed.lif3line.ca",
      "daniel.davis@seed.lif3line.ca",
      "sarah.martin@seed.lif3line.ca",
      "james.wilson@seed.lif3line.ca",
    ];

    const collections = ["reviews", "services", "provider_profiles"];
    for (const name of collections) {
      try {
        const records = app.findAllRecords(name);
        for (const rec of records) {
          app.delete(rec);
        }
      } catch (_) {}
    }

    for (const email of seedEmails) {
      try {
        const user = app.findAuthRecordByEmail("users", email);
        app.delete(user);
      } catch (_) {}
    }

    const categorySlugs = [
      "construction", "removals", "cleaning", "computer-service", "electrical",
      "man-van", "deliveries", "mobile-barber", "interior", "plumbing",
      "nail-technicians", "hair-dressers",
    ];
    for (const slug of categorySlugs) {
      try {
        const rec = app.findFirstRecordByFilter("service_categories", `slug = '${slug}'`);
        app.delete(rec);
      } catch (_) {}
    }

    const citySlugs = [
      "toronto-on", "mississauga-on", "brampton-on", "ottawa-on", "hamilton-on",
      "montreal-qc", "laval-qc", "quebec-city-qc", "vancouver-bc", "surrey-bc",
      "burnaby-bc", "calgary-ab", "edmonton-ab", "winnipeg-mb", "halifax-ns",
      "saskatoon-sk", "regina-sk",
    ];
    for (const slug of citySlugs) {
      try {
        const rec = app.findFirstRecordByFilter("cities", `slug = '${slug}'`);
        app.delete(rec);
      } catch (_) {}
    }
  }
);
