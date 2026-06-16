import AdminFeature from './adminFeature';
import AuthFeature from './authFeature';
import CustomerLayout from './customerLayout';
import Feature from './feature';
import ProviderLayout from './providerLayout';
import { adminRoutes, authRoutes, customerRoutes, providerRoutes, publicRoutes } from './router.link';
import { Route, Routes } from 'react-router-dom';
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Feature />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route element={<CustomerLayout />}>
          {customerRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route element={<ProviderLayout />}>
          {providerRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route element={<AuthFeature />}>
          {authRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route element={<AdminFeature />}>
          {adminRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
      </Routes>
    </>
  );
};
export default AllRoutes;
