import { useEffect, useRef, useState } from 'react';
import classes from './Guage.module.css';

const Guage = ({ val }) => {
  const gaugeElement = useRef();

  const [guageVal, setGuageVal] = useState(null);
  const [guagePerc, setGuagePerc] = useState('');
  const [colorScheme, setColorScheme] = useState('');

  const setGaugeValue = (gauge, value) => {
    if (value < 0 || value > 100) {
      return;
    }
    setGuageVal(value);
    setGuagePerc(`${value}%`);

    if (value > 0 && value < 50) setColorScheme('var(--danger)');
    if (value >= 50 && value <= 75) setColorScheme('var(--warning)');
    if (value > 75) setColorScheme('var(--success)');
  };
  const customStyle = {
    transform: `rotate(${guageVal / 200}turn)`,
    color: colorScheme,
  };

  useEffect(() => {
    setGaugeValue(gaugeElement.current, val);
  }, [val]);

  return (
    <div className={classes.gauge} ref={gaugeElement}>
      <div className={classes['gauge__body']}>
        <div className={classes['gauge__fill']} style={customStyle}></div>
        <div className={classes['gauge__cover']}>{guagePerc}</div>
      </div>
    </div>
  );
};
export default Guage;
