import React from "react";
import {Link} from "react-router-dom";
import Headings from "../../Components/Page_headings";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import project_illustration from "../../Assets/Projects_page_illustration.svg"
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function Projects() {
	return (
		<div
			style={{
				padding: "9vh 0",
				paddingTop: "10.88vh",
				paddingBottom: "6vh",
				display: "flex",
				// flexDirection: "row",
				// flexWrap: "wrap",
				flexDirection: "column",
				justifyContent: "space-around",
				// alignItems: "center",
			}}
		>
			<Headings 
				LargeHeading="Projects"
				SmallHeading="Checkout our Projects"
				Text="Learning goes hand-in-hand with building new and cool stuff. Lorem ipsum dolor sit amet"
				PageIllustration={project_illustration}
			/>
			<Fab style={{ alignSelf: "flex-end", marginRight: "7vw" }} color="primary" aria-label="add">
				<Link to="Projects/NewProject"
						style={{
							color: "white",
							height:"100%",
							width:"100%",
							margin:"0",
							display:"grid",
							placeItems:"center"	
					}}>
						<AddIcon/>
					</Link>
			</Fab>
			<div className="Project_cards_cont"
				style={{
					padding:"0 7vw",
				}}
			> 
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
}

export default Projects;
