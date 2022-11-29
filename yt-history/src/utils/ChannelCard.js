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
      <CardHeader
        avatar={<Avatar alt={name} src={`avatar/${name}.jpg`} />}
        title={name}
        subheader={subheader}
        action={
          <IconButton href={url} target="_blank">
            <Link />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="225"
        width="400px"
        image={`channel-images/${name}.jpg`}
        alt={name}
      />
      <CardContent>
        <Typography>{children}</Typography>
      </CardContent>
    </Card>
  );
}

export default ChannelCard;
