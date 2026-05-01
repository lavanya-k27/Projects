import "./Quotes.css";

const Quotes = ({ selectedValue, quote }) => {
  return (
    <>
      <div className="container">
        <div className="quote">{quote}</div>
      </div>
    </>
  );
};

export default Quotes;
