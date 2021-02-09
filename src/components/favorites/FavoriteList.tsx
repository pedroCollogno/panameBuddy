import { Interface } from "readline";

import {FavoriteStation} from "../../utils/interfaces";
import FavoriteItem from "./FavoriteItem";

function FavoriteList(favorites: Array<FavoriteStation>) {
    return(
        <div>
            {favorites.map(station => <FavoriteItem station={station} />)}
        </div>
    )
}

export default FavoriteList;