import Searchbar from './components/Searchbar';
import Masonry from './components/Masonry';
import PostModal from './components/PostModal';
import axios from 'axios';
import { useState, useEffect } from 'react';
import DeleteModal from './components/DeleteModal';

function App() {
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [label, setLabel] = useState('');
  const [showPostModal, setShowPostModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);

  const fetchImages = async () => {
    const { data } = await axios.get('http://localhost:3315/images');
    setImages(data);
  };

  const filterImages = async (imageName) => {
    const { data } = await axios.get(
      `http://localhost:3315/images?label=${imageName}`
    );
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const postImage = async () => {
    if (imageUrl && label) {
      await axios
        .post('http://localhost:3315/images', {
          imageUrl: imageUrl,
          label: label,
        })
        .then(() => {
          fetchImages();
        });
    }
  };

  const deleteImage = async (password, imageId) => {
    if ((password = 'azerty')) {
      await axios.delete(`http://localhost:3315/images/${imageId}`).then(() => {
        fetchImages();
        setShowDeleteModal(false);
      });
    }
  };

  return (
    <>
      {showDeleteModal && (
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          deleteImage={deleteImage}
          imageToDelete={imageToDelete}
        />
      )}
      {showPostModal && (
        <PostModal
          postImage={postImage}
          setShowPostModal={setShowPostModal}
          setLabel={setLabel}
          setImageUrl={setImageUrl}
        />
      )}
      <Searchbar
        setShowPostModal={setShowPostModal}
        filterImages={filterImages}
      />
      <Masonry
        images={images}
        setImageToDelete={setImageToDelete}
        setShowDeleteModal={setShowDeleteModal}
      />
    </>
  );
}

export default App;
