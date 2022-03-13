import classes from './Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import { ReactComponent as Logo } from './../../love-icon-body.svg';
import PulsingImage from '../effects/PulsingImage';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { useEffect, useState } from 'react';

const Layout = (props) => {
  const [home, setHome] = useState(true);
  const [url, setUrl] = useState('/history');
  const [text, setText] = useState('History');

  useEffect(() => {
    if (home) {
      setText('History');
      setUrl('/history');
    } else {
      setUrl('/');
      setText('Go Home');
    }
  }, [home]);

  return (
    <div>
      <Header />
      <Container>
        <nav className={classes.navigation}>
          <Button
            mode='link'
            url={url}
            theme='primary--bare'
            text={text}
            onClick={() => setHome(!home)}
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
