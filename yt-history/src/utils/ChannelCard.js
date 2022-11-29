import {
  Card,
  CardActionArea,
  CardHeader,
  Typography,
  CardMedia,
  Avatar,
  CardContent,
} from "@mui/material";

//TODO: figure out channel text
//TODO: write text

function ChannelCard({ name, children, subheader, url, tooltipTitle }) {
  return (
    <Card>
      <CardActionArea href={url} target="_blank">
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
        <CardContent>
          <Typography>{children}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ChannelCard;
