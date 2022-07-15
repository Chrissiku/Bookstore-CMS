import { useSelector, useDispatch } from 'react-redux';
import { checkCategoryStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkCategoryStatus());
  };

  return (
    <div className="Categories">
      <h1>{categories.isArray ? categories.join('') : categories}</h1>
      <button
        type="button"
        className="Button-primary-big"
        onClick={handleClick}
      >
        Check Status
      </button>
    </div>
  );
};

export default Categories;
