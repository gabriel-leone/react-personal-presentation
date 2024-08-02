import React from "react";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Info() {
	return (
		<div className="info">
			<img
				src={"https://avatars.githubusercontent.com/u/110470412?v=4"}
				alt="Profile"
				className="info-image"
			/>
			<h1>Gabriel Leone</h1>
			<h4>Software Engineer</h4>
			<div className="info-buttons">
				<Button
					variant="contained"
					endIcon={<EmailIcon />}
					onClick={() => window.open("mailto: leonepgabriel@gmail.com")}
					style={{
						backgroundColor: "#1f6feb",
						color: "white",
					}}
				>
					Email
				</Button>
				<Button
					variant="contained"
					endIcon={<LinkedInIcon />}
					onClick={() =>
						window.open("https://www.linkedin.com/in/gabriel-leone")
					}
					style={{
						backgroundColor: "white",
						color: "#1f6feb",
					}}
				>
					LinkedIn
				</Button>
			</div>
		</div>
	);
}
