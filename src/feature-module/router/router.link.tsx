import { Navigate, Route } from "react-router-dom";
import { all_routes } from "../../core/data/routes/all_routes";

import NewHome from "../frontend/home/new-home";
import HomeTwo from "../frontend/home/home-3/home-three";
import HomeFour from "../frontend/home/home-four/home-four";
import HomeThree from "../frontend/home/home-4/home-four";
import HomeEight from "../frontend/home/home-eight";
import HomeSeven from "../frontend/home/home-seven/home-seven";
import LoginPhone1 from "../frontend/pages/authentication/login-phone1";
import PhoneOtp from "../frontend/pages/authentication/phone-otp";
import ChooseSignup from "../frontend/pages/authentication/choose-signup";
import UserSignup from "../frontend/pages/authentication/user-signup";
import EmailOtp from "../frontend/pages/authentication/email-otp";
import Login from "../frontend/pages/authentication/login";
import ResetPassword from "../frontend/pages/authentication/reset-password";
import PasswordRecovery from "../frontend/pages/authentication/password-recovery";
import VerifyEmail from "../frontend/pages/authentication/verify-email";
import Success from "../frontend/pages/authentication/success";
import FreeTrail from "../frontend/pages/authentication/free-trail";
import ProviderRegister from "../frontend/pages/authentication/provider-signup";
import AboutUs from "../frontend/pages/about-us/about-us";
import BlogGrid from "../frontend/blog/blog-grid/blog-grid";
import BlogList from "../frontend/blog/blog-list/blog-list";
import BlogDetails from "../frontend/blog/blog-details/blog-details";
import ContactUs from "../frontend/pages/contact-us/contact-us";
import Howitworks from "../frontend/pages/how-it-works/how-it-works";
import Error404 from "../frontend/pages/Error page/error404";
import Error500 from "../frontend/pages/Error page/error500";
import BookingWizard from "../frontend/pages/booking/booking-wizard";
import BookingDetails from "../frontend/pages/booking/booking-details";
import Categories from "../frontend/pages/categories/categories";
import Categories2 from "../frontend/pages/categories/categories2";
import Pricing from "../frontend/pages/pricing/pricing";
import Faq from "../frontend/pages/faq/faq";
import Maintenance from "../frontend/pages/maintenance/maintenance";
import CommingSoon from "../frontend/pages/comming-soon/comming-soon";
import PrivacyPolicy from "../frontend/pages/privacy-policy/privacy-policy";
import TermsCondition from "../frontend/pages/terms-condition/terms-condition";
import SessionExpired from "../frontend/pages/session-expired/session-expired";
import Installer from "../frontend/pages/installer/installer";
import ProviderDashboard from "../frontend/providers/dashboard/dashboard";
import ProviderServices from "../frontend/providers/provider-service/provider-service";
import ProviderServiceList from "../frontend/providers/provider-service-list/provider-service-list";
import ProviderBooking from "../frontend/providers/provider-booking/provider-booking";
import ProviderBookDetails from "../frontend/providers/provider-book-details/provider-book-details";
import StaffList from "../frontend/providers/staff/staffList";
import StaffGrid from "../frontend/providers/staff/staffGrid";
import StaffDetails from "../frontend/providers/staff/staffDetails";
import ProviderPayout from "../frontend/providers/provider-payout/provider-payout";
import ProviderTransaction from "../frontend/providers/provider-payout/providerTransaction";
import ProviderHoliday from "../frontend/providers/provider-holiday/provider-holiday";
import ProviderLeaveHistory from "../frontend/providers/provider-holiday/provider-leave-history";
import ProviderCoupons from "../frontend/providers/provider-coupons/provider-coupons";
import ProviderOffer from "../frontend/providers/provider-offer/provider-offer";
import ProviderEnquiry from "../frontend/providers/provider-enquiry/provider-enquiry";
import ProviderReview from "../frontend/providers/provider-review/provider-review";
import ProviderEarnings from "../frontend/providers/provider-earnings/provider-earning";
import ProviderChat from "../frontend/providers/provider-chat/provider-chat";
import ProviderAppointmentSettings from "../frontend/providers/settings/provider-appointment-settings";
import ProviderProfileSettings from "../frontend/providers/settings/provider-profile-settings";
import ProviderSocialProfile from "../frontend/providers/settings/provider-social-profile";
import ProviderSecuritySettings from "../frontend/providers/settings/provider-security-settings";
import ProviderDeviceManagement from "../frontend/providers/settings/provider-device-management";
import ProviderLoginActivity from "../frontend/providers/settings/provider-login-activity";
import ProviderPlan from "../frontend/providers/settings/provider-plan";
import PaymentSetting from "../frontend/providers/settings/payment-setting";
import ProviderNotification from "../frontend/providers/settings/provider-notification";
import ProviderConnectedApps from "../frontend/providers/settings/provider-connected-apps";
import Verification from "../frontend/providers/settings/verification";
import ServiceGrid from "../frontend/services/service-grid/service-grid";
import ServiceList from "../frontend/services/service-list/service-list";
import ServiceDetails1 from "../frontend/services/service-details/service-details1";
import ServiceDetails2 from "../frontend/services/service-details/service-details2";
import ServiceRequest from "../frontend/services/service-request/serviceRequest";
import Search from "../frontend/services/search/search";
import ProvidersList from "../frontend/services/providers/providers-list";
import ProviderDetails from "../frontend/services/providers/provider-details";
import CreateService from "../frontend/services/create-service/createServices";
import CustomerDashboard from "../frontend/customers/customer-dashboard/customer-dashboard";
import CustomerBooking from "../frontend/customers/customer-booking/customer-booking";
import CustomerFavourite from "../frontend/customers/customer-favourite/customer-favourite";
import CustomerWallet from "../frontend/customers/customer-wallet/customer-wallet";
import CustomerReviews from "../frontend/customers/customer-reviews/customer-reviews";
import CustomerChat from "../frontend/customers/customer-chat/customer-chat";
import CustomerProfile from "../frontend/customers/customer-profile/customer-profile";
import AdminDashboard from "../admin/dashboard/dashboard";
import AdminAddService from "../admin/services/add-service";
import AdminAllService from "../admin/services/all-service";
import ActiveServices from "../admin/services/active-services";
import PendingServices from "../admin/services/pending-services";
import InactiveServices from "../admin/services/inactive-services";
import DeletedServices from "../admin/services/deleted-services";
import EditService from "../admin/services/edit-service";
import CategoriesList from "../admin/categories/categories-list";
import SubCategoriesList from "../admin/categories/subcategories-list";
import ReviewType from "../admin/services/review-type";
import Review from "../admin/services/review";
import Booking from "../admin/bookings/booking";
import PendingBooking from "../admin/bookings/pending-booking";
import InprogressBooking from "../admin/bookings/inprogress-booking";
import CompletedBooking from "../admin/bookings/completedbooking";
import CancelledBooking from "../admin/bookings/cancelled-booking";
import BankTransferList from "../admin/finance-accounts/banktransferlist";
import ApprovedTransferlist from "../admin/finance-accounts/approved-transferlist";
import PendingTransferList from "../admin/finance-accounts/pending-transferlist";
import SuccessTransferlist from "../admin/finance-accounts/success-transferlist";
import RejectTransferlist from "../admin/finance-accounts/rejected-transferlist";
import Wallet from "../admin/finance-accounts/wallet/wallet";
import RefundRequest from "../admin/finance-accounts/refund-request";
import CashOnDelivery from "../admin/finance-accounts/cash-on-delivery";
import PayoutRequests from "../admin/payouts/payout-request";
import PayoutSettigs from "../admin/payouts/payout-settigs";
import SalesTransactions from "../admin/finance-accounts/sales-transactions";
import Chat from "../admin/chat/chat";
import AddPage from "../admin/pages/add-page";
import Editpage from "../admin/pages/edit-page";
import PagesList from "../admin/pages/pages-list";
import PageList from "../admin/pages/page-list";
import AllBlog from "../admin/blog/all-blog";
import PendingBlog from "../admin/blog/pending-blog";
import InactiveBlog from "../admin/blog/inactive-blog";
import BlogCategories from "../admin/blog/blog-categories";
import BlogComments from "../admin/blog/blog-comments";
import Countries from "../admin/location/countries";
import States from "../admin/location/states";
import Cities from "../admin/location/cities";
import Testimonials from "../admin/content/testimonials";
import AdminFaq from "../admin/content/faq";
import Membership from "../admin/membership/membership";
import AddMembership from "../admin/membership/add-membership";
import MembershipAddon from "../admin/membership/membership-addon";
import AdminEarnings from "../admin/reports/admin-earnings";
import AdminProviderEarnings from "../admin/reports/provider-earnings";
import AdminProviderSales from "../admin/reports/provider-sales";
import AdminProviderWallet from "../admin/reports/provider-wallet";
import AdminCustomerWallet from "../admin/reports/customer-wallet";
import MembershipTransaction from "../admin/reports/membership-transaction";
import RefundReport from "../admin/reports/refund-report";
import RegisterReport from "../admin/reports/register-report";
import ServiceSales from "../admin/sales-report/service-sales";
import Users from "../admin/users/users";
import Customers from "../admin/users/customers";
import AdminProviders from "../admin/users/providers";
import Roles from "../admin/roles-permission/roles";
import Permissions from "../admin/roles-permission/permission";
import DeleteAccountrequests from "../admin/user-management/deleteAccountrequests";
import VerficationRequest from "../admin/verfication-request/verfication-request";
import Coupons from "../admin/marketing/coupons";
import Offer from "../admin/marketing/offer";
import FeatureServices from "../admin/marketing/feature-services";
import Localization from "../admin/setting/localization";
import AccountSettings from "../admin/setting/account-settings";
import Security from "../admin/setting/security";
import SocialProfile from "../admin/setting/social-profile";
import Notification from "../admin/setting/notification";
import ConnectApps from "../admin/setting/connectapps";
import AppointmentSettings from "../admin/setting/appointment-settings";
import SiteInformation from "../admin/setting/site-information";
import SeoSettings from "../admin/setting/seo-settings";
import PreferenceSettings from "../admin/setting/preference-settings";
import Appearance from "../admin/setting/appearance";
import HeaderSettings from "../admin/setting/header-settings";
import FooterSettings from "../admin/setting/footer-settings";
import AuthenticationSettings from "../admin/setting/authentication-settings";
import SocialAuthentication from "../admin/setting/social-authentication";
import Language from "../admin/setting/language";
import TypographySetting from "../admin/setting/typography-setting";
import EmailSettings from "../admin/setting/email-settings";
import SmsSettings from "../admin/setting/sms-settings";
import Gdbr from "../admin/setting/gdbr";
import CalendarSetting from "../admin/setting/calendar-setting";
import PaymentGateway from "../admin/setting/payment-gateway";
import PaymentSettings from "../admin/setting/payment-settings";
import TaxRates from "../admin/setting/tax-rates";
import CurrencySettings from "../admin/setting/currency-settings";
import ServiceSettings from "../admin/setting/service-settings";
import ProviderSettings from "../admin/setting/provider-settings";
import StorageSettings from "../admin/setting/storage-settings";
import BanIpAddress from "../admin/setting/ban-ip-address";
import CronJob from "../admin/setting/cronjob";
import SystemBackup from "../admin/setting/system-backup";
import Databasebackup from "../admin/setting/database-backup";
import SystemInformation from "../admin/setting/system-information";
import Announcements from "../admin/support/announcements";
import AbuseReport from "../admin/support/abuse-report";
import ContactMessages from "../admin/support/contact-messages";
import ContactMessageview from "../admin/support/contact-message-view";
import PluginManager from "../admin/management/plugin-manager";
import EmailNewsletter from "../admin/marketing/email-newsletter";
import CacheSystem from "../admin/management/cachesystem";
import EmailTemplate from "../admin/management/email-template";
import SmsTemplate from "../admin/management/sms-template";
import MenuManagement from "../admin/management/menu-management";
import CreateMenu from "../admin/management/create-menu";
import AvailablePlugins from "../admin/plugin/available-plugins";
import WebsiteSettings from "../admin/management/website-settings";
import EditBlog from "../admin/blog/edit-blog";
import HomeFive from "../frontend/home/home-six";
import HomeSix from "../frontend/home/home-6";
import HomeNine from "../frontend/home/home-9/home-nine";
import HomeEleven from "../frontend/home/home-11/homeEleven ";
import HomeTwelve from "../frontend/home/home-12/homeTwelve";
import UserJobBooking from "../frontend/customers/user-job-booking/userJobBooking";
import UserJobBookingDetails from "../frontend/customers/user-job-booking/userJobBookingDetails";
import UserJobBookingCompleted from "../frontend/customers/user-job-booking/userJobBookingCompleted";
import UserJob from "../frontend/customers/user-Job/userJob";
import CustomerJobDetails from "../frontend/customers/user-Job/customerJobDetails";
import CustomerCreateJob from "../frontend/customers/user-Job/customerCreateJob";
import CustomerEditJob from "../frontend/customers/user-Job/customerEditJob";
import SecuritySetting from "../frontend/customers/settings/security-setting";
import CustomerNotification from "../frontend/customers/notification/notification";
import CustomerConnectedApp from "../frontend/customers/settings/connectedApp";
import UserQuoteComparison from "../frontend/customers/user-quote-comparison/userQuoteComparison";
import ProviderJobFeed from "../frontend/providers/provider-job-feed/providerJobFeed";
import ProviderApplyJob from "../frontend/providers/provider-job-feed/providerApplyJob";
import ProviderProposal from "../frontend/providers/provider-proposal/providerProposal";
import ProviderAllBlog from "../frontend/providers/provider-blog/providerAllBlog";
import ProviderAddBlog from "../frontend/providers/provider-blog/providerAddBlog";
import ProviderSubmittedBlog from "../frontend/providers/provider-blog/providerSubmittedBlog";
import ProviderActiveJobs from "../frontend/providers/provider-active-jobs/providerActiveJobs";
import JobDetails from "../frontend/providers/provider-active-jobs/jobDetails";
import JobDetailsDelivered from "../frontend/providers/provider-active-jobs/jobDetailsDelivered";
import JobDetailsCompleted from "../frontend/providers/provider-active-jobs/jobDetailsCompleted";
import JobDetailsInprogress from "../frontend/providers/provider-active-jobs/jobDetailsInprogress";
import JobDetailsCancelled from "../frontend/providers/provider-active-jobs/jobDetailsCancelled";
import ProviderCustomerList from "../frontend/providers/customer/customerList";
import ProviderCustomerGrid from "../frontend/providers/customer/customerGrid";
import ProviderCustomerDetails from "../frontend/providers/customer/customerDetails";
import ProviderSubscription from "../frontend/providers/provider-subscription/provider-subscription";
import CustomerBookingCalendar from "../frontend/customers/customer-booking-calendar/customer-booking-calendar";

