import FavoriteList from "./favorites/FavoriteList";

function Favorites(stations: Object) {
    return(
    <div><h1>Favorites</h1>
        <FavoriteList stations={stations} /></div>)
}

export default Favorites;