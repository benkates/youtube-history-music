import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ChipAvatar from "./utils/ChipAvatar";

import Tooltip from "@mui/material/Tooltip";

// import { Grow } from "@mui/material";

/*
COLORS
November 29, 2018

FACTmagazine
July 5, 2017

Fkj
June 14, 2017

NPR Music
December 26, 2018

Vulf
June 27, 2018

Mass Appeal
April 23, 2019

Soulection
February 19, 2019

Stones Throw
March 3, 2022
*/

//TODO: channels
//TODO: month filter intro
//TODO: transition body text

function IntroText({ theme }) {
  return (
    <>
      {/* <Grow toggle={true} mountOnEnter unmountOnExit> */}
      <Container maxWidth="lg" sx={{ padding: 0 }}>
        <Typography
          variant="h2"
          component="h1"
          color="white"
          sx={{
            textAlign: "center",
            mt: 3,
            fontFamily: "Abril Fatface",
          }}
        >
          What's in my YouTube History: Music
        </Typography>
        <Typography
          component="div"
          color="lightgrey"
          fontSize="20px"
          gutterBottom
          fontStyle={"italic"}
          sx={{ textAlign: "center", mb: 2 }}
        >
          by Ben Kates / Nov 2022{" "}
        </Typography>
      </Container>
      <Container maxWidth="md" sx={{ p: 0 }}>
        <Typography
          component="h2"
          variant="h4"
          fontWeight="bold"
          color={theme.palette.accentColor}
        >
          Introduction
        </Typography>
        <Typography
          component="div"
          gutterBottom
          sx={{
            textAlign: "left",
            // mt: 3,
            mb: 3,
            color: "lightgrey",
          }}
        >
          Ever since I can remember, I’ve loved watching musical performances on
          YouTube. I’m not talking “concert” footage, but edited YouTube videos
          of bands, artists, and music producers. There’s something about
          intimate recordings of performance and the creative process that
          captivate me as a{" "}
          <a
            href="https://open.spotify.com/artist/0aOoGOhY7yubvn0nNu4EJo"
            target="_blank"
            rel="noreferrer"
            style={{ color: "lightgrey" }}
          >
            hobbyist musician
          </a>
          {" and "}
          <a
            href="https://www.youtube.com/benkates"
            target="_blank"
            rel="noreferrer"
            style={{ color: "lightgrey" }}
          >
            bedroom producer
          </a>
          {"!"}
          <br></br>
          <br></br>
          There are so many YouTube channels and media platforms out there
          producing amazing music content, particularly the ones that have
          regular series! I dove into my YouTube history and filtered to some of
          the channels I watch most.
        </Typography>
        <Typography
          component="h2"
          variant="h4"
          fontWeight="bold"
          color={theme.palette.accentColor}
        >
          The YouTube Channels
        </Typography>
        <Typography
          component="div"
          gutterBottom
          color="white"
          sx={{
            textAlign: "left",
            // mt: 3,
            mb: 3,
            color: "lightgrey",
          }}
        >
          I've filtered to 10 channels that I love the most! I've been
          subscribed to
          <br></br>
          <ul id="intro-text-list" style={{ listStyleType: "none" }}>
            <li>
              <Tooltip title="First Subscribed: July 5, 2017">
                <ChipAvatar name="FACTmagazine"></ChipAvatar>
              </Tooltip>{" "}
              Fact Magazine describes itself as a "music platform" that...
            </li>
            <li>
              <Tooltip title="First Subscribed: June 27, 2018">
                <ChipAvatar name="Vulf"></ChipAvatar>
              </Tooltip>{" "}
              Vulf comes from Vulfpeck
            </li>
            <li>
              <Tooltip title="First Subscribed: December 26, 2018">
                <ChipAvatar name="NPR Music"></ChipAvatar>
              </Tooltip>{" "}
              Tiny Desk
            </li>
            <li>
              <Tooltip title="First Subscribed: June 27, 2018">
                <ChipAvatar name="FACTmagazine"></ChipAvatar>
              </Tooltip>{" "}
              Against the Clock
            </li>
            <li>
              <Tooltip title="First Subscribed: November 27, 2022">
                <ChipAvatar name="KEXP"></ChipAvatar>
              </Tooltip>{" "}
              Like tiny desk but west coast lol
            </li>
            <li>
              <Tooltip title="First Subscribed: February 19, 2019">
                <ChipAvatar name="Soulection"></ChipAvatar>
              </Tooltip>{" "}
              Radio show previously soundcloud then Apple Music in...
            </li>
            <li>
              <ChipAvatar name="Boiler Room"></ChipAvatar> Epic
            </li>
            <li>
              <Tooltip title="First Subscribed: June 27, 2018">
                <ChipAvatar name="Stones Throw"></ChipAvatar>
              </Tooltip>{" "}
              Record label
            </li>
            <li>
              <Tooltip title="First Subscribed: June 27, 2018">
                <ChipAvatar name="Fkj"></ChipAvatar>
              </Tooltip>{" "}
              Loop dude
            </li>
            <li>
              <Tooltip title="First Subscribed: November 29, 2018">
                <ChipAvatar name="COLORS"></ChipAvatar>
              </Tooltip>{" "}
              Cool bakcdrops A note on playcount: The YouTube algorithm is
              amazing and there might be some plays in there that have counted
              towards my history that might have auto-played when I was
              distracted, out of the room, or even asleep! The bottom line is
              that the videos that have the highest playcount are the ones I
              love the most.
            </li>
          </ul>
        </Typography>

        {/* This App and Its Data */}

        <Typography
          component="h2"
          variant="h4"
          fontWeight="bold"
          color={theme.palette.accentColor}
        >
          This App and its Data
        </Typography>
        <Typography
          component="div"
          gutterBottom
          color="white"
          sx={{
            textAlign: "left",
            // mt: 3,
            mb: 3,
            color: "lightgrey",
          }}
        >
          I've created this app to explore my music-related YouTube history! The
          data was exported using Google Takeout and is for December 2018
          through October 2022. After transforming and filtering the data in R,
          I built this front-end using React.js to take a look at some of my
          most viewed videos!
          <br></br>
          <br></br>
          To view a video, just click on the row in the table. If there's a
          quote symbol like this{" "}
          <FormatQuoteIcon sx={{ width: 28, height: 28 }}></FormatQuoteIcon>
          then I've added extra context below the video on how a particular
          video might have impacted me as a music fan or creator!
          <br></br>
          <br></br>A note on playcount: The YouTube algorithm is amazing and
          there might be some plays in there that have counted towards my
          history that might have auto-played when I was distracted, out of the
          room, or even asleep! The bottom line is that the videos that have the
          highest playcount are the ones I love the most.
          <br></br>
          <br></br>
          UI Note: Click on a month bar to filter the table to that month's
          activity!
        </Typography>
      </Container>
      {/* </Grow> */}
    </>
  );
}

export default IntroText;
