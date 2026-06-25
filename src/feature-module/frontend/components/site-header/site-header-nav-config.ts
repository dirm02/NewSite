import { all_routes } from '../../../../core/data/routes/all_routes';
import type { NavColumnSection } from './site-header-types';

const r = all_routes;

/**
 * Primary navigation for the public / customer shell header.
 * Labels follow the updated HTML spec; paths use SPA routes from `all_routes`.
 * Sections `customers` / `providers` are role-scoped (guest sees both).
 */
export function getSiteHeaderNavSections(): NavColumnSection[] {
  return [
    {
      id: 'home',
      label: 'Home',
      type: 'mega-home',
      homeDemos: [
        {
          label: 'General Home',
          to: r.home,
          img: 'assets/img/home-01.jpg',
        },
      ],
    },
    {
      // GHST-42: trimmed to real MVP discovery routes only. Hidden (routes kept,
      // not deleted): Service Details 1/2 + Service Request (static templates),
      // Providers Details (static template), Categories 1/2 (template pages), and
      // Create Service (a provider-only action that belongs in the provider shell,
      // not the public guest header).
      id: 'services',
      label: 'Services',
      type: 'dropdown',
      items: [
        { label: 'Service Grid', to: r.serviceGrid },
        { label: 'Service List', to: r.serviceList },
        { label: 'Search', to: r.search },
        { label: 'Providers', to: r.provider },
      ],
    },
    {
      id: 'customers',
      label: 'Customers',
      type: 'dropdown',
      roles: ['customer'],
      items: [
        { label: 'Dashboard', to: r.customerDashboard },
        { label: 'Booking', to: r.customerBooking },
        { label: 'Job Bookings', to: r.userJobBooking },
        { label: 'Jobs', to: r.userJob },
        { label: 'Quote Comparison', to: r.userQuoteComparison },
        { label: 'Favorites', to: r.customerFavourite },
        { label: 'Wallet', to: r.customerWallet },
        { label: 'Reviews', to: r.customerReviews },
        { label: 'Chat', to: r.customerChat },
        { label: 'Settings', to: r.customerProfile },
      ],
    },
    {
      id: 'providers',
      label: 'Providers',
      type: 'dropdown',
      roles: ['provider'],
      // GHST-50: trimmed to MVP provider surfaces (live PocketBase). Demo-only
      // items hidden (routes kept): Booking, Payout, Holidays & Leave, Coupons,
      // Offers, Reviews page, Earnings, Chat, and demo settings sub-items.
      items: [
        { label: 'Dashboard', to: r.providerDashboard },
        { label: 'My Services', to: r.providerService },
        { label: 'Job Feed', to: r.providerJobFeed },
        { label: 'Proposals', to: r.providerProposal },
        { label: 'Blog', to: r.providerBlog },
        { label: 'My Jobs', to: r.providerActiveJobs },
        {
          label: 'Settings',
          to: '#',
          children: [
            { label: 'Account Settings', to: r.providerProfileSettings },
            { label: 'Social Profiles', to: r.providerSocialProfile },
            { label: 'Security', to: r.ProviderSecuritySettings },
            { label: 'Notifications', to: r.providerNotification },
          ],
        },
      ],
    },
    {
      // GHST-42: trimmed to real marketing/legal pages only. GHST-49 re-added
      // Blog (now wired to published PocketBase posts). Still hidden (routes
      // kept, not deleted): Error 404/500 + Session Expired (system templates),
      // the Authentication submenu with OTP demo pages (auth is reached via the
      // Sign In / Join Us header buttons), the Booking demo flow (appointment
      // model is out of MVP scope), and Categories (template page).
      id: 'pages',
      label: 'Pages',
      type: 'dropdown',
      items: [
        { label: 'Blog', to: r.blogGrid },
        { label: 'About', to: r.aboutUs },
        { label: 'How It Works', to: r.howItWorks },
        { label: 'Pricing Plan', to: r.pricingPlan },
        { label: 'FAQ', to: r.faq },
        { label: 'Contact Us', to: r.contactUs },
        { label: 'Privacy Policy', to: r.privacyPolicy },
        { label: 'Terms & Conditions', to: r.termsCondition },
      ],
    },
  ];
}
