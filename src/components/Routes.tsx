import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Favorites from "./Favorites";
import MapContainer from "./MapContainer";
import Navbar from "./Navbar";

function Routes() {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/favorites" component={Favorites} />
                <Route path="/" component={MapContainer} />
            </Switch>
        </Router>
    )

}

export default Routes;