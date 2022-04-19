import { FETCH_TITLES } from "./types";


export const getTitlesR = () => async (dispatch) => {
    const res = await fetch("http://localhost:5000/titles")
    const titles = await res.json()
    console.log("actiune: ", titles)
    dispatch({
        type: FETCH_TITLES,
        payload: {
            titles:[...titles]
        }
    })
}