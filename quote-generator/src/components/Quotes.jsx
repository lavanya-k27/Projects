import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import "./Quotes.css";

const Quotes = ({
  selectedValue,
  quote,
  isLoading,
  handleDislike,
  handleLike,
  liked,
}) => {
  return (
    <>
      <div className="container">
        <div className="quote">
          <div>
            {isLoading ? (
              <span className="spinner-quote" />
            ) : quote ? (
              quote.quote
            ) : (
              "Choose a category and generate a quote."
            )}
          </div>
          <div>
            {quote &&
              (liked ? (
                <FaHeart className="heart-fill" onClick={handleDislike} />
              ) : (
                <IoIosHeartEmpty className="heart" onClick={handleLike} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotes;
