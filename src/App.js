import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./style/css/Style.css";
import CoolImageWithBoxButtons from "./components/CoolImageWithBoxButtons";
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

class App extends Component {

	render() {
		return (
			<div className="App">
				<CoolImageWithBoxButtons 
          topBoxCallback={this.scrollToWorkSection}
          middleBoxCallback={this.scrollToAboutSection}
          bottomBoxCallback={this.scrollToContactSection}
        />
        <WorkSection ref="work"/>
        <AboutSection ref="about"/>
        <ContactSection ref="contact"/>
        <div className="footer"></div>
			</div>
		);
  }
  
  scrollToWorkSection = () => {
    this.scrollToY(ReactDOM.findDOMNode(this.refs.work).offsetTop, 1)
  }

  scrollToAboutSection = () => {
    this.scrollToY(ReactDOM.findDOMNode(this.refs.about).offsetTop, 2)
  }

  scrollToContactSection = () => {
    this.scrollToY(ReactDOM.findDOMNode(this.refs.contact).offsetTop, 3)
  }

  scrollToY = (yPos, speedMultiplier) => {
    window.scrollTo(0, yPos);
    // //Maybe something to iterate on later
    // let i = 10;
    // let interval = setInterval(function() {
    //   window.scrollTo(0, i);
    //   i += window.innerHeight/50 * speedMultiplier;
    //   if (i >= yPos) {
    //     clearInterval(interval)
    //     window.scrollTo(0, yPos)
    //   }
    // }, 1);
  }
}

export default App;
