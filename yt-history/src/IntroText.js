import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ChipAvatar from "./utils/ChipAvatar";

// import { Grow } from "@mui/material";

//TODO: channels
//TODO: month filter intro
//TODO: transition body text

function IntroText({ theme }) {
  return (
    <>
      {/* <Grow toggle={true} mountOnEnter unmountOnExit> */}
      <Container maxWidth="lg">
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
          sx={{ textAlign: "center", mb: 2 }}
        >
          by Ben Kates{" "}
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
          Tiny Desk amazing Against the Clock series from FACT Some good notes
          in here about the channels in my previous writing Now this is a thing
          blah blah blah {ChipAvatar("FACTmagazine")}
        </Typography>
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
          MONTH CLICK: Click on a month bar to filter the table to that month!
        </Typography>
      </Container>
      {/* </Grow> */}
    </>
  );
}

export default IntroText;
