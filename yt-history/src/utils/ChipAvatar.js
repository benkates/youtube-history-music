import { Chip, Avatar } from "@mui/material";
import { forwardRef } from "react";

const ChipAvatar = forwardRef(function MyComponent(props, ref) {
  //  Spread the props to the underlying DOM element.
  let color = props.chipAvatarColor ? props.chipAvatarColor : "white";
  return (
    <Chip
      avatar={<Avatar alt={props.name} src={`avatar/${props.name}.jpg`} />}
      label={props.name}
      variant="outlined"
      sx={{ color: color, borderColor: null }}
      ref={ref}
      {...props}
    />
  );
});

export default ChipAvatar;
