import React from "react";

export default function Paragraph({ heading, text }) {
	return (
		<div className="paragraph">
			<h2>{heading}</h2>
			<p>{text}</p>
		</div>
	);
}
