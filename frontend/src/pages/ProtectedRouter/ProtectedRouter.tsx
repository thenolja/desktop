import { Navigate } from 'react-router-dom';

interface userInfo {
  isAllow: boolean;
  children: JSX.Element;
}

const ProtectedRoute = ({ isAllow, children }: userInfo): JSX.Element => {
  if (!isAllow) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
