import React from "react";
import { IconButton } from "@mui/material";

export default function Social({ icon, link }) {
	return (
		<>
			<IconButton onClick={() => window.open(link)}>{icon}</IconButton>
		</>
	);
}
