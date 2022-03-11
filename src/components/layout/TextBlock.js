import classes from './TextBlock.module.css';

const TextBlock = (props) => {
  return (
    <div className={classes['text-block']}>
      <h2 className={classes.header}>{props.header}</h2>
      <div className={classes['paragraph-block']}>{props.paragraph}</div>
      <small className={classes.footnote}>{props.footnote}</small>
    </div>
  );
};
export default TextBlock;
