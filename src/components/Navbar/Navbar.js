import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light"> {/* style={{backgroundColor: "rgb(249, 250, 215)"}} */}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link class="navbar-brand ml-5" to="/home">
                    <h3 className="web-name" style={{ color: "green" }}>  Showrav Paul </h3>
                </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="/about-me">About me</Link>
                        </li>
                    </ul>
                </div>
            </nav >
            <hr className="line" />
        </>
    );
};

export default Navbar;