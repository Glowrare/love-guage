import classes from './Spinner.module.css';

const Spinner = (props) => {
  const customStyle = {
    color: props.color,
    width: props.size,
    height: props.size,
  };

  return (
    <div
      className={`${classes['spinner-cycle']} ${
        props.pulse ? classes.pulse : ''
      }`}
      style={customStyle}
      role='status'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  );
};
export default Spinner;
