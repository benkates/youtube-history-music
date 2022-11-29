import {
  Card,
  //   CardActionArea,
  CardHeader,
  Typography,
  CardMedia,
  Avatar,
} from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//TODO: figure out channel text
//TODO: write text

function ChannelCard({
  name,
  children,
  subheader,
  chipAvatarColor,
  tooltipTitle,
}) {
  return (
    <Card>
      {/* <CardActionArea> */}
      <CardHeader
        avatar={<Avatar alt={name} src={`avatar/${name}.jpg`} />}
        title={name}
        subheader={subheader}
      />
      <CardMedia
        component="img"
        height="225"
        width="100%"
        image={`channel-images/${name}.jpg`}
        alt={name}
      />
      {/* <br></br>
      <div style={{ textAlign: "center" }}>
        {/* <Tooltip title={tooltipTitle}>
            <ChipAvatar
              name={name}
              chipAvatarColor={chipAvatarColor}
            ></ChipAvatar>
          </Tooltip>
      </div> */}
      {/* <Typography sx={{ mr: 2, ml: 2, mb: 2 }}>{children}</Typography> */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{children}</Typography>
        </AccordionDetails>
      </Accordion>
      {/* </CardActionArea> */}
    </Card>
  );
}

export default ChannelCard;
