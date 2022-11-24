import {
  tidy,
  groupBy,
  count,
  mutate,
  arrange,
  desc,
  total,
  sum,
} from "@tidyjs/tidy";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";

import { format } from "d3";

//TODO: put total row first for dropdown
//TODO: stylize "all" avatar
//DONE: commas in numbers

function ChannelDropdown({
  data,
  selectedChannel,
  setSelectedChannel,
  setSelectedVideo,
}) {
  return (
    <FormControl fullWidth sx={{ color: "white", borderColor: "white" }}>
      <InputLabel id="demo-simple-select-label">Channel</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedChannel}
        label="Channel"
        onChange={(e) => {
          //set channel up for selection, unselect video (so it gets top)
          setSelectedChannel(e.target.value);
          setSelectedVideo(null);
        }}
      >
        {tidy(
          data,
          //group by channel name and count
          groupBy(["channel_name"], [count("channel_name", { name: "count" })]),
          //sort descending by count
          arrange(desc("count")),
          //create a total row
          total({ count: sum("count") }, { channel_name: "All Channels" }),
          //create label field
          mutate({
            label: (d) =>
              `${d.channel_name} (Playcount: ${format(",")(d.count)})`,
          })
        ).map((e) => {
          return (
            <MenuItem value={e.channel_name} key={e.channel_name}>
              <Avatar
                alt={`${e.label}`}
                src={`./avatar/${e.channel_name}.jpg`}
                sx={{ width: 24, height: 24, mr: 1, position: "absolute" }}
              />{" "}
              <div style={{ marginLeft: 30 }}>{e.label}</div>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default ChannelDropdown;
