import React  from "react";
import { Route } from "react-router-dom";
import NavbarHome from '../../components/NavbarHome';

function GuestTemplate(props) {
  return (
    <div >
      <NavbarHome />
      {props.children}

    </div>
  );
}

export default function GuestLayout({ Component, ...props }) {

  return (
    <Route
      {...props}
      
      render={(propsComponent) => 
        
           (
            <GuestTemplate >
              <Component 
              
              {...propsComponent} />
            </GuestTemplate>
          )
        
        }
    />
  );
}