import classes from './Layout.module.css';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
