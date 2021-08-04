import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import Main from './Main';
import Abo from './Abo';
import Cardser from './Cardser';
import Cont from './Cont';
import Nav from './Nav';

const Home = () => {
    return(
        <>
           <Nav/>
           <Switch>
               <Route exact path="/" component={Main} />
               <Route path="/about" component={Abo} />
               <Route path="/service" component={Cardser} />
               <Route path="/contact" component={Cont} />
               <Redirect to="/" ></Redirect>
           </Switch>
        </>
    )
}

export default Home;