

import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";

import { routesHome, routesAdmin } from "./routes";
import Login from './containers/AuthLayout/components/Login';
import Register from './containers/AuthLayout/components/Register';
import GuestLayout from './containers/GuestLayout';
import AdminLayout from './containers/AdminLayout';


function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
         
          <GuestLayout
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminLayout
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <div>
        
        <Switch>
          

          {showLayoutHome(routesHome)}
          {showLayoutAdmin(routesAdmin)}

          <Route exact={false} path="/login" component={Login} />
          <Route exact={false} path="/register" component={Register} />
          
          {/* Trang K tim thay */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
