import {
  Card,
  CardHeader,
  Typography,
  CardMedia,
  Avatar,
  CardContent,
  IconButton,
} from "@mui/material";

import { Link } from "@mui/icons-material";

//DONE: add url
//DONE: channel text for tiny desk and COLORS
//DONE: radio buttons style for swipe

function ChannelCard({ name, children, subheader, url, tooltipTitle }) {
  return (
    <Card>
      {/* header */}
      <CardHeader
        avatar={<Avatar alt={name} src={`avatar/${name}.jpg`} />}
        title={name}
        subheader={subheader}
        // action button
        action={
          <IconButton href={url} target="_blank">
            <Link />
          </IconButton>
        }
      />
      {/* image */}
      <CardMedia
        component="img"
        height="225"
        width="400px"
        image={`channel-images/${name}.jpg`}
        alt={name}
      />
      {/* content */}
      <CardContent>
        <Typography>{children}</Typography>
      </CardContent>
    </Card>
  );
}

export default ChannelCard;
