import { useState } from "react";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const handleClick = (index) => {
      setExpandedIndex(index);
    };
    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });
  return <>{renderedItems}</>;
};

export default Accordion;
