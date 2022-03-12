import classes from './Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import { ReactComponent as Logo } from './../../love-icon-body.svg';
import PulsingImage from '../effects/PulsingImage';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Container>
        <nav className={classes.navigation}>
          <Button
            mode='link'
            url='/history'
            theme='primary--bare'
            text='History'
          />
        </nav>
      </Container>
      <main className={classes.main}>
        <Container>
          <div className={classes['position-above']}>{props.children}</div>
        </Container>
        <PulsingImage position='absolute' rightPos='20px' bottomPos='0px'>
          <Logo />
        </PulsingImage>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
