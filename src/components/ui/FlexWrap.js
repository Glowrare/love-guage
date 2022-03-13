import classes from './FlexWrap.module.css';

const FlexWrap = ({
  children,
  wrap,
  direction,
  justify,
  align,
  gap,
  wrapMd,
  orderSwap,
}) => {
  const customStyle = {
    flexWrap: wrap,
    flexDirection: direction,
    justifyContent: justify,
    alignItem: align,
    gap: gap,
  };
  return (
    <div
      className={`${classes['flex-wrap']} ${
        wrapMd ? classes['flex-wrap-md'] : ''
      } ${orderSwap ? classes['order-swap'] : ''}`}
      style={customStyle}
    >
      {children}
    </div>
  );
};

export default FlexWrap;
