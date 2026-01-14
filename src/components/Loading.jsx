import './Loading.css';

export default function Loading() {
  return (
    <div className="loading-container">
      <p className="loading-text">Loading</p>
      <div className="dots-container">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}
