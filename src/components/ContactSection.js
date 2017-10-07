import React from "react";
import TitleBar from "./TitleBar";

class ContactSection extends React.Component {
	render() {
		return (
			<div className="contact-section">
				<TitleBar title={"Contact"} />
				<div className="contact-option">
					<a href="mailto:developing.david@gmail.com">
						<img src={require("../images/gmail.svg")} alt="Mail"/>
					</a>
				</div>
				<div className="contact-option">
					<a href="https://github.com/David0leo">
						<img src={require("../images/github_icon.svg")} alt="Github"/>
					</a>
				</div>
				<div className="contact-option">
					<a href="https://www.linkedin.com/in/david0leo/">
						<img src={require("../images/linkedin.svg")} alt="LinkedIn"/>
					</a>

				</div>
				<div className="contact-option">
					<a href="https://www.instagram.com/david0leo/">
						<img src={require("../images/instagram.svg")} alt="Instagram"/>
					</a>
				</div>
			</div>
		);
	}
}

export default ContactSection;
