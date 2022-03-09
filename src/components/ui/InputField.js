import classes from './InputField.module.css';

const InputField = (props) => {
  return (
    <div className={props.floating ? classes['floating-form-group'] : ''}>
      <input
        type='text'
        placeholder={props.placeholder}
        className={classes['form-control']}
        ref={props.refName}
        onKeyPress={props.inputHandler}
      />
      <label>{props.label}</label>
    </div>
  );
};

export default InputField;
