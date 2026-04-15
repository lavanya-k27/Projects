import "../Styles/ImageGrid.css";

const ImageGrid = ({ images }) => {
  return (
    <>
      <div>
        {images.map((image) => {
          return (
            <div key={image.id}>
              <img src={image.image} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGrid;
