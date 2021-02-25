import { right } from "@popperjs/core";
import emailjs from "emailjs-com";
import React from "react";

function Form() {
	function sendEmail(e) {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_pepp4am",
				"template_0nvy0ee",
				e.target,
				"user_GxgfoGr9O8UgMTgU2lCW9"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	return (
		<div>
			<form onSubmit={sendEmail}>
				<div style={{ paddingTop: "10px", paddingLeft: "40px" }}>
					<div>
						<input type="text" placeholder="Name" name="name" />
					</div>

					<div>
						<input type="text" placeholder="Subject" name="subject" />
					</div>

					<div>
						<input
							type="email"
							placeholder="Email Address"
							name="email"
						/>
					</div>

					<div>
						<textarea
							id=""
							name="message"
							placeholder="E.g You are the perfect candidate, I have a great job offer for you!"
							style={{
								marginTop: "15px",
								paddingTop: "20px",
								paddingLeft: "15px",
								width: "400px",
								height: "150px",
							}}
						/>
					</div>

					<div>
						<input
							type="submit"
							value="Send Message"
							onClick={() => {
								alert(
									"Attempting to send (Ensure all fields are accurate)"
								);
							}}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Form;
