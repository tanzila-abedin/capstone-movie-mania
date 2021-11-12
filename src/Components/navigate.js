import { Link } from 'react-router-dom';

const Navigate = () => (
  <nav className="navHead navbar navbar-light">
    <div className="container">
      <span className="navbar-brand mb-0 h1">Movie Mania</span>
    </div>
    <Link to="/">Home</Link>
  </nav>

);

export default Navigate;
