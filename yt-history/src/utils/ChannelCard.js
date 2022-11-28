import { Card, Typography } from "@mui/material";
import ChipAvatar from "../utils/ChipAvatar";
import Tooltip from "@mui/material/Tooltip";

//TODO: implement https://mui.com/material-ui/react-card/#complex-interaction
//TODO: accordian on the bottom?

function ChannelCard({ name, children, chipAvatarColor, tooltipTitle }) {
  return (
    <Card>
      <img
        height="100%"
        width="100%"
        alt={name}
        src={`channel-images/${name}.jpg`}
      ></img>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <Tooltip title={tooltipTitle}>
          <ChipAvatar
            name={name}
            chipAvatarColor={chipAvatarColor}
          ></ChipAvatar>
        </Tooltip>
      </div>
      <Typography sx={{ m: 2 }}>{children}</Typography>
    </Card>
  );
}

export default ChannelCard;
