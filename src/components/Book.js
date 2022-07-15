import '../css/Book.css';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { removeBookThunk, removeBook } from '../redux/books/books';

const Book = (props) => {
  const {
    id, title, author, category, chapter,
  } = props;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBookThunk(id)).then(() => dispatch(removeBook(id)));
  };

  return (
    <li>
      <div className="Book">
        <div className="Book-content">
          <div className="Book-main">
            <h4 className="Book-category">{category}</h4>
            <h2 className="Book-title">{title}</h2>
            <h6 className="Book-author">{author}</h6>
            <div className="Book-actions">
              <button type="button" className="Book-action-button Roboto-slab">Comments</button>
              <span className="Vertical-divider" />
              <button
                type="button"
                className="Book-action-button Roboto-slab"
                onClick={handleDelete}
              >
                Remove
              </button>
              <span className="Vertical-divider" />
              <button type="button" className="Book-action-button Roboto-slab">Edit</button>
            </div>
          </div>
          <div className="Book-progress">
            <div className="Circular-container">
              <div className="Progress-bar" />
            </div>
            <div className="Progress-stat">
              <p className="Progress-percent">72%</p>
              <p className="Progress-result">Completed</p>
            </div>
            <span className="Progress-divider" />
            <div className="Progress-chapter">
              <div>
                <p className="Current-lable Roboto-slab">CURRENT CHAPTER</p>
                <p className="Current-title Roboto-slab">{chapter}</p>
              </div>
              <div>
                <button type="button" className="Button-primary">
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
