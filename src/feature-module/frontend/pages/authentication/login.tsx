import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import PagesAuthHeader from './common/header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
import AuthFooter from './common/footer';
import { useState, useEffect, type FormEvent } from 'react';
import { useAuth } from '../../../../core/auth/AuthContext';
import { dashboardPathForRole } from '../../../../core/auth/roleRoutes';

const Login2 = () => {
  const routes = all_routes;
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated, user, loading: authLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const from =
    (location.state as { from?: string } | null)?.from ??
    routes.customerDashboard;

  useEffect(() => {
    if (!authLoading && isAuthenticated && user) {
      navigate(dashboardPathForRole(user.role), { replace: true });
    }
  }, [authLoading, isAuthenticated, user, navigate]);

  if (authLoading || isAuthenticated) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const record = await login(email.trim(), password);
      navigate(from.startsWith('/authentication') ? dashboardPathForRole(record.role) : from, {
        replace: true,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
      setError(
        message === 'Failed to authenticate.'
          ? 'Email or password is incorrect. Create an account first if you have not signed up yet.'
          : message,
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
     <PagesAuthHeader />
     <div className="main-wrapper">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-5 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column justify-content-center">
            <div className="card p-sm-4 my-5">
              <div className="card-body">
                <div className="text-center mb-3">
                  <h3 className="mb-2">Welcome</h3>
                  <p>Enter your credentials to access your account</p>
                </div>
                {error && (
                  <div className="alert alert-danger py-2 small" role="alert">
                    {error}
                  </div>
                )}
                <div className="mb-3">
                  <label className="form-label" htmlFor="login-email">
                    Email
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <label className="form-label" htmlFor="login-password">
                      Password
                    </label>
                    <Link
                      to={routes.forgotPassword}
                      className="text-primary fw-medium text-decoration-underline mb-1 fs-14"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <input
                    id="login-password"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember_me"
                      readOnly
                      checked
                    />
                    <label className="form-check-label" htmlFor="remember_me">
                      Session saved until logout
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-lg btn-linear-primary w-100"
                    disabled={submitting}
                  >
                    {submitting ? 'Signing in…' : 'Sign In'}
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <p>
                    Don’t have an account?{' '}
                    <Link to={routes.chooseSignUp} className="text-primary">
                      Join us Today
                    </Link>
                  </p>
                </div>
              </div>
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
        </form>
      </div>
    </div>
  </div>
</div>
<AuthFooter/>
    </>
  );
};

export default Login2;
