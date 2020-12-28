import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Profile from './pages/Profile';


function Routes(){
 return(
     <BrowserRouter>
            <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/profile/:login"  component={Profile} />     

            </Switch>
     </BrowserRouter>
 );
}

export default Routes;
