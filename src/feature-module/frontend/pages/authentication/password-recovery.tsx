import PagesAuthHeader from './common/header';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
import AuthFooter from './common/footer';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { useState, type FormEvent } from 'react';
import { requestPasswordReset } from '../../../../core/api/pocketbase/auth';

const PasswordRecovery = () => {
  const routes = all_routes;
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSent(false);
    setSubmitting(true);
    try {
      await requestPasswordReset(email.trim());
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Password reset request failed');
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
                  <h3 className="mb-2">Forgot Password?</h3>
                  <p>
                    Enter your email and we will send you a secure reset link.
                  </p>
                </div>
                {error && (
                  <div className="alert alert-danger py-2 small" role="alert">
                    {error}
                  </div>
                )}
                {sent && (
                  <div className="alert alert-success py-2 small" role="status">
                    If an account exists for this email, a reset link has been sent.
                  </div>
                )}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-lg btn-linear-primary w-100"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </div>
                <div className=" d-flex justify-content-center">
                  <p>
                    Remember Password?{" "}
                    <Link to={routes.login} className="text-primary">
                      Sign In
                    </Link>
                  </p>
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

export default PasswordRecovery;
