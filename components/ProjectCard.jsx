/* eslint-disable @next/next/no-img-element */
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

let img =
  "https://images.unsplash.com/photo-1533094602577-198d3beab8ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlhZ2FyYSUyMGZhbGxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80";

export default function ProjectCard() {
  const styles = useStyles();
  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <Paper elevation={3}>
        <Box className={styles.img}>
          <img src={img} alt="" />
        </Box>
        <Box className={styles.content}>
          <Typography align="left" variant="h5" className={classes.h5}>
            Price
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}

const useStyles = makeStyles({
  content: {
    padding: "0px 20px",
  },
  img: {
    "& > img": {
      height: "200px",
      width: "100%",
    },
  },
  h5: {
    color: "red",
  },
});
