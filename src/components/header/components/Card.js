import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { RiShareForwardLine } from "react-icons/ri";
import { RiCoinsLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { FaHandHoldingHeart } from "react-icons/fa";
import WalletButton from "../../wallet-button/WalletButton";
import "./card.scss";

export default function SimpleCard() {
  return (
    <Box className="main">
      <Grid container spacing={3} className="main_heading">
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" component="h2">
            My Travel Assets Dasdhboard
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <WalletButton />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className="red_paper">
            <Avatar>
              <RiShareForwardLine />
            </Avatar>
            <Box>
              <Typography variant="h6">300</Typography>
              <Typography variant="caption">Your T-shares</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className="red_paper">
            <Avatar>
              <RiCoinsLine />
            </Avatar>
            <Box>
              <Typography variant="h6">3000</Typography>
              <Typography variant="caption">Your T-shares</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className="red_paper">
            <Avatar>
              <FaHandHoldingHeart />
            </Avatar>
            <Box>
              <Typography variant="h6">100</Typography>
              <Typography variant="caption">Your T-shares</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className="yellow_paper">
            <Avatar>
              <FiSettings />
            </Avatar>
            <Box>
              <Typography variant="h6">Setting</Typography>
              <Typography variant="caption">Your T-shares</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
