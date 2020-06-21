import React from "react";
import { core } from "../components/material";
import { myInfo } from "../config";

const { Typography, Box, Avatar: AvatartComp, makeStyles, createStyles } = core;

const useStyles = makeStyles((theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  })
);

const Avatar = () => {
  const classes = useStyles();

  return (
    <>
      <Box justifyContent="center" display="flex" marginBottom={1}>
        <AvatartComp
          className={classes.avatar}
          alt={myInfo.fullName}
          src={myInfo.imageUrl}
          variant="circle"
        />
      </Box>

      <Box justifyContent="center" display="flex">
        <Typography color="textPrimary" variant="h4">
          {myInfo.fullName}
        </Typography>
      </Box>
      <Box justifyContent="center" display="flex">
        <Typography color="textSecondary" variant="h5">
          {myInfo.jobTitle}
        </Typography>
      </Box>
    </>
  );
};

export default Avatar;
