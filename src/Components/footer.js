const Footer = () => (
  <nav className="navbar navbar-expand-sm navHead navHead  fixed-bottom">
    <div className="container text-center text-light d-flex justify-content-center">
      Developed By:
      <span className="text-warning font-weight-normal">
        Tanzila Abedin
      </span>
      , Using movies data API
      {' '}
      <a
        href="https://imdb-api.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-warning "
      >
        ImDBI
      </a>
    </div>
  </nav>
);

export default Footer;
