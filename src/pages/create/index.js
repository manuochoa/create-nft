import React, { useState } from "react";
import {
  uploadFile,
  createMultiNFT,
} from "blockchain/blockchain-functions/functions";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./form.scss";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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

export default function MultiNFT() {
  const classes = useStyles();
  const [NFTDetails, setNFTDetails] = useState({
    name: "",
    location: "",
    amount: "",
    description: "",
    type: "",
    URI: "",
    Hash: "",
  });
  const [fileUploaded, setFileUploaded] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (e) => {
    setIsUploading(true);
    let result = await uploadFile(e.target.files[0]);
    setFileUploaded(result);
    setNFTDetails({
      ...NFTDetails,
      URI: result._ipfs,
      Hash: result._hash,
      type: result.type,
    });
    setIsUploading(false);
  };

  const handleCreate = async () => {
    let result = await createMultiNFT(NFTDetails);
    console.log(NFTDetails);
  };
  return (
    <Paper className="form_content">
      <Typography variant="h5">Create Multi NFT - BEP-1155</Typography>
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
            {fileUploaded?.type.includes("image") && (
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                src={fileUploaded._ipfs}
                alt={fileUploaded._ipfs}
              />
            )}

            {(fileUploaded?.type.includes("video") ||
              fileUploaded?.type.includes("audio")) && (
              <video
                style={{ "max-width": "100%", "max-height": "100%" }}
                controls
                src={fileUploaded._ipfs}
              />
            )}
            {!fileUploaded && isUploading && <CircularProgress />}
            {!fileUploaded && !isUploading && <h3>Upload Your File</h3>}
          </Box>
          <br />
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className="darkbtn"
          >
            <label>
              Upload
              <input
                onChange={(e) => handleUpload(e)}
                type="file"
                style={{ display: "none" }}
              />
            </label>
          </Button>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Grid container>
            <Grid xs={12} lg={6} className="column">
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  fullWidth
                  variant="outlined"
                  className="text_feild"
                  placeholder="Asset Name"
                  value={NFTDetails.name}
                  onChange={(e) =>
                    setNFTDetails({ ...NFTDetails, name: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  className="text_feild"
                  placeholder="Asset Location"
                  value={NFTDetails.location}
                  onChange={(e) =>
                    setNFTDetails({ ...NFTDetails, location: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  className="text_feild"
                  placeholder="Amount of Tokens"
                  type="number"
                  value={NFTDetails.amount}
                  onChange={(e) =>
                    setNFTDetails({ ...NFTDetails, amount: e.target.value })
                  }
                />

                <TextareaAutosize
                  aria-label="minimum height"
                  className="textarea_feild"
                  minRows={5}
                  placeholder="Description and Comments"
                  value={NFTDetails.description}
                  onChange={(e) =>
                    setNFTDetails({
                      ...NFTDetails,
                      description: e.target.value,
                    })
                  }
                />
              </form>
              <FormControl variant="outlined" className="select_feild">
                <FormControlLabel
                  control={
                    <Switch
                    // checked={checked} onChange={toggleChecked}
                    />
                  }
                  label="Put on Sale"
                />
              </FormControl>
              <br />

              <Button
                variant="contained"
                size="medium"
                color="primary"
                className="darkbtn"
                onClick={handleCreate}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
