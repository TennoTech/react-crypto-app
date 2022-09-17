const Coin = ({ coin: { uuid, symbol, name, price } }) => {
  return (
    <div>
      <h3>
        {
          `${symbol}/${name} - Price: ${price.substring(price.indexOf(".") + 3, 0)} `
        }
      </h3>
    </div>
  );
};

export default Coin;
