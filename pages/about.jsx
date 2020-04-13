import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../static/css/pages.css';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From Beer to Code." subtitle="The story of my transition from Ballast Point Brewing Company to software development" />
    <h3>My Story</h3>
    <hr />
    <div className="row">
      <div className="col-md-6 aboutSections">
        <img className="profilePic profilePic1" src="../static/pics/DSC_6082.jpg" alt="profilepic" />
      </div>
      <div className="col-md-6 aboutSections">
        <h4 className="bio bio1">
        I specialize in HTML, CSS, JavaScript, and mongodb on the front-end 
        as well as MySQL on the back end. Also I am very good at problem solving, 
        and collaborative teamwork. My biggest priority is due diligence, 
        and encouraging workplace culture. 

        </h4>
      </div>
    </div>
    <h3 className="skills">My Skills</h3>
    <hr />
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-6">
            <IconImage source="../static/pics/html.png" alt="html" />
            <IconImage source="../static/pics/bootstrap.png" alt="bootstrap" />
            <IconImage source="../static/pics/css.png" alt="css" />
          </div>
          <div className="col-sm-6">
            <IconImage source="../static/pics/githubIcon.png" alt="github" />
            <IconImage source="../static/pics/handlebars.png" alt="handlebars" />
            <IconImage source="../static/pics/javascript.png" alt="javascript" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-6">
            <IconImage source="../static/pics/jquery.png" alt="jquery" />
            <IconImage source="../static/pics/mern.jpg" alt="mern" />
            <IconImage source="../static/pics/mongodb.png" alt="mongodb" />
          </div>
          <div className="col-sm-6">
            <IconImage source="../static/pics/mysql.png" alt="mysql" />
            <IconImage source="../static/pics/nodejs.png" alt="node" />
            <IconImage source="../static/pics/React.png" alt="react" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;