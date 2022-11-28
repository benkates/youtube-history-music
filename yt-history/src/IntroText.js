import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import Grid from "@mui/material/Grid";

import ChannelCard from "./utils/ChannelCard";

//TODO: channels text
//TODO: intro the month filter

//DONE: transition body text

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
                  .getElementById("watch-bar-chart-top-videos-table")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              scroll to the app
            </span>
          }
        </Typography>
      </Container>
      <Container maxWidth="md" sx={{ p: 0 }} className="fade-in">
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
          intimate recordings of performance and creative process that captivate
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
            mb: 1,
            color: "lightgrey",
          }}
        >
          I've filtered to 10 channels that I love the most! I've been
          subscribed to
        </Typography>
      </Container>

      <Container maxWidth="xl">
        {/* YouTube Channel Grid */}
        <Grid
          container
          spacing={2}
          alignContent="center"
          justifyContent="center"
        >
          <Grid item sm={6} md={4} xl={3}>
            <ChannelCard
              name="Vulf"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: June 27, 2018"
              subheader="548K subscribers"
            >
              Vulf is a record label originally from the funk band Vulfpeck!
              Originally formed in 2011 at University of Michican's music
              school, the collective of musicians has produced -- A note on
              playcount: The YouTube algorithm is amazing and there might be
              some plays in there that have counted towards my history that
              might have auto-played when I was distracted, out of the room, or
              even asleep! The bottom line is that the videos that have the
              highest playcount are the ones I love the most.
            </ChannelCard>
          </Grid>
          <Grid item sm={6} md={4} xl={3}>
            <ChannelCard
              name="FACTmagazine"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: July 5, 2017"
              subheader="327K subscribers"
            >
              Fact Magazine describes itself as a "music platform" that... -- A
              note on playcount: The YouTube algorithm is amazing and there
              might be some plays in there that have counted towards my history
              that might have auto-played when I was distracted, out of the
              room, or even asleep! The bottom line is that the videos that have
              the highest playcount are the ones I love the most.
            </ChannelCard>
          </Grid>
          <Grid item sm={6} md={4} xl={3}>
            <ChannelCard
              name="NPR Music"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: December 26, 2018"
              subheader="7.35M subscribers"
            >
              Tiny Desk -- A note on playcount: The YouTube algorithm is amazing
              and there might be some plays in there that have counted towards
              my history that might have auto-played when I was distracted, out
              of the room, or even asleep! The bottom line is that the videos
              that have the highest playcount are the ones I love the most.
            </ChannelCard>
          </Grid>
          <Grid item sm={6} md={4} xl={3}>
            <ChannelCard
              name="Mass Appeal"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: July 8, 2018"
              subheader="1.01M subscribers"
            >
              Rhythm Roulette -- A note on playcount: The YouTube algorithm is
              amazing and there might be some plays in there that have counted
              towards my history that might have auto-played when I was
              distracted, out of the room, or even asleep! The bottom line is
              that the videos that have the highest playcount are the ones I
              love the most.
            </ChannelCard>
          </Grid>
          <Grid item sm={6} md={4} xl={3}>
            <ChannelCard
              name="KEXP"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: November 27, 2022"
              subheader="2.84M subscribers"
            >
              Like tiny desk but west coast lol -- A note on playcount: The
              YouTube algorithm is amazing and there might be some plays in
              there that have counted towards my history that might have
              auto-played when I was distracted, out of the room, or even
              asleep! The bottom line is that the videos that have the highest
              playcount are the ones I love the most.
            </ChannelCard>
          </Grid>
          <Grid item sm={6} md={4} xl={3}>
            <ChannelCard
              name="Soulection"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: February 19, 2019"
              subheader="118K subscribers"
            >
              Radio show previously soundcloud then Apple Music in... -- A note
              on playcount: The YouTube algorithm is amazing and there might be
              some plays in there that have counted towards my history that
              might have auto-played when I was distracted, out of the room, or
              even asleep! The bottom line is that the videos that have the
              highest playcount are the ones I love the most.
            </ChannelCard>
          </Grid>
          <Grid item sm={6} md={4} xl={3}>
            <ChannelCard
              name="Boiler Room"
              chipAvatarColor="black"
              tooltipTitle={null}
              subheader="3.2M subscribers"
            >
              Epic -- A note on playcount: The YouTube algorithm is amazing and
              there might be some plays in there that have counted towards my
              history that might have auto-played when I was distracted, out of
              the room, or even asleep! The bottom line is that the videos that
              have the highest playcount are the ones I love the most.
            </ChannelCard>
          </Grid>
          <Grid item sm={6} md={4} xl={3}>
            <ChannelCard
              name="Stones Throw"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: June 27, 2018"
              subheader="504K subscribers"
            >
              Record label -- A note on playcount: The YouTube algorithm is
              amazing and there might be some plays in there that have counted
              towards my history that might have auto-played when I was
              distracted, out of the room, or even asleep! The bottom line is
              that the videos that have the highest playcount are the ones I
              love the most.
            </ChannelCard>
          </Grid>
          <Grid item sm={6} md={4} xl={3}>
            <ChannelCard
              name="Fkj"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: June 27, 2018"
              subheader="2.23M subscribers"
            >
              Loop dude -- A note on playcount: The YouTube algorithm is amazing
              and there might be some plays in there that have counted towards
              my history that might have auto-played when I was distracted, out
              of the room, or even asleep! The bottom line is that the videos
              that have the highest playcount are the ones I love the most.
            </ChannelCard>
          </Grid>
          <Grid item sm={6} md={4} xl={3}>
            <ChannelCard
              name="COLORS"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: November 29, 2018"
              subheader="6.47M subscribers"
            >
              Cool backdrops -- A note on playcount: The YouTube algorithm is
              amazing and there might be some plays in there that have counted
              towards my history that might have auto-played when I was
              distracted, out of the room, or even asleep! The bottom line is
              that the videos that have the highest playcount are the ones I
              love the most.
            </ChannelCard>
          </Grid>
        </Grid>

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
          To view a video, just select the row in the table. If there's a quote
          symbol like this{" "}
          <FormatQuoteIcon sx={{ width: 28, height: 28 }}></FormatQuoteIcon>
          then I've added extra context below the video on how a particular
          video might have impacted me as a music fan or creator!
          <br></br>
          <br></br>A note on playcount: The YouTube algorithm is amazing and
          there are some plays that have counted towards my history that might
          have auto-played when I was distracted, out of the room, or even
          asleep! The bottom line is that the videos that have the highest
          playcount are the ones I love the most.
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
