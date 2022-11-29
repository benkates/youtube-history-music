import {
  Card,
  CardActionArea,
  CardHeader,
  Typography,
  CardMedia,
  Avatar,
  CardContent,
} from "@mui/material";

//TODO: channel text for tiny desk and COLORS
//TODO: radio buttons style for swipe

function ChannelCard({ name, children, subheader, url, tooltipTitle }) {
  return (
    <Card>
      {/* <CardActionArea href={url} target="_blank"> */}
      <CardHeader
        avatar={<Avatar alt={name} src={`avatar/${name}.jpg`} />}
        title={name}
        subheader={subheader}
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
      {/* </CardActionArea> */}
    </Card>
  );
}

export default ChannelCard;
