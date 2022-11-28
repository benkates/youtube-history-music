import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ChipAvatar from "./utils/ChipAvatar";

import Tooltip from "@mui/material/Tooltip";
import { Grid } from "@mui/material";

/*
Soulection
https://i.ytimg.com/vi/Htpx6WhDWBo/maxresdefault.jpg

NPR
https://media.npr.org/assets/img/2019/10/18/tinydesk_dsc0968_custom-abcf1684322940196215fd7880f34d831258d163.jpg

KEXP
https://dch81km8r5tow.cloudfront.net/wp-content/uploads/2016/01/Screen-Shot-2016-01-08-at-12.29.04-PM-958x559.png

Boiler Room
https://i.ytimg.com/vi/c0-hvjV2A5Y/maxresdefault.jpg

FACT
https://i.ytimg.com/vi/8e_E3f-mb0o/maxresdefault.jpg

COLORS
https://media1.popsugar-assets.com/files/thumbor/q6xBMPQyqKqW6MvYhOhrAiYB0_g/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/06/12/791/n/1922283/netimgTc2clT/i/Blue-Lights-Jorja-Smith.jpg

Fkj
https://i.ytimg.com/vi/AtNGid45FOI/maxresdefault.jpg

Stones Throw
https://www.stonesthrow.com/app/uploads/2018/11/rejoicer-2-1.jpg

Vulf
https://i.ytimg.com/vi/NsvjOrZOR5U/maxresdefault.jpg

Rhythym Roulette
https://districtmagazine.ie/wp-content/uploads/2021/02/hitboymassappealrhythmrouletteheader.jpg
*/

//TODO: channels text
//TODO: intro the month filter
//TODO: rework the channel list format https://mui.com/material-ui/react-card/#complex-interaction

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
          color="lightgrey"
          fontSize="20px"
          gutterBottom
          fontStyle={"italic"}
          sx={{ textAlign: "center", mb: 2 }}
        >
          by Ben Kates / Nov 2022{" "}
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
        <Grid container spacing={2}>
          <Grid item md={6}>
            <ul className="intro-text-list">
              <li>
                <Tooltip title="First Subscribed: July 5, 2017">
                  <ChipAvatar name="FACTmagazine"></ChipAvatar>
                </Tooltip>
                <br></br> Fact Magazine describes itself as a "music platform"
                that... -- A note on playcount: The YouTube algorithm is amazing
                and there might be some plays in there that have counted towards
                my history that might have auto-played when I was distracted,
                out of the room, or even asleep! The bottom line is that the
                videos that have the highest playcount are the ones I love the
                most.
              </li>
              <li>
                <Tooltip title="First Subscribed: June 27, 2018">
                  <ChipAvatar name="Vulf"></ChipAvatar>
                </Tooltip>
                <br></br> Vulf comes from Vulfpeck -- A note on playcount: The
                YouTube algorithm is amazing and there might be some plays in
                there that have counted towards my history that might have
                auto-played when I was distracted, out of the room, or even
                asleep! The bottom line is that the videos that have the highest
                playcount are the ones I love the most.
              </li>
              <li>
                <Tooltip title="First Subscribed: December 26, 2018">
                  <ChipAvatar name="NPR Music"></ChipAvatar>
                </Tooltip>{" "}
                <br></br> Tiny Desk -- A note on playcount: The YouTube
                algorithm is amazing and there might be some plays in there that
                have counted towards my history that might have auto-played when
                I was distracted, out of the room, or even asleep! The bottom
                line is that the videos that have the highest playcount are the
                ones I love the most.
              </li>
              <li>
                <Tooltip title="First Subscribed: July 8, 2018">
                  <ChipAvatar name="Mass Appeal"></ChipAvatar>
                </Tooltip>
                <br></br> Rhythm Roulette -- A note on playcount: The YouTube
                algorithm is amazing and there might be some plays in there that
                have counted towards my history that might have auto-played when
                I was distracted, out of the room, or even asleep! The bottom
                line is that the videos that have the highest playcount are the
                ones I love the most.
              </li>
              <li>
                <Tooltip title="First Subscribed: November 27, 2022">
                  <ChipAvatar name="KEXP"></ChipAvatar>
                </Tooltip>{" "}
                <br></br> Like tiny desk but west coast lol -- A note on
                playcount: The YouTube algorithm is amazing and there might be
                some plays in there that have counted towards my history that
                might have auto-played when I was distracted, out of the room,
                or even asleep! The bottom line is that the videos that have the
                highest playcount are the ones I love the most.
              </li>
            </ul>
          </Grid>
          <Grid item md={6}>
            <ul className="intro-text-list" style={{ textAlign: "right" }}>
              <li>
                <Tooltip title="First Subscribed: February 19, 2019">
                  <ChipAvatar name="Soulection"></ChipAvatar>
                </Tooltip>{" "}
                <br></br> Radio show previously soundcloud then Apple Music
                in... -- A note on playcount: The YouTube algorithm is amazing
                and there might be some plays in there that have counted towards
                my history that might have auto-played when I was distracted,
                out of the room, or even asleep! The bottom line is that the
                videos that have the highest playcount are the ones I love the
                most.
              </li>
              <li>
                <ChipAvatar name="Boiler Room"></ChipAvatar> <br></br> Epic -- A
                note on playcount: The YouTube algorithm is amazing and there
                might be some plays in there that have counted towards my
                history that might have auto-played when I was distracted, out
                of the room, or even asleep! The bottom line is that the videos
                that have the highest playcount are the ones I love the most.
              </li>
              <li>
                <Tooltip title="First Subscribed: June 27, 2018">
                  <ChipAvatar name="Stones Throw"></ChipAvatar>
                </Tooltip>{" "}
                <br></br> Record label -- A note on playcount: The YouTube
                algorithm is amazing and there might be some plays in there that
                have counted towards my history that might have auto-played when
                I was distracted, out of the room, or even asleep! The bottom
                line is that the videos that have the highest playcount are the
                ones I love the most.
              </li>
              <li>
                <Tooltip title="First Subscribed: June 27, 2018">
                  <ChipAvatar name="Fkj"></ChipAvatar>
                </Tooltip>{" "}
                <br></br> Loop dude -- A note on playcount: The YouTube
                algorithm is amazing and there might be some plays in there that
                have counted towards my history that might have auto-played when
                I was distracted, out of the room, or even asleep! The bottom
                line is that the videos that have the highest playcount are the
                ones I love the most.
              </li>
              <li>
                <Tooltip title="First Subscribed: November 29, 2018">
                  <ChipAvatar name="COLORS"></ChipAvatar>
                </Tooltip>{" "}
                <br></br> Cool bakcdrops A note on playcount: The YouTube
                algorithm is amazing and there might be some plays in there that
                have counted towards my history that might have auto-played when
                I was distracted, out of the room, or even asleep! The bottom
                line is that the videos that have the highest playcount are the
                ones I love the most.
              </li>
            </ul>
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
