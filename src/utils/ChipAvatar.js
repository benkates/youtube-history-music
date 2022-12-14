import { Chip, Avatar } from "@mui/material";
import { forwardRef } from "react";

const ChipAvatar = forwardRef((props, ref) => {
  //  Spread the props to the underlying DOM element.
  let color = props.chipAvatarColor ? props.chipAvatarColor : "white";
  return (
    <Chip
      avatar={<Avatar alt={props.name} src={`avatar/${props.name}.jpg`} />}
      label={props.name}
      variant="outlined"
      sx={{ color: color, borderColor: null, cursor: "pointer" }}
      ref={ref}
      {...props}
    />
  );
});

export default ChipAvatar;
