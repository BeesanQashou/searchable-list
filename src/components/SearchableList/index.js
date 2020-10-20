import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import cx from "classnames";
import { isExists } from "./utils";

const SearchableList = ({
  items = [],
  onSearch = () => {},
  onSelect = () => {},
  selectedItems = [],
}) => {
  const classes = useStyles();
  const [originalItems] = useState(items);

  const handleSearch = (e) => {
    const query = e.target.value;
    if (!query) {
      onSearch(originalItems);
      return;
    }
    const filtered = originalItems.filter((item) =>
      item.value.toLowerCase().includes(query.toLowerCase())
    );
    onSearch(filtered);
  };
  return (
    <Paper elevation={3} className={classes.root}>
      <TextField onChange={handleSearch} />
      <Box display="flex" flexDirection="column">
        {items.map((item, index) => {
          return (
            <Box
              key={`${item.value}-${index}`}
              justifyContent="space-between"
              display="flex"
              className={cx(classes.item, {
                [classes.selectedItem]: isExists(selectedItems, item),
              })}
              onClick={() => onSelect(item)}
            >
              <Box display="flex">
                {item.leftIcon}
                <Typography>{item.lable}</Typography>
              </Box>
              {isExists(selectedItems, item) ? <CheckIcon /> : <AddIcon />}
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
};

export default SearchableList;
