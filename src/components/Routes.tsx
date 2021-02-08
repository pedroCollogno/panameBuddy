import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Favorites from "./Favorites";
import MapContainer from "./MapContainer";

function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path="/favorites" component={Favorites} />
                <Route path="/" component={MapContainer} />
            </Switch>
        </Router>
    )

}

export default Routes;