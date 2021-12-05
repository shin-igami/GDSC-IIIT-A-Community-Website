import React from "react";
import {Link} from "react-router-dom";
import { Typography } from "@material-ui/core";
import Headings from "../../Components/Page_headings";
import EventCards from "../../Components/EventCard/index";
import event_illustration from "../../Assets/Events_page_illustration.svg"
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import './Events.css'
import LeaderBoard from "../../Components/LeaderBoard/LeaderBoard";

function Events() {
	return (
			<section
            	className="Events_section" 
				style={{
					// height: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					// alignItems: "center",
					paddingTop: "10.88vh",
					paddingBottom: "6vh",
				}}
			>
				<Headings 
					LargeHeading="Events" 
					SmallHeading="Whats happening..."
					Text="Here at DSC IIIT Allahabad we put the fun in functions and events. Attend Study Jams/ Hackathons/ Developer Conferences to learn more about the latest technologies."
					PageIllustration={event_illustration}
				/>
				<Fab style={{ alignSelf: "flex-end", marginRight: "7vw" }} color="primary" aria-label="add">
					<Link to="Events/NewEvent"
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
				<EventCards />
        <LeaderBoard/>
			</section>
	);
}

export default Events;
