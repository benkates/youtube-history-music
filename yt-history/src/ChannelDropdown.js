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

import YouTubeIcon from "@mui/icons-material/YouTube";

import { format } from "d3";

//DONE: put total row first for dropdown
//DONE: stylize "all" avatar
//DONE: commas in numbers

function ChannelDropdown({
  data,
  selectedChannel,
  setSelectedChannel,
  setSelectedVideo,
  setSelectedMonth,
}) {
  const AvatarStyles = { width: 24, height: 24, mr: 1, position: "absolute" };
  const tidyData = tidy(
    data,
    //group by channel name and count
    groupBy(["channel_name"], [count("channel_name", { name: "count" })]),
    //create a total row
    total({ count: sum("count") }, { channel_name: "All Channels" }),
    //sort descending by count
    arrange(desc("count")),
    //create label field
    mutate({
      label: (d) => `${d.channel_name} (playcount: ${format(",")(d.count)})`,
    })
  );
  return (
    <FormControl fullWidth sx={{ color: "white", borderColor: "white" }}>
      <InputLabel id="demo-simple-select-label">Channel</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedChannel}
        label="Channel"
        onChange={(e) => {
          //set channel up for selection
          setSelectedChannel(e.target.value);
          //unselect video (so it grabs the top video of that channel next)
          setSelectedVideo(null);
          //unselect month filter
          setSelectedMonth(null);
          //reset table to top
          document.querySelector(".MuiDataGrid-virtualScroller").scrollTop = 0;
        }}
      >
        {tidyData.map((e) => {
          return (
            <MenuItem
              value={e.channel_name}
              key={e.channel_name}
              divider={true}
              dense={true}
            >
              <Avatar
                alt={`${e.label}`}
                src={`./avatar/${e.channel_name}.jpg`}
                sx={{ ...AvatarStyles, bgcolor: "red" }}
              >
                {e.channel_name === "All Channels" && (
                  <YouTubeIcon sx={{ width: 20, height: 20 }}></YouTubeIcon>
                )}
              </Avatar>
              <div style={{ marginLeft: 30 }}>{e.label}</div>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default ChannelDropdown;
