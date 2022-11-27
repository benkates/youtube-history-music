import { Chip, Avatar } from "@mui/material";

function ChipAvatar(name) {
  return (
    <Chip
      avatar={<Avatar alt={name} src={`avatar/${name}.jpg`} />}
      label={name}
      variant="outlined"
      sx={{ color: "white", borderColor: null }}
    />
  );
}

export default ChipAvatar;
