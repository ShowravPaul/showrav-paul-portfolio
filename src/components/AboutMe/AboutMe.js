import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <div className="container mt-5">
                <h3>Education</h3>
                <p>B.Sc. in Information and Communication Engineering, Pabna University of Science and Technology</p>
            </div>
            <div className="container mt-5">
                <h3>Problem solving</h3>
                <p>
                    I am familiar with data structures, algorithms and their efficient uses. I have been doing competitive programming for 2 years. I enjoy solving problems and contest.
                </p>
                <p>
                    I have solved 1000+ programming problems in different online judges. My team has been selected for ICPC Dhaka regional 2020.
                </p>
            </div>
            <div className="container mt-5">
                <h3>Development</h3>
                <p>
                    Recently I have started learning about web development.
                    I have developed some websites after learning about these things:
                    <ol>
                        <li>
                            <b>Frontend: </b>React.JS, Bootstrap, CSS, HTML
                        </li>
                        <li>
                            <b>Backend: </b> Node.JS, Express.JS
                        </li>
                        <li>
                            <b>Database:</b> MongoDB, MySQL
                        </li>
                        <li>
                            <b>Version Control Tool:</b> Git, Github
                        </li>
                        <li>
                            <b>Deploy:</b> Heroku, Netlify
                        </li>
                        <li>
                            <b>Authentication:</b> Firebase
                        </li>
                        <li>
                            <b>Payment method:</b> Stripe
                        </li>
                    </ol>
                </p>
            </div>
            <div className="container mt-5">
                <h3>My hobby</h3>
                <p>Gardening, listening music, swimming.</p>
            </div>
        </div>
    );
};

export default AboutMe;