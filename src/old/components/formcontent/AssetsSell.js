import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./form.scss";
import { Typography, Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FaUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import AssetSellTab from "./AssetSellTab";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  divider: {
    height: 20,
    margin: "4px 10px 12px 10px",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });
  const [value, setValue] = React.useState("female");
  const [alignment, setAlignment] = React.useState("left");
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Paper className="form_content">
      <Typography variant="h5">Asset Sales Page</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6} className="img_column">
          <img src="https://dummyimage.com/500x545/#EEEEE/000000" />
          <form className="contract_input" noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              fullWidth
              variant="outlined"
              className="text_feild"
              placeholder="Contract Address: 0x3e31...ea9"
            />
          </form>
        </Grid>
        <Grid item xs={12} lg={6} className="column">
          <Box className="heading_btn">
            <Typography variant="h6">
              Royal Treatment Spa Experience at
              <br /> Avalon Castle in Ubud Bali
            </Typography>
          </Box>
          <Box className="highlight_text">
            <Typography varient="h6" component="h6">
              JGNNFT
            </Typography>
            <Divider className={classes.divider} orientation="vertical" />
            <Typography varient="p">
              <FaUser /> Oxner own 5
            </Typography>
          </Box>
          <Box className="heading_button">
            <Button
              variant="outlined"
              color="dark"
              className="outlined_btn"
              startIcon={<MdFavorite />}
            >
              Like 1
            </Button>
            <Button
              variant="outlined"
              color="dark"
              className="outlined_btn"
              startIcon={<IoIosShareAlt />}
            >
              Share
            </Button>
          </Box>

          <AssetSellTab />
          <Typography variant="h5" className="properties">
            Properties:
          </Typography>
          <Box className="selectFeilds">
            <FormControl variant="outlined" className="selectfeild">
              <InputLabel htmlFor="outlined-age-native-simple">
                Location
              </InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Tenc</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className="selectfeild">
              <InputLabel htmlFor="outlined-age-native-simple">
                Max Supply
              </InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Tenc</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Box>
          <form className={classes.root} noValidate autoComplete="off">
            <button className="connect_wallet">Cancel Sell</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="connect_wallet">Edit</button>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
}
