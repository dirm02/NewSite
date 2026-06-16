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
        {
          label: 'General Home 2',
          to: r.home11,
          img: 'assets/img/home-02.jpg',
          badge: 'NEW',
        },
        {
          label: 'Painting Services',
          to: r.home12,
          img: 'assets/img/home-3.jpg',
          badge: 'NEW',
        },
        {
          label: 'Cleaning Services',
          to: r.home2,
          img: 'assets/img/home-04.jpg',
        },
        {
          label: 'Salon Services',
          to: r.home3,
          img: 'assets/img/home-05.jpg',
        },
        {
          label: 'Catering Services',
          to: r.home4,
          img: 'assets/img/home-06.jpg',
        },
        {
          label: 'Car Wash',
          to: r.home5,
          img: 'assets/img/home-07.jpg',
        },
        {
          label: 'House Problems',
          to: r.home6,
          img: 'assets/img/home-08.jpg',
        },
        {
          label: 'Mechanic Services',
          to: r.home9,
          img: 'assets/img/home-09.jpg',
        },
        {
          label: 'Pet Grooming Services',
          to: r.home8,
          img: 'assets/img/home-10.jpg',
        },
      ],
    },
    {
      id: 'services',
      label: 'Services',
      type: 'dropdown',
      items: [
        { label: 'Service Grid', to: r.serviceGrid },
        { label: 'Service List', to: r.serviceList },
        {
          label: 'Service Details',
          to: '#',
          children: [
            { label: 'Service Details 1', to: r.serviceDetails1 },
            { label: 'Service Details 2', to: r.serviceDetails2 },
          ],
        },
        { label: 'Service Request', to: r.serviceRequest },
        { label: 'Search', to: r.search },
        {
          label: 'Providers',
          to: '#',
          children: [
            { label: 'Providers List', to: r.provider },
            { label: 'Providers Details', to: r.providerDetails },
          ],
        },
        {
          label: 'Categories',
          to: '#',
          children: [
            { label: 'Categories 1', to: r.categories },
            { label: 'Categories 2', to: r.categories2 },
          ],
        },
        { label: 'Create Service', to: r.createService },
      ],
    },
    {
      id: 'customers',
      label: 'Customers',
      type: 'dropdown',
      roles: ['guest', 'customer'],
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
      roles: ['guest', 'provider'],
      items: [
        { label: 'Dashboard', to: r.providerDashboard },
        { label: 'My Services', to: r.providerService },
        { label: 'Booking', to: r.providerBooking },
        { label: 'Job Feed', to: r.providerDashboard },
        { label: 'Proposals', to: r.providerEnquiry },
        { label: 'My Jobs', to: r.providerBooking },
        { label: 'Payout', to: r.providerPayout },
        {
          label: 'Settings',
          to: '#',
          children: [
            {
              label: 'Appointment Settings',
              to: r.providerAppointmentSettings,
            },
            { label: 'Account Settings', to: r.providerProfileSettings },
            { label: 'Social Profiles', to: r.providerSocialProfile },
            { label: 'Security', to: r.ProviderSecuritySettings },
            { label: 'Plan & Billings', to: r.providerPlan },
            { label: 'Notifications', to: r.providerNotification },
            { label: 'Connected Apps', to: r.providerConnectedApps },
            { label: 'Payment', to: r.paymentSetting },
          ],
        },
        { label: 'Holidays & Leave', to: r.providerHoliday },
        { label: 'Coupons', to: r.providerCoupons },
        { label: 'Offers', to: r.providerOffer },
        { label: 'Reviews', to: r.providerReview },
        { label: 'Earnings', to: r.providerEarnings },
        { label: 'Chat', to: r.providerChat },
      ],
    },
    {
      id: 'pages',
      label: 'Pages',
      type: 'dropdown',
      items: [
        { label: 'About', to: r.aboutUs },
        {
          label: 'Blog',
          to: r.blogGrid,
          children: [
            { label: 'Blog Grid', to: r.blogGrid },
            { label: 'Blog List', to: r.blogList },
            { label: 'Blog Details', to: r.blogDetails },
          ],
        },
        { label: 'Contact Us', to: r.contactUs },
        { label: 'How It Works', to: r.howItWorks },
        {
          label: 'Error Page',
          to: '#',
          children: [
            { label: '404 Error', to: r.error404 },
            { label: '500 Error', to: r.error500 },
          ],
        },
        {
          label: 'Authentication',
          to: '#',
          children: [
            { label: 'Login', to: r.login },
            { label: 'Customer Signup', to: r.userSignup },
            { label: 'Provider Signup', to: r.providerSignup },
            { label: 'Reset Password', to: r.resetPassword },
            { label: 'Phone OTP', to: r.phoneOtp },
            { label: 'Email OTP', to: r.emailOtp },
            { label: 'Free Trial', to: r.freeTrail },
          ],
        },
        {
          label: 'Booking',
          to: '#',
          children: [
            { label: 'Booking 1', to: r.bookings },
            { label: 'Booking 2', to: r.booking2 },
            { label: 'Booking Checkout', to: r.bookingPayment },
            { label: 'Booking Success', to: r.bookingDone },
            { label: 'Booking Details', to: r.bookingDetails },
          ],
        },
        { label: 'Categories', to: r.categories },
        { label: 'Pricing Plan', to: r.pricingPlan },
        { label: 'FAQ', to: r.faq },
        { label: 'Maintenance', to: r.maintenance },
        { label: 'Coming Soon', to: r.comingSoon },
        { label: 'Privacy Policy', to: r.privacyPolicy },
        { label: 'Terms & Conditions', to: r.termsCondition },
        { label: 'Session Expired', to: r.sessionExpired },
        { label: 'Installer', to: r.installer },
      ],
    },
  ];
}
