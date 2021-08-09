import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./form.scss";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <Paper className="form_content">
   
      <Typography variant="h5">Trade Travel Assets</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4} className="img_column">
          <img src="https://dummyimage.com/300x300/#EEEEE/000000" />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Grid container>
            <Grid xs={12} lg={6} className="column">
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  variant="outlined"
                  className="text_feild"
                  placeholder="Asset Location"
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  variant="outlined"
                  className="text_feild"
                  placeholder="Number of Units to Sell"
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  variant="outlined"
                  className="text_feild"
                  placeholder="Price Per Unit for Sale Now in TRVL"
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  variant="outlined"
                  className="text_feild"
                  placeholder="Minimum Bid Price Per Unit in TRVL"
                />
                <TextareaAutosize
                  aria-label="minimum height"
                  className="textarea_feild"
                  minRows={5}
                  placeholder="Description and Comments"
                />
              </form>
              <FormControl variant="outlined" className="select_feild">
                <InputLabel htmlFor="outlined-age-native-simple">
                  Select Tags
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
              <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className="darkbtn"
                >
                  SUBMIT FOR SALE
                </Button>
            </Grid>
            <Grid xs={12} lg={6} className="column">
            <Typography variant="h6">TRVL to USD Calculator</Typography>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  variant="outlined"
                  className="text_feild"
                  placeholder="Amount in TRVL"
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  variant="outlined"
                  className="text_feild"
                  placeholder="Amount in USDT"
                />
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className="darkbtn"
                >
                  CONVERT
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
   
    </Paper>
  );
}
