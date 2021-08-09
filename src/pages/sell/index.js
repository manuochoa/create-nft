import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  getNFTBalance,
  NFTInfo,
} from "blockchain/blockchain-functions/functions";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./index.scss";
import Slider from "@material-ui/core/Slider";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

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

export default function SellPage(props) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [balanceNFT, setBalanceNFT] = useState([]);
  const [NFTinfo, setNFTinfo] = useState({
    name: "",
    location: "",
    description: "",
    type: "",
    URI: "",
    Hash: "",
    amount: "",
    contract_type: "",
    token_address: "",
    token_id: "",
  });

  const getNFTs = async () => {
    const result = await getNFTBalance();
    setBalanceNFT(result);
    console.log(result);
  };

  const handleSelectChange = (nftInfo) => {
    setIsLoading(true);
    let result = JSON.parse(nftInfo);
    let data = JSON.parse(result.token_uri);
    setNFTinfo({ ...result, ...data });
    setIsLoading(false);
  };

  useEffect(() => {
    if (props.location.props) {
      setNFTinfo(props.location.props);
    }
  }, []);

  useEffect(() => {
    getNFTs();
  }, []);

  useEffect(() => {}, [NFTinfo]);

  return (
    <Paper className="form_content">
      <Typography variant="h5">Trade Travel Assets</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4} className="img_column">
          <Box
            style={{
              width: "300px",
              height: "300px",
              display: "grid",
              placeItems: "center",
            }}
          >
            {isLoading ? (
              <CircularProgress />
            ) : (
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                src={NFTinfo.URI}
                alt={NFTinfo.URI}
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Grid container>
            <Grid xs={12} lg={6} className="column">
              <form className={classes.root} noValidate autoComplete="off">
                <FormControl variant="outlined" className="select_feild">
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Asset to Sell
                  </InputLabel>
                  <Select
                    native
                    value="Hola"
                    onChange={(e) => handleSelectChange(e.target.value)}
                    inputProps={{}}
                  >
                    <option value="Select NFT to sell" />
                    {balanceNFT.map((nft) => {
                      const { token_address, token_id, token_uri } = nft;
                      const data = JSON.parse(token_uri);
                      return (
                        <option
                          key={`${token_address}${token_id}`}
                          value={JSON.stringify(nft)}
                        >{`${data.location} - ${data.name}`}</option>
                      );
                    })}
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  style={{ marginBottom: "15px" }}
                  value={`Units available to sell: ${NFTinfo.amount}`}
                  variant="outlined"
                  className="text_feild"
                  placeholder="Price Per Unit for Sale Now in TRVL"
                />

                {/* <Slider
                  defaultValue={NFTinfo.amount}
                  step={1}
                  max={NFTinfo.amount}
                  color="secondary"
                  valueLabelDisplay="on"
                /> */}
                <TextField
                  fullWidth
                  InputProps={{}}
                  variant="outlined"
                  className="text_feild"
                  placeholder="Price Per Unit for Sale Now in TRVL"
                />
                <TextField
                  fullWidth
                  InputProps={{}}
                  variant="outlined"
                  className="text_feild"
                  placeholder="Minimum Bid Price Per Unit in TRVL"
                />
                <TextareaAutosize
                  aria-label="minimum height"
                  className="textarea_feild"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={NFTinfo.description}
                  placeholder="Description and Comments"
                />
              </form>
              <FormControl variant="outlined" className="select_feild">
                <InputLabel htmlFor="outlined-age-native-simple">
                  Select Tags
                </InputLabel>
                <Select
                  native
                  inputProps={{
                    name: "age",
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
                onClick={() => console.log(NFTinfo)}
              >
                SUBMIT FOR SALE
              </Button>
            </Grid>
            <Grid xs={12} lg={6} className="column">
              <Typography variant="h6">TRVL to USD Calculator</Typography>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  fullWidth
                  variant="outlined"
                  className="text_feild"
                  placeholder="Amount in TRVL"
                />
                <TextField
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
