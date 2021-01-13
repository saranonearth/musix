const {GET_PODCASTS} = require('./Types');
import {PODCASTS} from '../data/index';

//Faking API call

const FETCH_PODCAST = () =>
  new Promise((resolve, reject) => {
    resolve(PODCASTS);

    reject('Error while fetching podcasts');
  });

//ACTIONS

exports.getPodcasts = () => async (dispatch, getState) => {
  try {
    const podcastsResponse = await FETCH_PODCAST();

    dispatch({type: GET_PODCASTS, payload: podcastsResponse});
  } catch (error) {
    console.log(error);
  }
};
