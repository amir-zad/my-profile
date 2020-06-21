import React from "react";
import Avatar from "./Avatar";
import Menu from "./Menu";

import { core } from "./material";

const { Box } = core;

const margin = 7;

const Sidebar = () => {
  return (
    <>
      <Box marginBottom={margin} marginTop={4}>
        <Avatar />
      </Box>
      <Box marginBottom={margin}>
        <Menu />
      </Box>
    </>
  );
};

export default Sidebar;
