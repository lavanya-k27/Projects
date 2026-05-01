const SelectBox = ({ handleChange }) => {
  return (
    <>
      <div>
        <select name="categories" id="category" onChange={handleChange}>
          <option value="">-- Choose a category --</option>
          <option value="motivate">Motivational & Personal Growth</option>
          <option value="life">Life & Wisdom</option>
          <option value="relation">Relationships</option>
          <option value="work">Work & Leadership</option>
          <option value="mind">Mental & Emotional Health</option>
          <option value="famous">Famous Figures</option>
        </select>
      </div>
    </>
  );
};

export default SelectBox;
