import { ArrowButton } from './ButtonVer2.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

const ButtonVer2 = ({ role, onClick }) => {
  return (
    <ArrowButton role={role} onClick={onClick}>
      {role === 'prev' ? (
        <FontAwesomeIcon icon={faAnglesLeft} style={{ color: '#FFF' }} size="4x" />
      ) : (
        <FontAwesomeIcon icon={faAnglesRight} style={{ color: '#FFF' }} size="4x" />
      )}
    </ArrowButton>
  );
};

export default ButtonVer2;
