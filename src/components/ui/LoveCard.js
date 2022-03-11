import { ReactComponent as BlueHeart } from './../../blue-heart.svg';
import { ReactComponent as RedHeart } from './../../red-heart.svg';

import classes from './LoveCard.module.css';

const LoveCard = (props) => {
  return (
    <div className={classes.card}>
      {props.children}
      <BlueHeart className={classes['top-left']} />
      <RedHeart className={classes['bottom-right']} />
    </div>
  );
};
export default LoveCard;