const routes = all_routes;

const publicRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/index" />,
    route: Route,
  },
  {
    path: "*",
    name: "NotFound",
    element: <Error404 />,
    route: Route,
  },
  {
    path: routes.home2,
    name: "home-one",
    element: <HomeTwo />,
    route: Route,
  },
  {
    path: routes.home,
    name: "Home",
    element: <NewHome />,
    route: Route,
  },
  {
    path: routes.home3,
    name: "home-one",
    element: <HomeThree />,
    route: Route,
  },
  {
    path: routes.home4,
    name: "home-three",
    element: <HomeFour />,
    route: Route,
  },
  {
    path: routes.home5,
    name: "home-four",
    element: <HomeFive />,
    route: Route,
  },
  {
    path: routes.home6,
    name: "home-five",
    element: <HomeSix />,
    route: Route,
  },
  {
    path: routes.home7,
    name: "home-six",
    element: <HomeSeven />,
    route: Route,
  },
  {
    path: routes.home8,
    name: "home-seven",
    element: <HomeEight />,
    route: Route,
  },
  {
    path: routes.home9,
    name: "home-eight",
    element: <HomeNine />,
    route: Route,
  },

  {
    path: routes.aboutUs,
    name: "About Us",
    element: <AboutUs />,
    route: Route,
  },
  {
    path: routes.blogGrid,
    name: "Blog Grid",
    element: <BlogGrid />,
    route: Route,
  },
  {
    path: routes.blogList,
    name: "Blog List",
    element: <BlogList />,
    route: Route,
  },
  {
    path: routes.blogDetails,
    name: "Blog Details",
    element: <BlogDetails />,
    route: Route,
  },
  {
    path: routes.contactUs,
    name: "Contact Us",
    element: <ContactUs />,
    route: Route,
  },
  {
    path: routes.howItWorks,
    name: "How Is Workds",
    element: <Howitworks />,
    route: Route,
  },
  {
    path: routes.error404,
    name: "Error 404",
    element: <Error404 />,
    route: Route,
  },
  {
    path: routes.error500,
    name: "Error 500",
    element: <Error500 />,
    route: Route,
  },
  {
    path: routes.bookings,
    name: "Bookings",
    element: <BookingWizard />,
    route: Route,
  },
  {
    path: routes.bookingDetails,
    name: "Bookings Details",
    element: <BookingDetails />,
    route: Route,
  },
  {
    path: routes.categories,
    name: "Categories",
    element: <Categories />,
    route: Route,
  },
  {
    path: routes.categories2,
    name: "Categories 2",
    element: <Categories2 />,
    route: Route,
  },
  {
    path: routes.pricingPlan,
    name: "Pricing Plan",
    element: <Pricing />,
    route: Route,
  },
  {
    path: routes.faq,
    name: "FAQ",
    element: <Faq />,
    route: Route,
  },
  {
    path: routes.maintenance,
    name: "Maintenance",
    element: <Maintenance />,
    route: Route,
  },
  {
    path: routes.comingSoon,
    name: "Coming Soon",
    element: <CommingSoon />,
    route: Route,
  },
  {
    path: routes.privacyPolicy,
    name: "Privacy Policy",
    element: <PrivacyPolicy />,
    route: Route,
  },
  {
    path: routes.termsCondition,
    name: "Terms Condition",
    element: <TermsCondition />,
    route: Route,
  },
  {
    path: routes.sessionExpired,
    name: "Session Expired",
    element: <SessionExpired />,
    route: Route,
  },
  {
    path: routes.installer,
    name: "Installer",
    element: <Installer />,
    route: Route,
  },

  {
    path: routes.serviceGrid,
    name: "ServiceGrid",
    element: <ServiceGrid />,
    route: Route,
  },
  {
    path: routes.serviceList,
    name: "ServiceList",
    element: <ServiceList />,
    route: Route,
  },
  {
    path: routes.serviceDetails1,
    name: "service-details-1",
    element: <ServiceDetails1 />,
    route: Route,
  },
  {
    path: routes.serviceDetails2,
    name: "service-details-2",
    element: <ServiceDetails2 />,
    route: Route,
  },
  {
    path: routes.serviceRequest,
    name: "service-request",
    element: <ServiceRequest />,
    route: Route,
  },
  {
    path: routes.search,
    name: "search",
    element: <Search />,
    route: Route,
  },
  {
    path: routes.provider,
    name: "provider",
    element: <ProvidersList />,
    route: Route,
  },
  {
    path: routes.providerDetails,
    name: "provider-details",
    element: <ProviderDetails />,
    route: Route,
  },
  {
    path: routes.createService,
    name: "create-service",
    element: <CreateService />,
    route: Route,
  },

  {
    path: routes.home11,
    name: "general-home-2",
    element: <HomeEleven />,
    route: Route,
  },
  {
    path: routes.home12,
    name: "Paintaing Service",
    element: <HomeTwelve />,
    route: Route,
  },

  // Admin Module Path
  {
    path: "admin",
    name: "Root",
    element: <Navigate to="/admin/dashboard" />,
    route: Route,
  },
];
export const customerRoutes = [
  {
    path: routes.customerDashboard,
    name: "customer-dashboard",
    element: <CustomerDashboard />,
    route: Route,
  },
  {
    path: routes.userJobBooking,
    name: "customer-job-booking",
    element: <UserJobBooking />,
    route: Route,
  },
  {
    path: routes.userJobBookingDetails,
    name: "customer-job-booking-details",
    element: <UserJobBookingDetails />,
    route: Route,
  },
  {
    path: routes.userJobBookingCompleted,
    name: "customer-job-booking-completed",
    element: <UserJobBookingCompleted />,
    route: Route,
  },
  {
    path: routes.userJob,
    name: "customer-job",
    element: <UserJob />,
    route: Route,
  },
  {
    path: routes.customerJobDetails,
    name: "customer-job-details",
    element: <CustomerJobDetails />,
    route: Route,
  },
  {
    path: routes.customerCreateJob,
    name: "customer-create-job",
    element: <CustomerCreateJob />,
    route: Route,
  },
  {
    path: routes.customerEditJob,
    name: "customer-edit-job",
    element: <CustomerEditJob />,
    route: Route,
  },
  
  {
    path: routes.customerFavourite,
    name: "customer-favourite",
    element: <CustomerFavourite />,
    route: Route,
  },
  {
    path: routes.customerWallet,
    name: "customer-reviews",
    element: <CustomerWallet />,
    route: Route,
  },
  {
    path: routes.customerReviews,
    name: "customer-reviews",
    element: <CustomerReviews />,
    route: Route,
  },
  {
    path: routes.customerChat,
    name: "customer-chat",
    element: <CustomerChat />,
    route: Route,
  },
  {
    path: routes.customerProfile,
    name: "customer-profile",
    element: <CustomerProfile />,
    route: Route,
  },
  {
    path: routes.customerSecurity,
    name: "customer-security",
    element: <SecuritySetting />,
    route: Route,
  },
  {
    path: routes.customerNotification,
    name: "customer-notification",
    element: <CustomerNotification />,
    route: Route,
  },
  {
    path: routes.customerConnectedApps,
    name: "customer-connected-App",
    element: <CustomerConnectedApp />,
    route: Route,
  },
  {
    path: routes.userQuoteComparison,
    name: "customer-quote-comparison",
    element: <UserQuoteComparison />,
    route: Route,
  },
 
  {
    path: routes.customerBooking,
    name: "customer-booking",
    element: <CustomerBooking />,
    route: Route,
  },
  {
    path: routes.customerBookingCalendar,
    name: "customer-booking-calendar",
    element: <CustomerBookingCalendar />,
    route: Route,
  },
];
export const providerRoutes = [
  
  {
    path: routes.providerSubscription,
    name: "Provider Subscription",
    element: <ProviderSubscription />,
    route: Route,
  },
  
  {
    path: routes.providerCustomerList,
    name: "Provider customer list",
    element: <ProviderCustomerList />,
    route: Route,
  },
  {
    path: routes.providerCustomerGrid,
    name: "Provider customer grid",
    element: <ProviderCustomerGrid />,
    route: Route,
  },
  {
    path: routes.providerCustomerDetails,
    name: "Provider customer details",
    element: <ProviderCustomerDetails />,
    route: Route,
  },
  
  {
    path: routes.providerBlog,
    name: "Provider Blog",
    element: <ProviderAllBlog />,
    route: Route,
  },
  {
    path: routes.providerAddBlog,
    name: "Provider Add Blog",
    element: <ProviderAddBlog />,
    route: Route,
  },
  {
    path: routes.providerEditBlog,
    name: "Provider Edit Blog",
    element: <ProviderAddBlog />,
    route: Route,
  },
  {
    path: routes.providerSubmittedBlog,
    name: "Provider Submitted Blog",
    element: <ProviderSubmittedBlog />,
    route: Route,
  },
  {
    path: routes.providerService,
    name: "Provider Service",
    element: <ProviderServices />,
    route: Route,
  },
  {
    path: routes.providerServiceList,
    name: "Provider Service",
    element: <ProviderServiceList />,
    route: Route,
  },
  {
    path: routes.providerBooking,
    name: "Provider Booking",
    element: <ProviderBooking />,
    route: Route,
  },
  {
    path: routes.providerBookDetails,
    name: "Provider Book Details",
    element: <ProviderBookDetails />,
    route: Route,
  },
  {
    path: routes.staffList,
    name: "Staff List",
    element: <StaffList />,
    route: Route,
  },
  {
    path: routes.staffGrid,
    name: "Staff Grid",
    element: <StaffGrid />,
    route: Route,
  },
  {
    path: routes.staffDetails,
    name: "Staff Details",
    element: <StaffDetails />,
    route: Route,
  },

  {
    path: routes.providerPayout,
    name: "Provider Payout",
    element: <ProviderPayout />,
    route: Route,
  },
  {
    path: routes.providerTransaction,
    name: "Provider Transaction",
    element: <ProviderTransaction />,
    route: Route,
  },
  {
    path: routes.providerHoliday,
    name: "Provider Holiday",
    element: <ProviderHoliday />,
    route: Route,
  },
  {
    path: routes.providerLeaveHistory,
    name: "Provider Leave History",
    element: <ProviderLeaveHistory />,
    route: Route,
  },
  {
    path: routes.providerCoupons,
    name: "Provider Coupons",
    element: <ProviderCoupons />,
    route: Route,
  },
  {
    path: routes.providerOffer,
    name: "Provider Offer",
    element: <ProviderOffer />,
    route: Route,
  },
  {
    path: routes.providerEnquiry,
    name: "Provider Enquiry",
    element: <ProviderEnquiry />,
    route: Route,
  },
  {
    path: routes.providerReview,
    name: "Provider Reviews",
    element: <ProviderReview />,
    route: Route,
  },
  {
    path: routes.providerEarnings,
    name: "Provider Earnings",
    element: <ProviderEarnings />,
    route: Route,
  },
  {
    path: routes.providerChat,
    name: "Provider Chat",
    element: <ProviderChat />,
    route: Route,
  },
  {
    path: routes.providerAppointmentSettings,
    name: "Provider Appointment Settings",
    element: <ProviderAppointmentSettings />,
    route: Route,
  },
  {
    path: routes.providerProfileSettings,
    name: "Provider Profile Settings",
    element: <ProviderProfileSettings />,
    route: Route,
  },
  {
    path: routes.providerSocialProfile,
    name: "Provider Social Profile",
    element: <ProviderSocialProfile />,
    route: Route,
  },
  {
    path: routes.ProviderSecuritySettings,
    name: "Provider Security Settings",
    element: <ProviderSecuritySettings />,
    route: Route,
  },
  {
    path: routes.providerDeviceManagement,
    name: "Provider Device Management",
    element: <ProviderDeviceManagement />,
    route: Route,
  },
  {
    path: routes.providerLoginActivity,
    name: "Provider Login Activity",
    element: <ProviderLoginActivity />,
    route: Route,
  },
  {
    path: routes.providerPlan,
    name: "Provider Plan and Billings",
    element: <ProviderPlan />,
    route: Route,
  },
  {
    path: routes.paymentSetting,
    name: "Provider Payment Settings",
    element: <PaymentSetting />,
    route: Route,
  },
  {
    path: routes.providerNotification,
    name: "Provider Notification",
    element: <ProviderNotification />,
    route: Route,
  },
  {
    path: routes.providerConnectedApps,
    name: "Provider Connected  Apps",
    element: <ProviderConnectedApps />,
    route: Route,
  },
  {
    path: routes.verfication,
    name: "Provider Profile Verfication",
    element: <Verification />,
    route: Route,
  },
  {
    path: routes.providerDashboard,
    name: "Provider Dashboard",
    element: <ProviderDashboard />,
    route: Route,
  },
  {
    path: routes.providerJobFeed,
    name: "Provider Job Feed",
    element: <ProviderJobFeed />,
    route: Route,
  },
  {
    path: routes.providerApplyJobs,
    name: "Provider Apply Job",
    element: <ProviderApplyJob />,
    route: Route,
  },
  {
    path: routes.providerProposal,
    name: "Provider proposal",
    element: <ProviderProposal />,
    route: Route,
  },
  {
    path: routes.providerActiveJobs,
    name: "Provider active job",
    element: <ProviderActiveJobs />,
    route: Route,
  },
  {
    path: routes.providerJobsDetails,
    name: "Provider job details",
    element: <JobDetails />,
    route: Route,
  },
   {
    path: routes.providerJobsDetailsDelivered,
    name: "provider job details delivered",
    element: <JobDetailsDelivered />,
    route: Route,
  },
   {
    path: routes.providerJobsDetailsCompleted,
    name: "provider job details Completed",
    element: <JobDetailsCompleted />,
    route: Route,
  },
   {
    path: routes.providerJobsDetailsInprogress,
    name: "provider job details inprogress",
    element: <JobDetailsInprogress />,
    route: Route,
  },
   {
    path: routes.providerJobsDetailsCancelled,
    name: "provider job details cancelled",
    element: <JobDetailsCancelled />,
    route: Route,
  },
];
export const authRoutes = [
  {
    path: "/authentication/reset-password",
    name: "reset-password",
    element: <ResetPassword />,
    route: Route,
  },
  {
    path: routes.verifyEmail,
    name: "verify-email",
    element: <VerifyEmail />,
    route: Route,
  },
  {
    path: routes.passwordRecovery,
    name: "password-recovery",
    element: <PasswordRecovery />,
    route: Route,
  },

  {
    path: "/authentication/login",
    name: "login",
    element: <Login />,
    route: Route,
  },
  {
    path: "/authentication/login-phone1",
    name: "login-phone1",
    element: <LoginPhone1 />,
    route: Route,
  },
  {
    path: "/authentication/phone-otp",
    name: "Phone-Otp",
    element: <PhoneOtp />,
    route: Route,
  },
  {
    path: "/authentication/email-otp",
    name: "email-Otp",
    element: <EmailOtp />,
    route: Route,
  },
  {
    path: "/authentication/choose-signup",
    name: "choose-signup",
    element: <ChooseSignup />,
    route: Route,
  },
  {
    path: "/authentication/user-signup",
    name: "user-signup",
    element: <UserSignup />,
    route: Route,
  },
  {
    path: routes.providerSignup,
    name: "Provider-signup",
    element: <ProviderRegister />,
    route: Route,
  },
  {
    path: "/authentication/success",
    name: "success",
    element: <Success />,
    route: Route,
  },
  {
    path: "/authentication/free-trail",
    name: "free-trial",
    element: <FreeTrail />,
    route: Route,
  },
  {
    path: "/authentication/register",
    name: "register",
    element: <Navigate to={routes.chooseSignUp} replace />,
    route: Route,
  },
];
export const adminRoutes = [
  {
    path: routes.adminDashboard,
    element: <AdminDashboard />,
    route: Route,
  },
  {
    path: routes.adminAddServices,
    element: <AdminAddService />,
    route: Route,
  },
  {
    path: routes.adminAllServices,
    element: <AdminAllService />,
    route: Route,
  },
  {
    path: routes.adminActiveServices,
    element: <ActiveServices />,
    route: Route,
  },
  {
    path: routes.adminPendingServices,
    element: <PendingServices />,
    route: Route,
  },
  {
    path: routes.adminInActiveServices,
    element: <InactiveServices />,
    route: Route,
  },
  {
    path: routes.adminDeletedServices,
    element: <DeletedServices />,
    route: Route,
  },
  {
    path: routes.adminEditService,
    element: <EditService />,
    route: Route,
  },
  {
    path: routes.adminCategoriesList,
    element: <CategoriesList />,
    route: Route,
  },
  {
    path: routes.adminSubCategories,
    element: <SubCategoriesList />,
    route: Route,
  },
  {
    path: routes.adminReviewType,
    element: <ReviewType />,
    route: Route,
  },
  {
    path: routes.adminReview,
    element: <Review />,
    route: Route,
  },
  {
    path: routes.adminBooking,
    element: <Booking />,
    route: Route,
  },
  {
    path: routes.adminPendingBooking,
    element: <PendingBooking />,
    route: Route,
  },
  {
    path: routes.adminInProgressBooking,
    element: <InprogressBooking />,
    route: Route,
  },
  {
    path: routes.adminCompletedBooking,
    element: <CompletedBooking />,
    route: Route,
  },
  {
    path: routes.adminCancelledBooking,
    element: <CancelledBooking />,
    route: Route,
  },
  {
    path: routes.adminBankTransferList,
    element: <BankTransferList />,
    route: Route,
  },
  {
    path: routes.adminApprovedTransferlist,
    element: <ApprovedTransferlist />,
    route: Route,
  },
  {
    path: routes.adminPendingTransferlist,
    element: <PendingTransferList />,
    route: Route,
  },
  {
    path: routes.adminSuccessTransferlist,
    element: <SuccessTransferlist />,
    route: Route,
  },
  {
    path: routes.adminRejectedTransferlist,
    element: <RejectTransferlist />,
    route: Route,
  },
  {
    path: routes.adminWallet,
    element: <Wallet />,
    route: Route,
  },
  {
    path: routes.adminRefundRequest,
    element: <RefundRequest />,
    route: Route,
  },
  {
    path: routes.adminCashOnDelivery,
    element: <CashOnDelivery />,
    route: Route,
  },
  {
    path: routes.adminPayoutRequest,
    element: <PayoutRequests />,
    route: Route,
  },
  {
    path: routes.adminPayoutSettings,
    element: <PayoutSettigs />,
    route: Route,
  },
  {
    path: routes.adminSalestransactions,
    element: <SalesTransactions />,
    route: Route,
  },
  {
    path: routes.adminChat,
    element: <Chat />,
    route: Route,
  },
  {
    path: routes.adminAddPages,
    element: <AddPage />,
    route: Route,
  },
  {
    path: routes.adminEditPages,
    element: <Editpage />,
    route: Route,
  },
  {
    path: routes.adminPagesList,
    element: <PagesList />,
    route: Route,
  },
  {
    path: routes.adminPageList,
    element: <PageList />,
    route: Route,
  },
  {
    path: routes.adminAllBlog,
    element: <AllBlog />,
    route: Route,
  },
  {
    path: routes.adminPendingBlog,
    element: <PendingBlog />,
    route: Route,
  },
  {
    path: routes.adminInActiveBlog,
    element: <InactiveBlog />,
    route: Route,
  },
  {
    path: routes.adminBlogsCategories,
    element: <BlogCategories />,
    route: Route,
  },
  {
    path: routes.adminBlogComments,
    element: <BlogComments />,
    route: Route,
  },
  {
    path: routes.adminCountries,
    element: <Countries />,
    route: Route,
  },
  {
    path: routes.adminState,
    element: <States />,
    route: Route,
  },
  {
    path: routes.adminCities,
    element: <Cities />,
    route: Route,
  },
  {
    path: routes.adminTestimonials,
    element: <Testimonials />,
    route: Route,
  },
  {
    path: routes.faqadmin,
    element: <AdminFaq />,
    route: Route,
  },
  {
    path: routes.adminMembership,
    element: <Membership />,
    route: Route,
  },
  {
    path: routes.adminAddMembership,
    element: <AddMembership />,
    route: Route,
  },
  {
    path: routes.adminMembershipaddons,
    element: <MembershipAddon />,
    route: Route,
  },
  {
    path: routes.adminEarnings,
    element: <AdminEarnings />,
    route: Route,
  },
  {
    path: routes.providerEarning,
    element: <AdminProviderEarnings />,
    route: Route,
  },
  {
    path: routes.providerSales,
    element: <AdminProviderSales />,
    route: Route,
  },
  {
    path: routes.providerWallet,
    element: <AdminProviderWallet />,
    route: Route,
  },
  {
    path: routes.adminCustomerWallet,
    element: <AdminCustomerWallet />,
    route: Route,
  },
  {
    path: routes.adminMembershipTransaction,
    element: <MembershipTransaction />,
    route: Route,
  },
  {
    path: routes.refundReport,
    element: <RefundReport />,
    route: Route,
  },
  {
    path: routes.registerreport,
    element: <RegisterReport />,
    route: Route,
  },
  {
    path: routes.salesReport,
    element: <ServiceSales />,
    route: Route,
  },
  {
    path: routes.users,
    element: <Users />,
    route: Route,
  },
  {
    path: routes.userCustomer,
    element: <Customers />,
    route: Route,
  },
  {
    path: routes.userProviders,
    element: <AdminProviders />,
    route: Route,
  },
  {
    path: routes.roles,
    element: <Roles />,
    route: Route,
  },
  {
    path: routes.permissions,
    element: <Permissions />,
    route: Route,
  },
  {
    path: routes.deleteAccountReqest,
    element: <DeleteAccountrequests />,
    route: Route,
  },
  {
    path: routes.verificationRequest,
    element: <VerficationRequest />,
    route: Route,
  },
  {
    path: routes.adminCoupons,
    element: <Coupons />,
    route: Route,
  },
  {
    path: routes.adminOffer,
    element: <Offer />,
    route: Route,
  },
  {
    path: routes.featureServices,
    element: <FeatureServices />,
    route: Route,
  },
  {
    path: routes.emailNewsletter,
    element: <EmailNewsletter />,
    route: Route,
  },
  {
    path: routes.cacheSystem,
    element: <CacheSystem />,
    route: Route,
  },
  {
    path: routes.emailTemplates,
    element: <EmailTemplate />,
    route: Route,
  },
  {
    path: routes.smsTemplate,
    element: <SmsTemplate />,
    route: Route,
  },
  {
    path: routes.menuManagement,
    element: <MenuManagement />,
    route: Route,
  },
  {
    path: routes.createMenu,
    element: <CreateMenu />,
    route: Route,
  },
  {
    path: routes.localization,
    name: "localization",
    element: <Localization />,
    route: Route,
  },
  {
    path: routes.accountSettings,
    name: "email-settings",
    element: <AccountSettings />,
    route: Route,
  },
  {
    path: routes.security,
    name: "security",
    element: <Security />,
  },
  {
    path: routes.socialProfile,
    name: "social-profile",
    element: <SocialProfile />,
    route: Route,
  },
  {
    path: routes.adminNotification,
    name: "notification",
    element: <Notification />,
    route: Route,
  },
  {
    path: routes.connectedApps,
    name: "connected-apps",
    element: <ConnectApps />,
    route: Route,
  },
  {
    path: routes.appointmentSettings,
    name: "appointment-settings",
    element: <AppointmentSettings />,
    route: Route,
  },

  {
    path: routes.siteInformation,
    name: "site-information",
    element: <SiteInformation />,
    route: Route,
  },
  {
    path: routes.seoSettings,
    name: "seo-settings",
    element: <SeoSettings />,
    route: Route,
  },
  {
    path: routes.preferenceSettings,
    name: "add-home",
    element: <PreferenceSettings />,
    route: Route,
  },
  {
    path: routes.appearance,
    name: "appearance",
    element: <Appearance />,
    route: Route,
  },
  {
    path: routes.headerSettings,
    name: "header-settings",
    element: <HeaderSettings />,
    route: Route,
  },
  {
    path: routes.footerSettings,
    name: "footer-settings",
    element: <FooterSettings />,
    route: Route,
  },
  {
    path: routes.authenticationSettings,
    name: "authentication-settings",
    element: <AuthenticationSettings />,
    route: Route,
  },
  {
    path: routes.socialAuthentication,
    name: "social-authentication",
    element: <SocialAuthentication />,
    route: Route,
  },
  {
    path: routes.language,
    name: "language",
    element: <Language />,
    route: Route,
  },
  {
    path: routes.typographytSettings,
    name: "typography-settings",
    element: <TypographySetting />,
    route: Route,
  },
  {
    path: routes.emailSettings,
    name: "email-settings",
    element: <EmailSettings />,
    route: Route,
  },
  {
    path: routes.smsSettings,
    name: "sms-settings",
    element: <SmsSettings />,
    route: Route,
  },
  {
    path: routes.gdpr,
    name: "gdbr",
    element: <Gdbr />,
    route: Route,
  },
  {
    path: routes.calendarSetting,
    name: "calendar-settings",
    element: <CalendarSetting />,
    route: Route,
  },
  {
    path: routes.paymentGateway,
    name: "payment-gateways",
    element: <PaymentGateway />,
    route: Route,
  },
  {
    path: routes.paymentSettings,
    name: "payment-setting",
    element: <PaymentSettings />,
    route: Route,
  },
  {
    path: routes.taxRates,
    name: "tax-rates",
    element: <TaxRates />,
    route: Route,
  },
  {
    path: routes.currencySettings,
    name: "currency-settings",
    element: <CurrencySettings />,
    route: Route,
  },
  {
    path: routes.serviceSettings,
    name: "service-settings",
    element: <ServiceSettings />,
    route: Route,
  },
  {
    path: routes.providerSettings,
    name: "footer-settings",
    element: <ProviderSettings />,
    route: Route,
  },
  {
    path: routes.storageSetting,
    name: "storage-settings",
    element: <StorageSettings />,
    route: Route,
  },
  {
    path: routes.banIpAddress,
    name: "ban-ip-address",
    element: <BanIpAddress />,
  },
  {
    path: routes.cronJob,
    name: "cronjob",
    element: <CronJob />,
    route: Route,
  },
  {
    path: routes.systemBackup,
    name: "system-backup",
    element: <SystemBackup />,
    route: Route,
  },
  {
    path: routes.databasebackup,
    name: "database-backup",
    element: <Databasebackup />,
    route: Route,
  },
  {
    path: routes.systemInformation,
    name: "system-information",
    element: <SystemInformation />,
    route: Route,
  },
  {
    path: routes.announcements,
    name: "announcements",
    element: <Announcements />,
    route: Route,
  },
  {
    path: routes.abuseReport,
    name: "abuse-reports",
    element: <AbuseReport />,
    route: Route,
  },
  {
    path: routes.contactMessages,
    name: "contact-messages",
    element: <ContactMessages />,
    route: Route,
  },
  {
    path: routes.contactMessagesView,
    name: "contact-messages-view",
    element: <ContactMessageview />,
    route: Route,
  },
  {
    path: routes.pluginManager,
    name: "plugin-manager",
    element: <PluginManager />,
    route: Route,
  },
  {
    path: routes.availablePlugins,
    name: "available-plugin",
    element: <AvailablePlugins />,
    route: Route,
  },
  {
    path: routes.websiteSettings,
    name: "website-settings",
    element: <WebsiteSettings />,
    route: Route,
  },
  {
    path: routes.adminEditblog,
    element: <EditBlog />,
    route: Route,
  },
];

export { publicRoutes };
