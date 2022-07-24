import './DeleteModal.css';
import { useState } from 'react';

function DeleteModal({setShowDeleteModal, deleteImage, imageToDelete}) {
  const [isMouseOut, setIsMouseOut] = useState(false);
  const [password, setPassword] = useState('');
  const closeModal = () => {
    if (isMouseOut === true) {
      setShowDeleteModal(false);
    }
  };
  return (
    <div className="delete-modal-wrapper" onClick={() => closeModal()}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          deleteImage(password, imageToDelete);
          setShowDeleteModal(false);
        }}
        className="delete-modal"
        onMouseOut={() => setIsMouseOut(true)}
        onMouseOver={() => setIsMouseOut(false)}
      >
        <p>Are you sure ?</p>
        <label>
          Password
          <input
            type="password"
            placeholder="*****************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="delete-modal__button-container">
          <button
            className="delete-modal__cancel-button"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </button>
          <button className="delete-modal__submit-button" type="submit">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteModal;
