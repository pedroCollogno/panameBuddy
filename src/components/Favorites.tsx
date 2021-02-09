import {useState} from "react";
import FavoriteList from "./favorites/FavoriteList";
import {FavoriteStation} from "../utils/interfaces";
import favorites from "../favoriteStations";

function Favorites() {
    const [favoriteStations, setFavoriteStations] = useState(favorites);
    function rateStation(station: FavoriteStation, newRating: number) {
        let stationIndex: number = -1;
        for(let favoriteStation of favoriteStations) {
            if(station.name === favoriteStation.name) {
                stationIndex = favoriteStations.indexOf(favoriteStation);
                break;
            }
        }
        if(stationIndex !== -1) {
            let newStations = favoriteStations.slice();
            newStations[stationIndex].rating = newRating;
            setFavoriteStations(newStations);
        }
    }

    return(
    <div><h1>Favorites</h1>
        <FavoriteList stations={favoriteStations} rateStation={rateStation} /></div>)
}

export default Favorites;