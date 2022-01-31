import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Headings from "../../Components/Page_headings";
import HeadingButton from "../../Components/Heading_button";
import EventCards from "../../Components/EventCard/index.js";
import event_illustration from "../../Assets/Events_page_illustration.svg";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import "./Events.css";
import LeaderBoard from "../../Components/LeaderBoard/LeaderBoard";
import Even from "./Even";
import styles from "./EventPage.module.css";
import EventCards2 from "../../Components/EventCard/index copy";
import GetInTouch from "../../Assets/GetInTouch.png";
function Events() {
	return (
		<section
			className="Events_section"
			style={{
				// width: "100vw",
				overflowX: "hidden",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				// alignItems: "center",
				paddingBottom: "6vh",
			}}
		>
			<Even />
			<Headings
				LargeHeading="Events"
				SmallHeading="Whats happening..."
				Text="GDSC IIITA also provides with Events, Workshops, Seminars. May it be Android Study Jams or Google Cloud Month we have it all..."
				PageIllustration={event_illustration}
			/>
			<div className="heading_plusBtn">
				<h2
					style={{ fontWeight: "600", fontFamily: "Open Sans,Poppins,sans-serif", color: "#1b2733" }}
					className="heading"
				>
					Upcoming Events
				</h2>
				{/* <Fab color="primary" aria-label="add">
					<Link
						to="../events/new_event"
						style={{
							color: "white",
							height: "100%",
							width: "100%",
							margin: "0",
							display: "grid",
							placeItems: "center",
						}}
					>
						<AddIcon />
					</Link>
				</Fab> */}
			</div>
			<EventCards upcoming={true} />
			<HeadingButton
				LargeHeading="Interested in being a Speaker at one of our events?"
				SmallHeading="Just drop us your Proposal."
				bg={GetInTouch}
			/>
			<div className="heading_plusBtn">
				<h2
					style={{ fontWeight: "600", fontFamily: "Open Sans,Poppins,sans-serif", color: "#1b2733" }}
					className="heading"
				>
					Past Events
				</h2>
				{/* <Fab color="primary" aria-label="add">
					<Link
						to="../events/new_event"
						style={{
							color: "white",
							height: "100%",
							width: "100%",
							margin: "0",
							display: "grid",
							placeItems: "center",
						}}
					>
						<AddIcon />
					</Link>
				</Fab> */}
			</div>
			<EventCards2 upcoming={false} />
		</section>
	);
}

export default Events;
