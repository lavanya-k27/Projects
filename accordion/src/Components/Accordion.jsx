import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "./Accordion.css";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const handleClick = (index) => {
      if (expandedIndex === index) {
        setExpandedIndex(-1);
      } else {
        setExpandedIndex(index);
      }
    };
    return (
      <div className="accordion" key={item.id}>
        <div className="label" onClick={() => handleClick(index)}>
          {item.label}
          {isExpanded ? <IoIosArrowForward /> : <IoIosArrowDown />}
        </div>
        <div className={`content ${isExpanded ? "open" : ""}`}>
          {item.content}
        </div>
      </div>
    );
  });
  return <>{renderedItems}</>;
};

export default Accordion;
