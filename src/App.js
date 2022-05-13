import MiniDrawer from "./Component/Layout/Layout";
import React from "react";
import { Switch } from "react-router-dom";
import reactRouterDom from "react-router-dom";
import { Route } from "react-router-dom";
import Medicine from "./Container/Medicine";
import Doctor from "./Container/Doctor";
import User from "./Container/User";


function App() {
  return (
   <>
   <MiniDrawer>
     <Switch>
       <Route path={'/Medicine'} exact component={Medicine}/>
       <Route path={'/Doctor'} exact component={Doctor} />
       <Route path={'/User'} exact component={User} />
     </Switch>
   </MiniDrawer>
   </>

  
  );
}

export default App;
