import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import CharactersContainer from './components/CharactersContainer';
import Episodes from './pages/Episodes';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={CharactersContainer} />
            <Route exact path="/Episodes" component={Episodes} />
        </Switch>
    );
}

export default Routes;