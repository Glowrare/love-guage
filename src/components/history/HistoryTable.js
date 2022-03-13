import PropTypes from 'prop-types';
import Button from '../ui/Button';
import classes from './HistoryTable.module.css';

const HistoryTable = ({ history, clickHandler }) => {
  return (
    <div className={classes['history-table--container']}>
      <table className={classes['history-table']}>
        <thead>
          <tr>
            <th>SN</th>
            <th>Your name</th>
            <th>Their Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => {
            return (
              <tr key={item.id} id={item.id}>
                <td>{++index}</td>
                <td>{item.yourName}</td>
                <td>{item.theirName}</td>
                <td>
                  <Button
                    text='View Result'
                    onClick={() => clickHandler(item.id)}
                    theme='primary--bare'
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
HistoryTable.propTypes = {
  history: PropTypes.array.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
export default HistoryTable;
