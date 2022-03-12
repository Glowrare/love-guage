import PulsingImage from '../effects/PulsingImage';
import Container from '../ui/Container';
import { ReactComponent as Logo } from './../../love-icon-header.svg';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
        <h1>Love Guage</h1>
        <PulsingImage animDuration='3s'>
          <Logo />
        </PulsingImage>
      </Container>
    </header>
  );
};

export default Header;
