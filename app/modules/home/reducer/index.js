import { FETCH_DATA_SUCESS } from '../actions/fetchData';
export const initialState = {
  data: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_SUCESS:
            const data = action.data;
            return { data };
        default:
            return state;
    }
}
