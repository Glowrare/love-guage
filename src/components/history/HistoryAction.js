// import { useState } from 'react'
import Button from '../ui/Button';
import classes from './HistoryAction.module.css';

const HistoryAction = ({ toggleView, viewType }) => {
  // const [cardView, setCardView] = useState(true)
  // const [tableView, setTableView] = useState(false)

  return (
    <div className={`${classes['history-actions']} ${classes[viewType]}`}>
      <span className='sr-only'>
        Click buttons to toggle list display in card or table view. Default view
        is card
      </span>
      <span>View as: </span>
      <Button
        text='Grid'
        onClick={() => toggleView(false)}
        theme='primary--alt'
      />
      <Button
        text='Table'
        onClick={() => toggleView(true)}
        theme='primary--alt'
      />
    </div>
  );
};
export default HistoryAction;
