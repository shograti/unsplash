import './Searchbar.css';
import logo from '../assets/logo.svg';
import { AiOutlineSearch } from 'react-icons/ai';

function Searchbar({ setShowPostModal, filterImages }) {
  return (
    <header>
      <div className="logo-and-searchbar">
        <img src={logo} alt="" />
        <div className="searchbar__input-container">
          <AiOutlineSearch className="input-container__icon" />
          <input
            type="text"
            placeholder="Search by name"
            onChange={(e) => filterImages(e.target.value)}
          />
        </div>
      </div>
      <button
        className="searchbar__button"
        onClick={() => setShowPostModal(true)}
      >
        Add a photo
      </button>
    </header>
  );
}

export default Searchbar;
