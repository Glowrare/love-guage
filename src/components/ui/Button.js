import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './Button.module.css';

const Button = ({ text, url, onClick, theme, mode }) => {
  return (
    <>
      {mode === 'button' && (
        <button
          onClick={onClick}
          className={`${classes[theme]} ${classes.button}`}
        >
          {text}
        </button>
      )}

      {mode === 'link' && (
        <Link to={url} className={`${classes[theme]} ${classes.link}`}>
          {text}
        </Link>
      )}
    </>
  );
};
Button.defaultProps = {
  theme: 'primary',
  mode: 'button',
};

Button.propTypes = {
  theme: PropTypes.string,
  url: PropTypes.string,
  mode: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default Button;
