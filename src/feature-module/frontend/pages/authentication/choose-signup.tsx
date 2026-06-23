import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import PagesAuthHeader from './common/header';
import { all_routes } from '../../../../core/data/routes/all_routes';

const ChooseSignup = () => {
  const routes = all_routes;
  return (
    <>
      <PagesAuthHeader />
      <main className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <div className="text-center mb-4">
              <h3 className="mb-2">Sign Up</h3>
              <p className="text-gray-6 mb-0">
                Choose the account type that fits what you need today.
              </p>
            </div>
            <div className="row g-3">
              <div className="col-md-6 d-flex">
                <div className="card flex-fill border-0 shadow-sm">
                  <div className="card-body p-4 d-flex flex-column">
                    <span className="avatar avatar-lg rounded-circle bg-primary-transparent text-primary mb-3">
                      <Icon.Tool className="standard-feather" />
                    </span>
                    <h5 className="mb-2">Provider</h5>
                    <p className="text-gray-6 flex-fill">
                      Offer services, receive job requests, and send quotes.
                    </p>
                    <Link
                      to={routes.providerSignup}
                      className="btn btn-linear-primary w-100"
                    >
                      Sign Up
                      <Icon.ArrowRightCircle className="standard-feather ms-1" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="card flex-fill border-0 shadow-sm">
                  <div className="card-body p-4 d-flex flex-column">
                    <span className="avatar avatar-lg rounded-circle bg-secondary-transparent text-secondary mb-3">
                      <Icon.User className="standard-feather" />
                    </span>
                    <h5 className="mb-2">Customer</h5>
                    <p className="text-gray-6 flex-fill">
                      Find trusted Canadian providers and manage your jobs.
                    </p>
                    <Link
                      to={routes.userSignup}
                      className="btn btn-linear-primary w-100"
                    >
                      Sign Up
                      <Icon.ArrowRightCircle className="standard-feather ms-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <span className="text-gray-6">Already have an account? </span>
              <Link to={routes.login} className="text-primary fw-medium">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChooseSignup;
