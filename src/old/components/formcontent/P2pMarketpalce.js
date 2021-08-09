import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./form.scss";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

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
  
  const [value, setValue] = React.useState('female');

  const handleCChange = (event) => {
    setValue(event.target.value);
  };

  const [alignment, setAlignment] = React.useState('left');
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
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6} className="img_column">
          <Typography variant="h5">Trade Travel Assets</Typography>
        </Grid>
        <Grid item xs={12} lg={6} className="input_btn">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text_feild"
              placeholder="Search Location"
            />
           <button className="connect_wallect text-center">
              Search
            </button>
          </form>
        </Grid>
        <Grid xs={12} lg={12} className="btns">
          <button className="connect_wallet">All</button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="outlined_btn"
          >
            Accommodations
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className="outlined_btn"
          >
            Experiences
          </Button>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned" className="bb">
              Buy
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified" className="bbb">
              Trade
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid xs={12} lg={12}>
          <FormControl variant="outlined" className="select__feild">
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
        </Grid>
        <Grid item xs={12} lg={3} className="img_column_market">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image="https://dummyimage.com/200x250/#EEEEE/000000"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Bali
                </Typography>
                <Typography variant="h6">
                    55 TVRL ($333 UDD)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} lg={3} className="img_column_market">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image="https://dummyimage.com/200x250/#EEEEE/000000"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Bali
                </Typography>
                <Typography variant="h6">
                    55 TVRL ($333 UDD)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} lg={3} className="img_column_market">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image="https://dummyimage.com/200x200/#EEEEE/000000"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Bali
                </Typography>
                <Typography variant="h6">
                    55 TVRL ($333 UDD)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} lg={3} className="img_column_market">
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleCChange}
            >
              <FormControlLabel value="All" control={<Radio />} label="All" />
              <FormControlLabel
                value="Vacationer Level"
                control={<Radio />}
                label="Vacationer Level"
              />
              <FormControlLabel
                value="Traveller Level"
                control={<Radio />}
                label="Traveller Level"
              />
              <FormControlLabel
                value="Explorer Level"
                control={<Radio />}
                label="Explorer Level"
              />
              <FormControlLabel
                value="Jetsetter Level"
                control={<Radio />}
                label="Jetsetter Level"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
}
