import React from 'react';
import TitleBar from "./TitleBar";

class AboutSection extends React.Component {
  render() {
    return (
      <div className="about-section">
        <TitleBar title={"About"}/>
        <img src={require('../images/face.jpg')} alt={"face"}></img>
        <h2>David Anderson</h2>
        <div className="bio">
          <p>I am a software developer based out of Edmonton in Alberta, Canada. </p>
          <img src={require('../images/ca.svg')} alt={"canada"}></img>
          <img src={require('../images/edmonton_alberta.svg')} alt={"edmonton"}></img>
          <p>
            I graduated from the University of Alberta with a Bachelors of Mathematics with Specialization.
            <br/>
            <br/>
            I love good coffee, a hard problem, and a nice pen.
            <br/>
            <br/>
            I currently work mostly on the web and am learning as much machine learning as I can make time for.
            <br/>
            <br/>
            I am always open to chat about cool things and exciting opportunities.
          </p>
        </div>
      </div>
    )
  }
  
}

export default AboutSection