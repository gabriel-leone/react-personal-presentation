import React from "react";
import Social from "./Social";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
	return (
		<div className="footer">
			<Social icon={<XIcon />} link={"https://x.com/_gpleone"} />
			<Social
				icon={<InstagramIcon />}
				link={"https://www.instagram.com/gabrielleone_/"}
			/>
			<Social
				icon={<FacebookIcon />}
				link={"https://www.facebook.com/gabrielpietro.leone/"}
			/>
			<Social icon={<GitHubIcon />} link={"https://github.com/gabriel-leone"} />
		</div>
	);
}
