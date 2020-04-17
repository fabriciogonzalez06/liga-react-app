import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Liga from './components/liga/liga';
import Calendario from './components/calendario/calendario';
import P404 from './components/common/p404/p404';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Liga} />
            <Route path='/liga' component={Liga} />
            <Route path='/calendario/:equipo' component={Calendario} />
            <Route path='/calendarios'  component={Calendario} />
            <Route component={P404} />
        </Switch>
    </BrowserRouter>
)

export default Router;