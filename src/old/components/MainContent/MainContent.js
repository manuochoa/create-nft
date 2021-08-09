import { Switch, Route } from "react-router-dom";
import FormContent from "../formcontent/FormContent";
import SellForm from "../formcontent/SellForm";
import P2pMarketpalce from "../formcontent/P2pMarketpalce";
import AssetsSell from "../formcontent/AssetsSell";

const MainContent = () => {
  return (
    <Switch>
      <Route path="/" exact component={FormContent} />
      <Route path="/sell" component={SellForm} />
      <Route path="/assets-sell" component={AssetsSell} />
      <Route path="/p2pmarketplace" component={P2pMarketpalce} />
    </Switch>
  );
};

export default MainContent;
