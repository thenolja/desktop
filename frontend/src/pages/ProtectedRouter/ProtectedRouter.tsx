import { Navigate } from 'react-router-dom';
import LoginUser from './PrtotectedRouter';

const ProtectedRoute = ({ isAllow, children }: LoginUser): JSX.Element => {
  if (!isAllow) {
    return (
      <>
        <Navigate to="/" replace />;
      </>
    );
  }
  return <>{children}</>;
};

export default ProtectedRoute;
