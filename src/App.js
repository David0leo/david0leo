import React, { Component } from "react";
import "./App.css";
import "./style/css/Style.css";
import CoolImageWithBoxButtons from "./components/CoolImageWithBoxButtons";
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

class App extends Component {
	render() {
		return (
			<div className="App">
				<CoolImageWithBoxButtons />
        <WorkSection/>
        <AboutSection/>
        <ContactSection/>
			</div>
		);
	}
}

export default App;
