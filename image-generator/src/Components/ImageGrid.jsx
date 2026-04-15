import "../Styles/ImageGrid.css";

const ImageGrid = ({ images, handleDelete }) => {
  return (
    <>
      <div className="image-container">
        {images.map((image) => {
          return (
            <div key={image.id}>
              <img src={image.image} onClick={() => handleDelete(image.id)} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGrid;
