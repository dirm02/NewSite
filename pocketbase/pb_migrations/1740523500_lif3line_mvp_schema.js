/// <reference path="../pb_data/types.d.ts" />
migrate(
  (app) => {
    // -------------------------------------------------------------------------
    // 1. cities (no collection dependencies)
    // -------------------------------------------------------------------------
    const cities = new Collection({
      name: "cities",
      type: "base",
      listRule: "",
      viewRule: "",
      createRule: '@request.auth.role = "admin"',
      updateRule: '@request.auth.role = "admin"',
      deleteRule: '@request.auth.role = "admin"',
      fields: [
        { name: "name", type: "text", required: true, min: 1, max: 120 },
        { name: "slug", type: "text", required: true, min: 1, max: 120 },
        { name: "region", type: "text", max: 120 },
        { name: "country", type: "text", max: 120 },
      ],
      indexes: [
        "CREATE UNIQUE INDEX idx_cities_slug ON cities (slug)",
        "CREATE INDEX idx_cities_name ON cities (name)",
      ],
    });
    app.save(cities);

    const citiesCol = app.findCollectionByNameOrId("cities");

    // -------------------------------------------------------------------------
    // 2. Extend users auth collection
    // -------------------------------------------------------------------------
    const users = app.findCollectionByNameOrId("users");

    users.fields.add(
      new Field({
        name: "role",
        type: "select",
        required: true,
        maxSelect: 1,
        values: ["customer", "provider", "admin"],
      })
    );
    users.fields.add(
      new Field({
        name: "name",
        type: "text",
        required: false,
        max: 200,
      })
    );
    users.fields.add(
      new Field({
        name: "phone",
        type: "text",
        required: false,
        max: 40,
      })
    );
    users.fields.add(
      new Field({
        name: "avatar",
        type: "file",
        required: false,
        maxSelect: 1,
        maxSize: 5242880,
        mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/gif"],
      })
    );
    users.fields.add(
      new Field({
        name: "city",
        type: "relation",
        required: false,
        maxSelect: 1,
        collectionId: citiesCol.id,
        cascadeDelete: false,
      })
    );
    users.fields.add(
      new Field({
        name: "verified",
        type: "bool",
        required: false,
      })
    );

    users.listRule =
      '@request.auth.id != "" && (@request.auth.id = id || @request.auth.role = "admin")';
    users.viewRule =
      '@request.auth.id != "" && (@request.auth.id = id || @request.auth.role = "admin")';
    users.createRule = "";
    users.updateRule =
      '@request.auth.id != "" && (@request.auth.id = id || @request.auth.role = "admin")';
    users.deleteRule = '@request.auth.role = "admin"';

    app.save(users);

    const usersCol = app.findCollectionByNameOrId("users");

    // -------------------------------------------------------------------------
    // 3. service_categories
    // -------------------------------------------------------------------------
    const serviceCategories = new Collection({
      name: "service_categories",
      type: "base",
      listRule: "",
      viewRule: "",
      createRule: '@request.auth.role = "admin"',
      updateRule: '@request.auth.role = "admin"',
      deleteRule: '@request.auth.role = "admin"',
      fields: [
        { name: "name", type: "text", required: true, min: 1, max: 120 },
        { name: "slug", type: "text", required: true, min: 1, max: 120 },
        {
          name: "icon",
          type: "file",
          required: false,
          maxSelect: 1,
          maxSize: 1048576,
          mimeTypes: [
            "image/svg+xml",
            "image/png",
            "image/jpeg",
            "image/webp",
          ],
        },
        { name: "listing_count", type: "number", required: false, min: 0 },
        { name: "featured", type: "bool", required: false },
        { name: "sort_order", type: "number", required: false, min: 0 },
      ],
      indexes: [
        "CREATE UNIQUE INDEX idx_service_categories_slug ON service_categories (slug)",
        "CREATE INDEX idx_service_categories_featured ON service_categories (featured)",
      ],
    });
    app.save(serviceCategories);

    const categoriesCol = app.findCollectionByNameOrId("service_categories");

    // -------------------------------------------------------------------------
    // 4. provider_profiles
    // -------------------------------------------------------------------------
    const providerProfiles = new Collection({
      name: "provider_profiles",
      type: "base",
      listRule:
        'status = "active" || user = @request.auth.id || @request.auth.role = "admin"',
      viewRule:
        'status = "active" || user = @request.auth.id || @request.auth.role = "admin"',
      createRule:
        '@request.auth.id != "" && @request.auth.role = "provider" && user = @request.auth.id',
      updateRule: 'user = @request.auth.id || @request.auth.role = "admin"',
      deleteRule: '@request.auth.role = "admin"',
      fields: [
        {
          name: "user",
          type: "relation",
          required: true,
          maxSelect: 1,
          collectionId: usersCol.id,
          cascadeDelete: true,
        },
        { name: "business_name", type: "text", required: true, min: 1, max: 200 },
        { name: "bio", type: "editor", required: false },
        { name: "services_count", type: "number", required: false, min: 0 },
        { name: "rating_avg", type: "number", required: false, min: 0, max: 5 },
        { name: "rating_count", type: "number", required: false, min: 0 },
        { name: "hourly_rate_min", type: "number", required: false, min: 0 },
        {
          name: "city",
          type: "relation",
          required: false,
          maxSelect: 1,
          collectionId: citiesCol.id,
          cascadeDelete: false,
        },
        { name: "verified", type: "bool", required: false },
        {
          name: "status",
          type: "select",
          required: true,
          maxSelect: 1,
          values: ["active", "pending", "suspended"],
        },
      ],
      indexes: [
        "CREATE UNIQUE INDEX idx_provider_profiles_user ON provider_profiles (user)",
        "CREATE INDEX idx_provider_profiles_status ON provider_profiles (status)",
      ],
    });
    app.save(providerProfiles);

    const providersCol = app.findCollectionByNameOrId("provider_profiles");

    // -------------------------------------------------------------------------
    // 5. services
    // -------------------------------------------------------------------------
    const services = new Collection({
      name: "services",
      type: "base",
      listRule:
        'status = "active" || provider.user = @request.auth.id || @request.auth.role = "admin"',
      viewRule:
        'status = "active" || provider.user = @request.auth.id || @request.auth.role = "admin"',
      createRule:
        '@request.auth.id != "" && @request.auth.role = "provider" && provider.user = @request.auth.id',
      updateRule: 'provider.user = @request.auth.id || @request.auth.role = "admin"',
      deleteRule: 'provider.user = @request.auth.id || @request.auth.role = "admin"',
      fields: [
        { name: "title", type: "text", required: true, min: 1, max: 200 },
        { name: "slug", type: "text", required: true, min: 1, max: 200 },
        { name: "description", type: "editor", required: false },
        {
          name: "category",
          type: "relation",
          required: true,
          maxSelect: 1,
          collectionId: categoriesCol.id,
          cascadeDelete: false,
        },
        {
          name: "provider",
          type: "relation",
          required: true,
          maxSelect: 1,
          collectionId: providersCol.id,
          cascadeDelete: false,
        },
        { name: "price_from", type: "number", required: false, min: 0 },
        { name: "price_to", type: "number", required: false, min: 0 },
        { name: "duration_minutes", type: "number", required: false, min: 0 },
        {
          name: "images",
          type: "file",
          required: false,
          maxSelect: 10,
          maxSize: 5242880,
          mimeTypes: ["image/jpeg", "image/png", "image/webp"],
        },
        { name: "featured", type: "bool", required: false },
        {
          name: "status",
          type: "select",
          required: true,
          maxSelect: 1,
          values: ["active", "pending", "inactive"],
        },
        { name: "rating_avg", type: "number", required: false, min: 0, max: 5 },
        {
          name: "city",
          type: "relation",
          required: false,
          maxSelect: 1,
          collectionId: citiesCol.id,
          cascadeDelete: false,
        },
      ],
      indexes: [
        "CREATE UNIQUE INDEX idx_services_slug ON services (slug)",
        "CREATE INDEX idx_services_status ON services (status)",
        "CREATE INDEX idx_services_featured ON services (featured)",
        "CREATE INDEX idx_services_category ON services (category)",
        "CREATE INDEX idx_services_provider ON services (provider)",
      ],
    });
    app.save(services);

    const servicesCol = app.findCollectionByNameOrId("services");

    // -------------------------------------------------------------------------
    // 6. service_requests (customer jobs — not appointment bookings)
    // -------------------------------------------------------------------------
    const serviceRequests = new Collection({
      name: "service_requests",
      type: "base",
      listRule:
        'customer = @request.auth.id || (status = "open" && @request.auth.role = "provider") || @request.auth.role = "admin"',
      viewRule:
        'customer = @request.auth.id || (status = "open" && @request.auth.role = "provider") || @request.auth.role = "admin"',
      createRule:
        '@request.auth.id != "" && @request.auth.role = "customer" && customer = @request.auth.id',
      updateRule: 'customer = @request.auth.id || @request.auth.role = "admin"',
      deleteRule: 'customer = @request.auth.id || @request.auth.role = "admin"',
      fields: [
        {
          name: "customer",
          type: "relation",
          required: true,
          maxSelect: 1,
          collectionId: usersCol.id,
          cascadeDelete: false,
        },
        { name: "title", type: "text", required: true, min: 1, max: 200 },
        { name: "description", type: "editor", required: false },
        {
          name: "category",
          type: "relation",
          required: false,
          maxSelect: 1,
          collectionId: categoriesCol.id,
          cascadeDelete: false,
        },
        {
          name: "budget_type",
          type: "select",
          required: false,
          maxSelect: 1,
          values: ["hourly_rate", "daily_rate", "monthly_rate", "fixed"],
        },
        { name: "budget_min", type: "number", required: false, min: 0 },
        { name: "budget_max", type: "number", required: false, min: 0 },
        {
          name: "experience_level",
          type: "select",
          required: false,
          maxSelect: 1,
          values: ["beginner", "intermediate", "expert"],
        },
        { name: "location", type: "text", required: false, max: 300 },
        {
          name: "city",
          type: "relation",
          required: false,
          maxSelect: 1,
          collectionId: citiesCol.id,
          cascadeDelete: false,
        },
        { name: "tags", type: "json", required: false, maxSize: 2000000 },
        {
          name: "status",
          type: "select",
          required: true,
          maxSelect: 1,
          values: ["open", "in_progress", "completed", "cancelled"],
        },
        { name: "preferred_date", type: "date", required: false },
      ],
      indexes: [
        "CREATE INDEX idx_service_requests_customer ON service_requests (customer)",
        "CREATE INDEX idx_service_requests_status ON service_requests (status)",
        "CREATE INDEX idx_service_requests_category ON service_requests (category)",
      ],
    });
    app.save(serviceRequests);

    const requestsCol = app.findCollectionByNameOrId("service_requests");

    // -------------------------------------------------------------------------
    // 7. quotes
    // -------------------------------------------------------------------------
    const quotes = new Collection({
      name: "quotes",
      type: "base",
      listRule:
        "provider.user = @request.auth.id || request.customer = @request.auth.id || @request.auth.role = \"admin\"",
      viewRule:
        "provider.user = @request.auth.id || request.customer = @request.auth.id || @request.auth.role = \"admin\"",
      createRule:
        '@request.auth.id != "" && @request.auth.role = "provider" && provider.user = @request.auth.id',
      updateRule: "provider.user = @request.auth.id || @request.auth.role = \"admin\"",
      deleteRule: "provider.user = @request.auth.id || @request.auth.role = \"admin\"",
      fields: [
        {
          name: "request",
          type: "relation",
          required: true,
          maxSelect: 1,
          collectionId: requestsCol.id,
          cascadeDelete: true,
        },
        {
          name: "provider",
          type: "relation",
          required: true,
          maxSelect: 1,
          collectionId: providersCol.id,
          cascadeDelete: false,
        },
        { name: "amount", type: "number", required: true, min: 0 },
        { name: "message", type: "text", required: false, max: 5000 },
        { name: "estimated_days", type: "number", required: false, min: 0 },
        {
          name: "status",
          type: "select",
          required: true,
          maxSelect: 1,
          values: ["pending", "accepted", "rejected", "withdrawn"],
        },
      ],
      indexes: [
        "CREATE INDEX idx_quotes_request ON quotes (request)",
        "CREATE INDEX idx_quotes_provider ON quotes (provider)",
        "CREATE INDEX idx_quotes_status ON quotes (status)",
        "CREATE UNIQUE INDEX idx_quotes_request_provider ON quotes (request, provider)",
      ],
    });
    app.save(quotes);

    const quotesCol = app.findCollectionByNameOrId("quotes");

    // -------------------------------------------------------------------------
    // 8. reviews
    // -------------------------------------------------------------------------
    const reviews = new Collection({
      name: "reviews",
      type: "base",
      listRule:
        'status = "published" || author = @request.auth.id || @request.auth.role = "admin"',
      viewRule:
        'status = "published" || author = @request.auth.id || @request.auth.role = "admin"',
      createRule:
        '@request.auth.id != "" && @request.auth.role = "customer" && author = @request.auth.id',
      updateRule: 'author = @request.auth.id || @request.auth.role = "admin"',
      deleteRule: 'author = @request.auth.id || @request.auth.role = "admin"',
      fields: [
        {
          name: "author",
          type: "relation",
          required: true,
          maxSelect: 1,
          collectionId: usersCol.id,
          cascadeDelete: false,
        },
        {
          name: "provider",
          type: "relation",
          required: false,
          maxSelect: 1,
          collectionId: providersCol.id,
          cascadeDelete: false,
        },
        {
          name: "service",
          type: "relation",
          required: false,
          maxSelect: 1,
          collectionId: servicesCol.id,
          cascadeDelete: false,
        },
        {
          name: "request",
          type: "relation",
          required: false,
          maxSelect: 1,
          collectionId: requestsCol.id,
          cascadeDelete: false,
        },
        { name: "rating", type: "number", required: true, min: 1, max: 5 },
        { name: "comment", type: "text", required: false, max: 5000 },
        {
          name: "status",
          type: "select",
          required: true,
          maxSelect: 1,
          values: ["published", "pending"],
        },
      ],
      indexes: [
        "CREATE INDEX idx_reviews_provider ON reviews (provider)",
        "CREATE INDEX idx_reviews_service ON reviews (service)",
        "CREATE INDEX idx_reviews_status ON reviews (status)",
        "CREATE INDEX idx_reviews_author ON reviews (author)",
      ],
    });
    app.save(reviews);

    // silence unused variable lint in migration runtime
    void quotesCol;
  },
  (app) => {
    const deleteOrder = [
      "reviews",
      "quotes",
      "service_requests",
      "services",
      "provider_profiles",
      "service_categories",
      "cities",
    ];

    for (const name of deleteOrder) {
      try {
        const collection = app.findCollectionByNameOrId(name);
        app.delete(collection);
      } catch (_) {
        // collection may not exist if partial apply
      }
    }

    const users = app.findCollectionByNameOrId("users");
    for (const fieldName of [
      "verified",
      "city",
      "avatar",
      "phone",
      "name",
      "role",
    ]) {
      try {
        users.fields.removeByName(fieldName);
      } catch (_) {}
    }
    users.listRule = null;
    users.viewRule = null;
    users.createRule = null;
    users.updateRule = null;
    users.deleteRule = null;
    app.save(users);
  }
);
