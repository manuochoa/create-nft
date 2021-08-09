import React, { useEffect, useState } from "react";
import { NFTInfo } from "blockchain/blockchain-functions/functions";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function NFTCard({ props }) {
  const { amount, contract_type, token_address, token_id, token_uri } = props;
  const [NFTinfo, setNFTinfo] = useState({
    name: "",
    location: "",
    description: "",
    type: "",
    URI: "",
    Hash: "",
  });

  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
  });

  const classes = useStyles();

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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          alt="Contemplative Reptile"
          height="140"
          image={NFTinfo.URI}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {NFTinfo.location}
          </Typography>
          <Typography color="textSecondary" variant="h5" component="h5">
            {NFTinfo.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {NFTinfo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link
          to={{
            pathname: "/sell",
            props: {
              ...NFTinfo,
              amount,
              contract_type,
              token_address,
              token_id,
            },
          }}
        >
          <Button size="small" color="primary">
            Sell
          </Button>
        </Link>
        <Button size="small" color="primary">
          Trade
        </Button>
      </CardActions>
    </Card>
  );
}

export default NFTCard;
