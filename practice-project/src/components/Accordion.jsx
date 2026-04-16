import { useState } from "react";
import { items } from "../items";

const Accordion = () => {
  const [expanded, setExpanded] = useState(-1);

  const handleClick = (index) => {
    if (expanded === index) {
      setExpanded(-1);
    } else {
      setExpanded(index);
    }
  };

  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={item.id}>
            <div onClick={() => handleClick(index)}>{item.label}</div>
            {expanded === index && <div>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
