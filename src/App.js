import React from 'react';
import {Route ,BrowserRouter,Switch as Router, Switch} from 'react-router-dom';

import A from "./user/A/index";
import B from "./user/B/index";
import C from "./user/C/index";
import Nav from "./core/Nav/index";

class App extends React.Component{
render(){
return <BrowserRouter basename={'https:localhost/react'}>
<div>
    <Nav/>
    <Switch>
    <Route path="/" exact component={A}/>
    <Route path="/home" exact component={A}/>
    <Route path="/about" exact component={B} />
    <Route path="/contact" component={C} />
    </Switch>
</div>

</BrowserRouter>
  
} 
}
export default App;
