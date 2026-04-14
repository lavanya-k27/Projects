import Accordion from "./Components/Accordion";
import { items } from "./items";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Accordion items={items} />
    </div>
  );
};

export default App;
