import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className={`container-fluid ${styles.navStyleCss}`}>
          
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img
              src="./image.png"
              alt="Logo"
              width="80"
              height="40"
              className="d-inline-block align-text-top"
            />
          </a>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Content */}
          <div className={`collapse navbar-collapse ${styles.linkStyle}`} id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Location</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>

          
          </div>
            <span className="navbar-text">
              <button className="btn btn-outline-light">Login</button>
            </span>
        </div>
      </nav>
       <hr></hr>
    </>
  );
};

export default Header;
