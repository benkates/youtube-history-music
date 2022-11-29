import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import YouTubeChannelGrid from "./YouTubeChannelGrid";

function IntroText({ theme }) {
  return (
    <>
      {/* <Grow toggle={true} mountOnEnter unmountOnExit> */}
      <Container maxWidth="lg" disableGutters>
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
          color="grey"
          fontSize="20px"
          fontStyle={"italic"}
          sx={{ textAlign: "center", mb: 2 }}
        >
          by Ben Kates / Nov 2022 <br></br>
          {
            <span
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: "14px",
              }}
              onClick={() =>
                document
                  .getElementById("app-h2")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              scroll to the app
            </span>
          }
        </Typography>
      </Container>
      <Container maxWidth="md" sx={{ p: 0 }}>
        <Typography
          component="h2"
          variant="h4"
          fontWeight="bold"
          color={theme.palette.accentColor}
          textAlign="center"
        >
          Introduction
        </Typography>
        <Typography
          component="div"
          gutterBottom
          sx={{
            mb: 3,
            color: "lightgrey",
          }}
        >
          Ever since I can remember, I’ve loved watching musical performances on
          YouTube. I’m not talking “concert” footage, but edited YouTube videos
          of bands, artists, and music producers. There’s something about
          intimate recording of performance and creative process that captivates
          me as a{" "}
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
          regular series! I wanted to explore my YouTube history and filter it
          to some of the channels I watch most. What better than a data app to
          help facilitate that?
        </Typography>
        <Typography
          component="h2"
          variant="h4"
          fontWeight="bold"
          gutterBottom
          color={theme.palette.accentColor}
          textAlign="center"
        >
          The YouTube Channels
        </Typography>
      </Container>
      <YouTubeChannelGrid />
      <Container maxWidth="md" sx={{ p: 0 }}>
        <Typography
          component="h2"
          variant="h4"
          fontWeight="bold"
          color={theme.palette.accentColor}
          textAlign="center"
          sx={{ mt: 3 }}
          id="app-h2"
        >
          The Data App
        </Typography>
        <Typography sx={{ color: "lightgrey", mb: 1 }}>
          The data is for <strong>December 2018 through October 2022</strong>{" "}
          and was exported using Google Takeout. After transforming and
          filtering the data in R, I built this front-end using React.js and MUI
          components to take a look at some of my most viewed videos and the
          viewcount trends.
        </Typography>
        <Typography sx={{ color: "lightgrey", mb: 1 }}>
          It's interesting to see the higher viewcount in 2019/2020 vs 2022. I
          spent a lot of time making music in Ableton Live with my synths,
          sampling, and live looping gear; inspired by a lot of these videos!
          I've certainly still been involved in music in 2022; it's just more
          focused on band rehearsal/recording rather than my own "bedroom
          producer" projects. Different inspirations for different phases of
          life, I suppose!
        </Typography>
        <Typography sx={{ color: "lightgrey", mb: 3 }}>
          To view a video, just click the row in the table.{" "}
          <strong>
            If there's a quote symbol like this{" "}
            <FormatQuoteIcon sx={{ width: 28, height: 28 }}></FormatQuoteIcon>
            then there's extra context below the video
          </strong>{" "}
          on how a particular video might have impacted me as a music fan or
          creator!<br></br>Also,{" "}
          <strong>click on a bar to filter the table to that month!</strong>{" "}
          Happy listening!
        </Typography>
      </Container>
    </>
  );
}

export default IntroText;
