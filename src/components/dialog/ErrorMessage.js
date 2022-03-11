import classes from './ErrorMessage.module.css';

const ErrorMessage = (props) => {
  return <div className={classes.error}>{props.message}</div>;
};
export default ErrorMessage;
