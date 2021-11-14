const Footer = () => (
  <nav className="navbar navbar-expand-sm navHead navHead  fixed-bottom" data-testid="footer">
    <div className="container text-center text-light d-flex justify-content-center">
      Built By:
      <span className="text-warning font-weight-normal">
        Tanzila Abedin
      </span>
      , Using
      {' '}
      <a
        href="https://imdb-api.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-warning "
      >
        ImDBI
      </a>
      API
    </div>
  </nav>
);

export default Footer;
