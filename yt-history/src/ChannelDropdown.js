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

//TODO: put total row first for dropdown
//TODO: commas in numbers

function ChannelDropdown({ data, selectedChannel, setSelectedChannel }) {
  return (
    <FormControl fullWidth sx={{ color: "white", borderColor: "white" }}>
      <InputLabel id="demo-simple-select-label">Channel</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedChannel}
        label="Channel"
        onChange={(e) => setSelectedChannel(e.target.value)}
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
            label: (d) => `${d.channel_name} (Playcount: ${d.count})`,
          })
        ).map((e) => {
          return (
            <MenuItem value={e.channel_name} key={e.channel_name}>
              {e.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default ChannelDropdown;
