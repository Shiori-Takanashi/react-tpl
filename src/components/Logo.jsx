import './Logo.css';
import tiger from '../assets/tiger.svg';

export default function Logo() {
  return (
    <div className='logo-container'>
      <img
        src={tiger}
        alt="React Template Logo"
        className='logo-image'
      />
    </div>
  );
}
