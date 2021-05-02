import React from 'react';
import './Home.css'
import proPic from "../../images/circle-cropped-pic.png"
import { Link } from 'react-router-dom';
import resumePDFLink from '../../resume pdf/Resume Showrav Paul.pdf'

const Home = () => {
    return (
        <div className="row d-flex align-items-center mt-3 p-3">
            <div className="col-md-6 col-lg-7 offset-md-1">
                <h2 style={{ color: '#3A4256' }}>Hi, this is Showrav.</h2>
                <p className="text-secondary">
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
    );
};

export default Home;//<a href="Gutter Brothers - House Of Ill Repute.mp3" download="Gutter Brothers"> Download Music</a>