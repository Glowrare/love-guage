import Button from '../ui/Button';
import classes from './HistoryCard.module.css';
import LoveCard from '../ui/LoveCard';

const HistoryCard = (props) => {
  const customStyle = {
    flexBasis: `calc(30% - ${props.gap})`,
  };
  return (
    <div className={classes['history-card']} style={customStyle}>
      <LoveCard>
        <p>
          Your name: <span className={classes.name}>{props.yourName}</span>
        </p>
        <p>
          Their name: <span className={classes.name}>{props.theirName}</span>
        </p>
        <Button
          text='View Result'
          onClick={props.clickHandler}
          theme='primary--alt'
        />
      </LoveCard>
    </div>
  );
};
export default HistoryCard;
