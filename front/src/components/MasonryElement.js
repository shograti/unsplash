import { useState } from 'react';

function MasonryElement({ image, setImageToDelete, setShowDeleteModal }) {
  const [showInfos, setShowInfos] = useState(false);
  return (
    <div
      key={image._id}
      className="masonry-image-container"
      onMouseOver={() => setShowInfos(true)}
      onMouseOut={() => setShowInfos(false)}
    >
      <img src={image.image} alt="" />
      {showInfos && (
        <>
          <button
            onClick={() => {
              setShowDeleteModal(true);
              setImageToDelete(image._id);
            }}
          >
            delete
          </button>
          <p>{image.label}</p>
        </>
      )}
    </div>
  );
}

export default MasonryElement;
