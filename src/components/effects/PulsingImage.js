import PropTypes from 'prop-types';
import classes from './PulsingImage.module.css';

const PulsingImage = ({
  children,
  component,
  position,
  src,
  altText,
  animDuration,
  topPos,
  rightPos,
  bottomPos,
  leftPos,
}) => {
  const customStyle = {
    animationDuration: animDuration,
    top: topPos,
    right: rightPos,
    bottom: bottomPos,
    left: leftPos,
  };
  return (
    <div
      className={`${classes[position]} ${classes.pulse}`}
      style={customStyle}
    >
      {!component && <img src={src} alt={altText} />}
      {component && <>{children}</>}
    </div>
  );
};

PulsingImage.defaultProps = {
  alt: '',
  position: 'static',
  component: true,
};

PulsingImage.propTypes = {
  src: PropTypes.string,
  altText: PropTypes.string,
  position: PropTypes.string,
  children: PropTypes.any,
  component: PropTypes.bool,
  animDuration: PropTypes.string,
  topPos: PropTypes.string,
  rightPos: PropTypes.string,
  bottomPos: PropTypes.string,
  leftPos: PropTypes.string,
};

export default PulsingImage;
