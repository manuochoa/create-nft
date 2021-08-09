import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NFTInfo } from "blockchain/blockchain-functions/functions";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Grid from "@material-ui/core/Grid";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";

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

function NFTcard({ props }) {
  const classes = useStyles();

  const { amount, contract_type, token_address, token_id, token_uri } = props;
  const [NFTinfo, setNFTinfo] = useState({
    name: "",
    location: "",
    description: "",
    type: "",
    URI: "",
    Hash: "",
  });

  const getNFTInfo = async () => {
    let result = await NFTInfo(token_uri);

    try {
      const { name, location, description, type, URI, Hash } = result;
      setNFTinfo({
        name,
        location,
        description,
        type,
        URI,
        Hash,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(props);
    getNFTInfo();
  }, []);
  return (
    <Grid item xs={12} lg={3} className="img_column_market">
      <Card className={classes.root}>
        <Link
          to={{
            pathname: "/assetsell",
            props: {
              ...NFTinfo,
              amount,
              contract_type,
              token_address,
              token_id,
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={NFTinfo.URI}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {NFTinfo.location}
              </Typography>
              <Typography variant="h6">55 TVRL ($333 UDD)</Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
}

export default NFTcard;
