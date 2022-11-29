import { Container, Typography } from "@mui/material";

function FooterText() {
  return (
    <Container maxWidth="md">
      <hr style={{ borderColor: "grey", marginTop: 20 }}></hr>
      <Typography sx={{ mt: 3, mb: 3, color: "lightgrey" }}>
        A note on viewcount: The YouTube algorithm is amazing and there are some
        views that have counted towards my history that might have auto-played
        when I was distracted, out of the room, or even asleep! The bottom line
        is that the videos that have the highest views are the ones I love the
        most.
      </Typography>
      <Typography component="p" sx={{ mt: 3, mb: 3, color: "lightgrey" }}>
        I had a lot of fun making this! This was my first larger React.js
        project after years of developing in R/Shiny and dashboarding tools
        Google Data Studio and Power BI! If you're curious to learn more about
        the code, you can visit the{" "}
        <a
          href="https://github.com/benkates/apps/tree/main/yt-history"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          GitHub repo
        </a>{" "}
        here! Check out my{" "}
        <a href="https://benkates.com" style={{ color: "white" }}>
          personal site
        </a>{" "}
        too! Cheers and happy listening.
        <br></br>
        <br></br>
      </Typography>
    </Container>
  );
}

export default FooterText;
