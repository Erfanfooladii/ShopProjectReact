import './style.css';

const LoadingList = () => {
  const items = Array.from({ length: 8 });

  return (
    <div className="loading">
      <ul className="loading__list __global-container">
        {items.map((_, index) => (
          <li key={index} className="loading__list--item"></li>
        ))}
      </ul>
    </div>
  );
};

export const LoadingProduct = () => {
  return (
    <div className="loading">
      <div className="loading__product __global-container">Loading...</div>
    </div>
  );
};

export default LoadingList;
