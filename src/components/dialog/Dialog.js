import classes from './Dialog.module.css';

const Dialog = ({ children, dialogContainer, message }) => {
  return (
    <div
      id='dialog-container'
      ref={dialogContainer}
      aria-labelledby='dialog-title'
      aria-hidden='true'
      className={classes['dialog-container']}
    >
      <div data-a11y-dialog-hide className={classes['dialog-overlay']}></div>
      <div role='document' className={classes['dialog-content']}>
        <button
          type='button'
          className={classes['dialog-button']}
          data-a11y-dialog-hide
          aria-label='Close dialog'
        >
          &times;
        </button>
        <h2 id='dialog-title'>Your Love Guage is...</h2>
        {children}
        <p className={classes['dialog-text']}>{message}</p>
      </div>
    </div>
  );
};
export default Dialog;
