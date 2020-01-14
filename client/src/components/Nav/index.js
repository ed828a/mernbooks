import React from "react";
import Searchbar from "../Searchbar";
import Signinmodal from "../Signinmodal";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  form,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import ComicbookpagesModified from "../../images/ComicbookpagesModified.jpg";
import "typeface-roboto";
import Modal from "@material-ui/core/Modal";
import Input from "@material-ui/core/Input";
import useAxios from "axios-hooks";
import Axios from "axios";


const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: "#D92B6B"
    },
    title: {
      backgroundImage: `url(${ComicbookpagesModified})`,
      padding: theme.spacing(15, 0, 15, 0)
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  };
});

const Nav = () => {
 const classes = useStyles();

  return (
    <Grid container direction="column">
        <Grid container direction="row">
      <Grid container item justify="space-between" className={classes.root}>
        <Searchbar />
        <Grid direction="row" item justify="flex-end">
        {/* <ul>
          <li><Link to={"/"}>Home  </Link></li>
          <li><Link to={"/gamepage"}>Games  </Link></li>
        </ul> */}
        <Grid item><Link to={"/"}>Home  </Link></Grid>
        <Grid item><Link to={"/gamepage"}>Games  </Link></Grid>
        </Grid>
        </Grid>
        <Signinmodal />

      </Grid>
    </Grid>
  );
};

export default Nav;
