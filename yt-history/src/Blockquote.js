import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";

// TODO: write commentary summaries for some videos

function Blockquote({ selectedVideo }) {
  const toggle =
    selectedVideo === "https://www.youtube.com/watch?v=IUMTaAQ43lY";
  return (
    <Slide direction="left" in={toggle} mountOnEnter unmountOnExit>
      <Paper
        sx={{
          backgroundColor: "#282c34",
          border: "1px solid white",
          color: "white",
          mt: 3,
          p: 3,
          fontStyle: "italic",
        }}
      >
        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </blockquote>
      </Paper>
    </Slide>
  );
}

export default Blockquote;
