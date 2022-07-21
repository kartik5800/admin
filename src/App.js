// import MiniDrawer from "./Component/Layout/Layout";
import React from "react";
import { Switch } from "react-router-dom";
// import reactRouterDom from "react-router-dom";
import { Route } from "react-router-dom";
import Medicine from "./Container/Medicine";
import Doctor from "./Container/Doctor";
import User from "./Container/User";
import Layout from "./Component/Layout/Layout";
import Coustomer from "./Container/Coustomer/Coustomer";
import { Provider } from "react-redux"
import { configureStore } from "./redux/Store";
import Counter from "./Container/Counter/Counter"
import PromicesExample from "./Container/Coustomer/PromicesExample";
import UsememosExaple from "./Container/Coustomer/UsememosExaple";


function App() {
  const store = configureStore()
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Switch>
            <Route path={'/Medicine'} exact component={Medicine} />
            <Route path={'/Doctor'} exact component={Doctor} />
            <Route path={'/User'} exact component={User} />
            <Route path={'/Coustomer'} exact component={Coustomer} />
            <Route path={'/Counter'} exact component={Counter} />
            <Route path={'/PromicesExample'} exact component={PromicesExample} />
            <Route path={'/UsememosExaple'} exact component={UsememosExaple} />
            
            {/* <Counter /> */}
          </Switch>
        </Layout>
      </Provider>
    </>


  );
}

export default App;


