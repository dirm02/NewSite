import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import PagesAuthHeader from './common/header';
import { all_routes } from '../../../../core/data/routes/all_routes';
import AuthFooter from './common/footer';
import { useAuth } from '../../../../core/auth/AuthContext';
import { dashboardPathForRole } from '../../../../core/auth/roleRoutes';

const UserSignup = () => {
  const navigate = useNavigate();
  const routes = all_routes;
  const { signupCustomer } = useAuth();
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      setError('Please accept the terms to continue.');
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const user = await signupCustomer({
        email: email.trim(),
        password,
        name: name.trim(),
        phone: phone ? `+${phone}` : '',
      });
      navigate(dashboardPathForRole(user.role), { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed');
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
                  <h3 className="mb-2">User Signup</h3>
                  <p>Create a customer account (Canada marketplace)</p>
                </div>
                {error && (
                  <div className="alert alert-danger py-2 small" role="alert">
                    {error}
                  </div>
                )}
                <div className="mb-3">
                  <label className="form-label" htmlFor="signup-name">
                    Full Name
                  </label>
                  <input
                    id="signup-name"
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="signup-email">
                    Email
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="signup-phone">
                    Phone Number
                  </label>
                  <PhoneInput
                    inputProps={{ id: "signup-phone", name: "phone" }}
                    country="ca"
                    value={phone}
                    onChange={setPhone}
                    placeholder="1 (416) 555-0100"
                  />
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <label className="form-label" htmlFor="signup-password">
                      Password
                    </label>
                    <p className="text-gray-6 fw-medium mb-1">
                      Must be 8 characters at least
                    </p>
                  </div>
                  <input
                    id="signup-password"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    autoComplete="new-password"
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember_me"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="remember_me">
                      I agree to{' '}
                      <Link to={routes.termsCondition} className="text-primary text-decoration-underline">
                        Terms of use
                      </Link>{' '}
                      &amp;{' '}
                      <Link to={routes.privacyPolicy} className="text-primary text-decoration-underline">
                        Privacy policy
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-lg btn-linear-primary w-100"
                    disabled={submitting}
                  >
                    {submitting ? 'Creating account…' : 'Sign Up'}
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <p>
                    Already have an account?{' '}
                    <Link to={routes.login} className="text-primary">
                      Sign In
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

export default UserSignup;
