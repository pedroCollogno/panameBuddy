import axios from "axios";

const API_URL = "http://opendata.paris.fr/api/records/1.0/search/?dataset=stationnement-voie-publique-emplacements&q=&facet=regpri&facet=regpar&facet=typsta&facet=arrond&facet=zoneres&facet=tar&facet=locsta&facet=parite&facet=signhor&facet=signvert&facet=confsign&facet=typemob&facet=zoneasp&facet=stv&facet=prefet&facet=mtlast_edit_date_field&facet=datereleve&refine.regpar=V%C3%A9los";

export const getParkingSpots = () => {
    return axios.get(API_URL);
}