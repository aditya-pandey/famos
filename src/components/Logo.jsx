import { Link } from 'react-router-dom';
import famosLogo from '../assets/famos-logo.png';

export default function Logo({ className = '', markClassName = '', onClick }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 ${className}`}
      onClick={onClick}
      aria-label="famos home"
    >
      <img
        className={`h-10 w-32 rounded-2xl object-cover object-center shadow-sm sm:h-11 sm:w-36 ${markClassName}`}
        src={famosLogo}
        alt="famos"
      />
    </Link>
  );
}
