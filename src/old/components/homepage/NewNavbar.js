import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
// import AccountCircle from "@material-ui/icons/AccountCircle";
import { TextField, Box} from '@material-ui/core';
import Navbar from './header/Navbar'
import mainlogo from '../../assets/images/site.png'
import './appbar.scss'


const styleSheet = {
  list : {
    width : "100%",
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
    color : "#fff",
  },

  sideBarIcon : {
    padding : 0,
    color : "white",
    cursor : "pointer",
  }
}

class ResAppBar extends Component{
  
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div>
        <AppBar >
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />
                
              <Typography color="inherit" variant = "headline">
              <img src={mainlogo} className="imgsize"/>
              </Typography>
              <Typography color="inherit" variant = "headline"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         className="bfgfbnio"
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         anchor={'top'}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             className="bbnio"
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}>
               <ListItem key = {1} button divider> Marketplace </ListItem>
               <ListItem key = {2} button divider> Stores </ListItem>
               <ListItem key = {3} button divider> My Collection </ListItem>
               <ListItem key = {4} button divider> Create </ListItem>
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
      <Box className="header_multi">
       
          {/* <Typography variant = "headline" color="inherit" >
          <img src={mainlogo} className="imgsize"/>
          <Typography className="logotext" display="inline">JGN</Typography>
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
          
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >Marketplace</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >Stores</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >My Collection</Typography>
          <Typography variant = "subheading" style={{flexGrow:1}} className = {classes.padding} color="inherit" >Create</Typography>
          */}
          <Navbar/>
      
      </Box>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);
