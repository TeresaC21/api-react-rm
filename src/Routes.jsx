import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import CharactersContainer from './components/CharactersContainer';
import Episodes from './pages/Episodes';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={CharactersContainer} />
                <Route exact path="/Episodes" component={Episodes} />
            </Switch>
        </Router>
    );
}

export default Routes;