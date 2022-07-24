import './PostModal.css';
import { useState } from 'react';

function PostModal({ setShowPostModal, postImage, setImageUrl, setLabel }) {
  const [isMouseOut, setIsMouseOut] = useState(false);
  const closeModal = () => {
    if (isMouseOut === true) {
      setShowPostModal(false);
    }
  };
  return (
    <div className="post-modal-wrapper" onClick={() => closeModal()}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postImage();
          setShowPostModal(false)
        }}
        className="post-modal"
        onMouseOut={() => setIsMouseOut(true)}
        onMouseOver={() => setIsMouseOut(false)}
      >
        <p>Add a new photo</p>
        <label>
          Label
          <input
            type="text"
            placeholder="Suspendisse elit massa"
            onChange={(e) => setLabel(e.target.value)}
          />
        </label>
        <label>
          Photo URL
          <input
            type="text"
            placeholder=" https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r.."
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <div className="post-modal__button-container">
          <button
            className="post-modal__cancel-button"
            onClick={() => setShowPostModal(false)}
          >
            Cancel
          </button>
          <button className="post-modal__submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostModal;
