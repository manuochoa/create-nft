import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import { RiExchangeDollarLine } from "react-icons/ri";
import { MdRedeem } from "react-icons/md";
import { FiGrid } from "react-icons/fi";
import { GiTrade } from "react-icons/gi";
import { GiSellCard } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import baba from "assets/images/baba.png";

function DrawerComponent() {
  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar} />

      <List>
        <ListItem className="sidebar_icons">
          <ListItemIcon className="baba_img">
            <img src={baba} alt="logo" />
          </ListItemIcon>
        </ListItem>
        <ListItem className="sidebar_icons user_box">
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Trvl user" secondary="trvl.com" />
        </ListItem>
        <ListItem button className="sidebar_icons">
          <ListItemIcon>
            <FiGrid className="font_job_si" />
          </ListItemIcon>
          <Link to="/">
            <ListItemText className="ttle_clr_ssbr" primary="Dashboard" />{" "}
          </Link>
        </ListItem>
        <ListItem button className="sidebar_icons">
          <ListItemIcon>
            <FiGrid className="font_job_si" />
          </ListItemIcon>
          <Link to="/create">
            <ListItemText className="ttle_clr_ssbr" primary="Create" />{" "}
          </Link>
        </ListItem>
        <ListItem button className="sidebar_icons">
          <ListItemIcon>
            <GiSellCard className="font_job_si" />
          </ListItemIcon>
          <Link to="/sell">
            <ListItemText className="ttle_clr_ssbr" primary="Sell" />
          </Link>
        </ListItem>
        <ListItem button className="sidebar_icons">
          <ListItemIcon>
            <GiTrade className="font_job_si" />
          </ListItemIcon>
          <Link to="/assets-sell">
            <ListItemText className="ttle_clr_ssbr" primary="Trade" />
          </Link>
        </ListItem>

        <ListItem button className="sidebar_icons">
          <ListItemIcon>
            <MdRedeem className="font_job_si" />
          </ListItemIcon>
          <Link to="/p2pmarketplace">
            <ListItemText primary="P2P Marketplace" className="jobs_clr" />
          </Link>
        </ListItem>

        <ListItem button className="sidebar_icons">
          <ListItemIcon>
            <RiExchangeDollarLine className="font_job_si" />
          </ListItemIcon>
          <Link to="/userdashboard">
            <ListItemText primary="T-share exchange " className="jobs_clr" />
          </Link>
        </ListItem>

        <ListItem button className="sidebar_icons">
          <ListItemIcon>
            <FiSettings className="font_job_si" />
          </ListItemIcon>
          <Link to="/userdashboard">
            <ListItemText className="ttle_clr_ssbr" primary="Setting" />
          </Link>
        </ListItem>
      </List>
    </div>
  );
}

export default DrawerComponent;
