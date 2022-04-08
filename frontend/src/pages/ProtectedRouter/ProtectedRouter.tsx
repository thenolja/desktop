import { Navigate } from 'react-router-dom';

interface AuthorizedUser {
  isAllow: boolean;
  children: JSX.Element;
}

const ProtectedRoute = ({ isAllow, children }: AuthorizedUser): JSX.Element => {
  if (!isAllow) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
