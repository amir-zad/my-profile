import React, { useState } from "react";
import { core } from "./material";
import { useHistory } from "react-router-dom";
import { sidebarItems, myInfo } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

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
  const [selectedItem, setSelectedItem] = useState(sidebarItems[0]);

  const handleClick = (item) => {
    setSelectedItem(item);
    history.push(item.path);
  };

  const getClassName = (item) =>
    selectedItem === item ? classes.selectedItem : "";

  return (
    <>
      <Helmet>
        <title>{`${myInfo.fullName} - ${selectedItem.title}`}</title>
      </Helmet>
      <MenuList>
        {sidebarItems.map((i) => (
          <MenuItem
            key={i.path}
            onClick={() => handleClick(i)}
            selected={selectedItem === i}
          >
            <ListItemIcon>
              <FontAwesomeIcon icon={i.icon} className={getClassName(i)} />
            </ListItemIcon>
            <Typography className={getClassName(i)}>{i.title}</Typography>
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
};

export default Menu;
