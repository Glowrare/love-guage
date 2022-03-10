import PulsingImage from '../effects/PulsingImage';
import { ReactComponent as Logo } from './../../love-icon-header.svg';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className='container'>
        <h1>Love Calculator</h1>
        <PulsingImage animDuration='3s'>
          <Logo />
        </PulsingImage>
      </div>
    </header>
  );
};

export default Header;
