import { Link } from 'react-router-dom';

const Navigate = () => (
  <nav className="navHead navbar navbar-light">
    <div className="container">
      <p className="navbar-brand mb-0 text-warning nav-text font-weight-normal">Movie Mania</p>
      <Link className="nav-text font-weight-normal" to="/">Home</Link>
    </div>
  </nav>

);

export default Navigate;
