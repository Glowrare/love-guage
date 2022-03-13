import { CSVLink } from 'react-csv';
import Button from '../ui/Button';
import classes from './HistoryAction.module.css';

const HistoryAction = ({
  toggleView,
  viewType,
  csvData,
  csvHeaders,
  deleteHandler,
}) => {
  return (
    <div className={`${classes['history-actions']} ${classes[viewType]}`}>
      <div className={classes['toggle-group']}>
        <span className='sr-only'>
          Click buttons to toggle list display in card or table view. Default
          view is card
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
      <div className={classes['cta-group']}>
        <Button
          text='Empty List'
          onClick={deleteHandler}
          theme='primary--bare'
        />
        <CSVLink
          data={csvData}
          headers={csvHeaders}
          filename='love-guage.csv'
          className={classes['download--cta']}
        >
          Download CSV
        </CSVLink>
      </div>
    </div>
  );
};
export default HistoryAction;
