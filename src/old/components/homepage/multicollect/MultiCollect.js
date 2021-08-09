import react from "react";
import "./multi.scss";
import { FiArrowLeft } from "react-icons/fi";
import { Header } from "../header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import user from "../../../assets/images/site.png";
export const MultiCollect = () => {
  return (
    <>
      <Header />
      <div className="container mt-3 mb-3 newcontainer">
        <div className="px-5">
          <p className="heading">
            <FiArrowLeft className="leftarrow" />
            Manage Collectible type
          </p>
          <h4>Create Multiple Collectible</h4>
          <div className="row">
            <div className="col-md-5 col-12 mt-3 mb-3">
              <div>
                <h6>Upload File:</h6>
                <div className="filebox text-center">
                  <input type="file" id="file" />
                  <label for="file">choose a file</label>
                  <p className="pfont">PNG, GIF, WEBP, MP4 or MP3 Max 30mb</p>
                </div>
                <div className="d-flex secondbox">
                  <div className="sale">
                    <h6>Put On Sale</h6>
                    <p>You'll receive bids on this item</p>
                  </div>
                  <div className="switchmargin">
                    <label class="switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
                <div>
                  <h6>Instant sale price</h6>
                  <p>
                    Enter the price for which the item will be instantly sold
                  </p>
                  <div className="d-flex">
                    <div class="form-group">
                      <input type="text" class="form-control" id="email" />
                    </div>
                    <div class="form-group pl-2">
                      {/* <label for="sel1"></label> */}
                      <select class="form-control" id="sel1">
                        <option>BNB</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h6>Choose collection</h6>
                  <div className="imgbox">
                    <img src={user} alt="user" className="imgsize" />
                    <p>
                      <b>JGNNFT</b>
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <h6>Name</h6>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="usr"
                      placeholder="e.g. redeemable Cards with logo"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <h6>
                    Description<span className="optional"> (Optional)</span>
                  </h6>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="usr"
                      placeholder="e.g. After Parchasing you'll able to get real cards"
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="mt-3">
                    <h6>Royalties</h6>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="usr"
                        placeholder="10 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; % "
                      />
                    </div>
                    <p className="textgray">Suggested 10%, 20%, 30%</p>
                  </div>
                  <div className="mt-3 ml-3">
                    <h6>Number of copies</h6>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="usr"
                        placeholder="e.g. 10"
                      />
                    </div>
                    <p className="textgray">Amount of Tokens</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="mt-3">
                    <h6>
                      Properties<span className="optional"> (Optional)</span>
                    </h6>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="usr"
                        placeholder="e.g. Size"
                      />
                    </div>
                  </div>
                  <div className="mt-3 ml-3">
                    <div class="form-group pt-4">
                      <input
                        type="text"
                        class="form-control"
                        id="usr"
                        placeholder="e.g. M"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12 mt-3 mb-3">
              <h6>Preview</h6>
              <div className="fileboxright text-center mt-3">
                <p>Preview of your new Collectible </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
