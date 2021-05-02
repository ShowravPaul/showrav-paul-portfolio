import React from 'react';
import './SingleProject.css'

const SingleProject = ({project}) => {
    const {projectName, projectImage, projectAbout, projectCode, projectLive} = project;
    return (
        <div className="col-sm-12 col-md-12 col-lg-12 text-center p-3" style={{color: 'white'}}>
            <div className="card">
                <img src={projectImage} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{projectName}</h5>
                    <p class="card-text text-justify">{projectAbout}</p>
                    <a href={projectLive} target="_blank"><button class="btn btn-primary ml-3">LIVE</button></a>
                    <a href={projectCode} target="_blank"><button class="btn btn-primary ml-3">CODE</button></a>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;