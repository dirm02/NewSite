import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PagesAuthHeader from './common/header';
import AuthFooter from './common/footer';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import { confirmEmailVerification } from '../../../../core/api/pocketbase/auth';

const VerifyEmail = () => {
  const routes = all_routes;
  const location = useLocation();
  const token = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('token') ?? '';
  }, [location.search]);
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
    token ? 'loading' : 'error',
  );
  const [message, setMessage] = useState(
    token
      ? 'Verifying your email...'
      : 'This verification link is missing a token.',
  );

  useEffect(() => {
    if (!token) return;

    let cancelled = false;
    (async () => {
      try {
        await confirmEmailVerification(token);
        if (!cancelled) {
          setStatus('success');
          setMessage('Your email has been verified. You can now sign in.');
        }
      } catch (err) {
        if (!cancelled) {
          setStatus('error');
          setMessage(
            err instanceof Error
              ? err.message
              : 'Email verification failed. Please request a new link.',
          );
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [token]);

  return (
    <>
      <PagesAuthHeader />
      <div className="main-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 mx-auto">
              <div className="d-flex flex-column justify-content-center">
                <div className="card p-sm-4 my-5">
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <h3 className="mb-2">Email Verification</h3>
                      <p>{message}</p>
                    </div>
                    <div
                      className={`alert py-2 small ${
                        status === 'success'
                          ? 'alert-success'
                          : status === 'error'
                            ? 'alert-danger'
                            : 'alert-info'
                      }`}
                      role="status"
                    >
                      {message}
                    </div>
                    <Link
                      to={routes.login}
                      className="btn btn-lg btn-linear-primary w-100"
                    >
                      Sign In
                    </Link>
                    <div>
                      <ImageWithBasePath
                        src="assets/img/bg/authentication-bg.png"
                        className="bg-left-top"
                        alt="Img"
                      />
                      <ImageWithBasePath
                        src="assets/img/bg/authentication-bg.png"
                        className="bg-right-bottom"
                        alt="Img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default VerifyEmail;
