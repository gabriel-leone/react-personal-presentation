import React from "react";
import Info from "./Info";
import Paragraph from "./Paragraph";
import Footer from "./Footer";

export default function Card() {
	return (
		<div className="card">
			<Info />
			<Paragraph
				heading={"About"}
				text={"I'm 20 years old and study Information Systems at USP."}
			/>
			<Paragraph
				heading={"Interest"}
				text={"I'm interested in web development and data science."}
			/>
			<Footer />
		</div>
	);
}
