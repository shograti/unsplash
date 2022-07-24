import './Masonry.css';
import MasonryElement from './MasonryElement';

function Masonry({ images,setImageToDelete, setShowDeleteModal }) {
  return (
    <main>
      {images
        .map((image) => <MasonryElement key={image._id} image={image} setImageToDelete={setImageToDelete} setShowDeleteModal={setShowDeleteModal}/>)
        .reverse()}
    </main>
  );
}

export default Masonry;
