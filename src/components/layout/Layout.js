import classes from './Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import { ReactComponent as Logo } from './../../love-icon-body.svg';
import PulsingImage from '../effects/PulsingImage';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main className={classes.main}>
        <div className='container'>{props.children}</div>
        <PulsingImage position='absolute' rightPos='20px' bottomPos='0px'>
          <Logo />
        </PulsingImage>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
