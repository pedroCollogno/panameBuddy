import axios, { AxiosResponse } from "axios";

const datasetName = "stationnement-voie-publique-emplacements";
const requiredFieldsQuery =
	"&facet=regpri&facet=regpar&facet=typsta&facet=arrond&facet=zoneres&facet=tar&facet=locsta&facet=parite&facet=signhor&facet=signvert&facet=confsign&facet=typemob&facet=zoneasp&facet=stv&facet=prefet&facet=mtlast_edit_date_field&facet=datereleve";
const targetTransport = "V%C3%A9los";

const API_URL = `http://opendata.paris.fr/api/records/1.0/search/?dataset=${datasetName}&q=${requiredFieldsQuery}&refine.regpar=${targetTransport}`;

export const getParkingSpots = () => {
	return axios.get<Object>(API_URL).then((response: AxiosResponse) => {
		return response.data;
	});
};
