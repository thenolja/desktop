import { Navigate } from 'react-router-dom';
import LoginUser from './PrtotectedRouter';

const ProtectedRoute = ({ isAllow, children }: LoginUser): any => {
  if (!isAllow) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
