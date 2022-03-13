import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        Love Guage | &copy; 2022{' '}
        <a href='https://github.com/Glowrare'>Ajibolanle Gloria</a>
      </p>
    </footer>
  );
};

export default Footer;
