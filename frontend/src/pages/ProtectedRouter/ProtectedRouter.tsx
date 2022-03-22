import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'src/contexts/state.type';
import { selectAuth } from 'src/contexts/auth';

const ProtectedRoute = ({ children }): JSX.Element => {
  const { id, nickname, email } = useAppSelector(selectAuth);
  console.log(id, nickname, email);
  // if (!(id && nickname && email)) {
  //   return <Navigate to="/" replace />;
  // }
  return children;
};

export default ProtectedRoute;
