import "../Styles/ImageGrid.css";

const ImageGrid = ({ images }) => {
  return (
    <>
      <div className="image-container">
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img src={image} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGrid;
