import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "../multicollect/newmulticollect.scss";
import { BsArrowLeft } from "react-icons/bs";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import mainlogo from "../../../assets/images/site.png";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Input from "@material-ui/core/Input";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    marginLeft: "10px",
    // width: "200px",
  },
}));
export default function SimpleContainer() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleCCChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleCChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className="multicollect_content">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={1} className="icon">
            <BsArrowLeft />
          </Grid>
          <Grid item xs={12} lg={11}>
            <Box className="content_pera">
              <Typography varient="p">Manage Collectible type</Typography>
              <Typography variant="h5">Create Multiple Collectible</Typography>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <Typography variant="h6" className="all_h6">
                  Upload File:
                </Typography>
                <Box className="upload_content">
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file" className="uploadbtn">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      Upload
                    </Button>
                  </label>
                  <Typography>PNG, GIF, WEBP, MP4 or MP3 Max 30mb</Typography>
                </Box>
                <Box className="switch_btn">
                  <Box>
                    <Typography variant="h6" className="all_h6">
                      Put on sale
                    </Typography>
                    <Typography variant="p">
                      You'll receive bids on this item
                    </Typography>
                  </Box>
                  <Switch
                    className="switch"
                    checked={state.checkedB}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </Box>
                <Box>
                  <Typography variant="h6" className="all_h6">
                    Instant sale price
                  </Typography>
                  <Typography variant="p">
                    Enter the price for which the item will be instantly sold
                  </Typography>
                  <br />
                  <TextField
                    id="standard-basic"
                    label="Standard"
                    className="formInputControl"
                  />
                  <FormControl className="formControl">
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleCChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box className="collection_box">
                  <Typography variant="h6" className="all_h6">
                    Choose collection
                  </Typography>
                  <Box className="img_box">
                    <img src={mainlogo} className="imgsize" />
                    <Typography varient="h6">JGNNFT</Typography>
                  </Box>
                </Box>
                <Box className="text_feilds">
                  <Typography varient="div">
                    <Typography variant="h6" className="all_h6">
                      Name
                    </Typography>
                    <TextField id="standard-basic" fullWidth placeholder="e.g. M" />
                  </Typography>
                  <Typography varient="div">
                    <Typography
                      variant="h6"
                      className="all_h6"
                      display="inline"
                    >
                      Description
                    </Typography>

                    <Typography
                      variant="body1"
                      display="inline"
                      className="all_h6"
                    >
                      (optional)
                    </Typography>
                    <TextField
                      id="standard-basic"
                      placeholder="e.g. M"
                      fullWidth
                      className="input_width"
                    />
                  </Typography>
                </Box>
                <Box className="flex_inputs">
                  <Box>
                    <Typography variant="h6" display="block" className="all_h6">
                      Royalties
                    </Typography>
                    <FormControl
                      className={clsx(
                        classes.margin,
                        classes.withoutLabel,
                        classes.textField
                      )}
                    >
                      <Input
                        id="standard-adornment-weight"
                        value={values.weight}
                        onChange={handleCCChange("weight")}
                        endAdornment={
                          <InputAdornment position="end">%</InputAdornment>
                        }
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                          "aria-label": "Suggested 10%, 20%, 30%",
                        }}
                      />
                      <FormHelperText id="standard-weight-helper-text">
                      Suggested 10%, 20%, 30%
                      </FormHelperText>
                    </FormControl>
                  </Box>
                  <Box>
                    <Typography variant="h6" display="block" className="all_h6">
                      Number of copies
                    </Typography>
                    <FormControl
                      className={clsx(
                        classes.margin,
                        classes.withoutLabel,
                        classes.textField
                      )}
                    >
                      <Input
                        id="standard-adornment-weight"
                        value={values.weight}
                        onChange={handleCCChange("weight")}
                        endAdornment={
                          <InputAdornment position="end"></InputAdornment>
                        }
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                          "aria-label": "Amount of tokens",
                        }}
                      />
                      <FormHelperText id="standard-weight-helper-text">
                      Amount of tokens
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Box>
                <Box className="propetiesInput">
                  <Typography variant="h6" className="all_h6">
                    Properties(optional)
                  </Typography>
                  <Box className="flex_inputs">
                    <TextField
                      id="standard-basic"
                      placeholder="e.g. size"
                      className="propeties_input"
                    />
                    <TextField
                      id="standard-basic"
                      placeholder="e.g. M"
                      className="propeties_input"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={4} xs={12}>
                <Typography variant="h6" className="all_h6">
                  Preview
                </Typography>
                <Box className="preview">
                  <Typography>Preview of your new collectible</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
