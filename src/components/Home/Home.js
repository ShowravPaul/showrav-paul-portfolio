import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

import proPic from "../../images/circle-cropped-pic.png"
import resumePDFLink from '../../resume pdf/Resume Showrav Paul.pdf'


const Home = () => {
    return (
        <>
            <div className="row d-flex align-items-center mt-3 p-3">
                <div className="col-md-6 col-lg-7 offset-md-1">
                    <h2 style={{ color: '#3A4256' }}>Hi, this is Showrav.</h2>
                    <p> {/* className="text-primary" */}
                    A self-motivated competitive programmer with deep interest in data structures, algorithms and their efficient uses.
                    <br />
                    Recently I have started learning development with modern technologies and seeking for a job as a software developer.
                    </p>
                    <Link to={resumePDFLink} target="_blank" download>
                        <button className="btn btn-success">Download RESUME</button>
                    </Link>
                </div>
                <div className="col-md-6 col-lg-3 col-sm-6 mt-3">
                    <img src={proPic} alt="" class="profilePic" className="img-fluid" />
                </div>
            </div>
            <div className="icons d-flex">
                <div>
                    <a href="https://www.linkedin.com/in/showrav-paul-9a5591203/" rel="noopener noreferrer" target="_blank"><button className="btn btn-primary"> Linkedin</button></a>
                </div>
                <div>
                    <a href="https://github.com/ShowravPaul" rel="noopener noreferrer" target="_blank"><button className="btn btn-primary ml-5">Github</button></a>
                </div>
            </div>
        </>
    );
};

export default Home;