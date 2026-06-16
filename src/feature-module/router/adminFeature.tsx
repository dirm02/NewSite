import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PageLoader from '../../core/loader';
import AdminHeader from '../admin/common/header';
import AdminSidebar from '../admin/common/sidebar';
const AdminFeature = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, [location.pathname]);

  useEffect(() => {
    const delay = 2000;
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, [location.pathname]);
  return (
    <>
      {isLoading && <PageLoader />}
      {!isLoading && (
        <>
          {location.pathname == '/admin/signin' ||
          location.pathname == '/admin/signup' ||
          location.pathname == '/admin/forget-password' ||
          location.pathname == '/admin/wallet-history' ? (
            <></>
          ) : (
            <>
              <div className="admin">
                <div className="main-wrapper">
                  <AdminHeader />
                  <AdminSidebar />
                  <Outlet />
                </div>
              </div>   
            </>
          )}
        </>
      )}
    </>
  );
};

export default AdminFeature;
