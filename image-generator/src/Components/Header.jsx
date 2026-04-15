const Header = ({ onClick }) => {
  return (
    <div>
      Random Image Generator
      <button onClick={onClick}>Generate Image</button>
    </div>
  );
};

export default Header;
