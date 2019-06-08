export const FETCH_DATA_SUCESS = 'FETCH_DATA_SUCESS';
import mockData from 'database/mockData';
const shortid = require('shortid');

export function fetchData() {
    return (dispatch) => {
        const data = mockData.filter((location) => {
            return location.pincode;
        }).map((location) => {
            const newData = Object.assign({}, location);
            newData.id = shortid.generate();
            return newData;
        });
        dispatch({
            type: FETCH_DATA_SUCESS,
            data: data
        });
    }
};