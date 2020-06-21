import React, { useState, useEffect } from "react";
import { core } from "./material";
import { useHistory, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    setSelectedItem(sidebarItems.find((i) => i.path === location.pathname));
  }, [location]);

  const [selectedItem, setSelectedItem] = useState();

  const handleClick = (item) => {
    setSelectedItem(item);
    history.push(item.path);
  };

  const getClassName = (item) =>
    selectedItem === item ? classes.selectedItem : "";

  return (
    <>
      {selectedItem && (
        <Helmet>
          <title>{`${myInfo.fullName} - ${selectedItem.title}`}</title>
        </Helmet>
      )}
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
