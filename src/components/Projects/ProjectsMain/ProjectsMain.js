import React from 'react';
import SingleProject from '../SingleProject/SingleProject';
import theGreenNursery from '../../../images/the green nursery.PNG'
import bookWorld from '../../../images/book world.PNG'
import bestRiders from '../../../images/best riders.PNG'
import footballLeagues from '../../../images/footballLeagues.PNG'
import bestShes from '../../../images/bestShoes.PNG'

const ProjectsMain = () => {
    let projects = [
        {
            projectName: "The Green Nursery",
            projectImage: theGreenNursery,
            projectAbout: "A website about plants and garden maintaining. Here one can get services about tree, plants and garden maintenance. One can order plants, or take a service for transferring a tree! But he should be logged in before ordering any service. Here are two different sections for admin and users. An admin can make other one as an admin.",
            projectCode: "https://github.com/ShowravPaul/the-green-nursery-client",
            projectLive: "https://romantic-bell-d91f52.netlify.app/"
        },
        {
            projectName: "Book World",
            projectImage: bookWorld,
            projectAbout: "An e-commerce site for books. User can order books from anywhere. One can easily login with his gmail account and choose some books to buy. His book orders will be recorded in the database and anytime he can check his orders. And admin can add new books if he stay logged in.",
            projectCode: "https://github.com/ShowravPaul/book-world-client",
            projectLive: "https://606838a3407c813393ea1c2b--unruffled-shockley-7f2f7b.netlify.app/"
        },
        {
            projectName: "Best Riders",
            projectImage: bestRiders,
            projectAbout: "A site that provides rider services in Dhaka city. One can book bus/car/bike or train tickets. But he has to log in first. If he hasn't any account here, he can continue with his gmail or he can create a new account.",
            projectCode: "https://github.com/Porgramming-Hero-web-course/react-auth-ShowravPaul",
            projectLive: "https://605782e6bae52700529b4eac--distracted-johnson-a9e773.netlify.app/"
        },
        {
            projectName: "Football Leagues",
            projectImage: footballLeagues,
            projectAbout: "A website that shows some information about football leagues. Here, information about 12 top football leagues have been shown. By clicking “Explore” button, one can show details[like league logo, country, founded year etc] about the league. React javascript library has been used to develop this website. And it has been hosted from “netlify.com”.",
            projectCode: "https://github.com/ShowravPaul/football-leagues",
            projectLive: "https://ecstatic-booth-431399.netlify.app/"
        },
        {
            projectName: "Best Shoes",
            projectImage: bestShes,
            projectAbout: "A simple home page of an e-commerce site. This is a site about shoes.",
            projectCode: "https://github.com/ShowravPaul/Assignment-2-Best-Shoes",
            projectLive: "https://showravpaul.github.io/Assignment-2-Best-Shoes/"
        }
    ]

    let index = 0;

    return (
        <>
            <h3 className="pt-3" style={{ textAlign: "center"}}>MY PROJECTS</h3>
            <div className="row" style={{ alignItems: "center"}}>
                {
                    projects.map(project => <SingleProject project={project} key={index++}></SingleProject>)
                }
            </div>
        </>
    );
};

export default ProjectsMain;