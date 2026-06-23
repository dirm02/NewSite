import React from "react";

interface JobFlowStatusProps {
  loading?: boolean;
  error?: string | null;
  empty?: boolean;
  emptyMessage?: string;
  children?: React.ReactNode;
}

const JobFlowStatus: React.FC<JobFlowStatusProps> = ({
  loading,
  error,
  empty,
  emptyMessage = "No jobs found.",
  children,
}) => {
  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3 text-muted mb-0">Loading jobs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  if (empty) {
    return (
      <div className="text-center py-5">
        <p className="text-muted mb-0">{emptyMessage}</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default JobFlowStatus;
