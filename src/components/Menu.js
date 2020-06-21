import React, { useState } from "react";
import { core } from "./material";
import { useHistory } from "react-router-dom";
import { sidebarItems } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const {
  MenuList,
  MenuItem,
  Typography,
  createStyles,
  makeStyles,
  ListItemIcon,
} = core;

const useStyles = makeStyles((theme) =>
  createStyles({
    menuItem: {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
    selectedItem: {
      color: theme.palette.primary.main,
    },
  })
);

const Menu = () => {
  const classes = useStyles();
  const history = useHistory();
  const [selectedItemPath, setSelectedItemPath] = useState(
    sidebarItems[0].path
  );

  const handleClick = (item) => {
    setSelectedItemPath(item.path);
    history.push(item.path);
  };

  return (
    <MenuList>
      {sidebarItems.map((i) => (
        <MenuItem
          key={i.path}
          onClick={() => handleClick(i)}
          selected={selectedItemPath === i.path}
        >
          <ListItemIcon>
            <FontAwesomeIcon
              icon={i.icon}
              className={
                selectedItemPath === i.path ? classes.selectedItem : ""
              }
            />
          </ListItemIcon>
          <Typography
            className={selectedItemPath === i.path ? classes.selectedItem : ""}
          >
            {i.title}
          </Typography>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default Menu;
