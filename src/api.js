import axios from 'axios';
const jwt_decode = require('jwt-decode');

const BASE_URL = 'http://54.246.154.117';
const PORT = 3010;

export const loginApi = (data) =>
  axios.post(`${BASE_URL}:${PORT}/admin/login`, data);

const fetchUser = (token) => {
  console.log('FETCHING USER');
  console.log('TOKEN', token);
  if (
    token ==
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTg3NzU0ODYxLCJleHAiOjE1ODc3OTgwNjF9.f2IlWNOtR86ZIjYzkFu-eqY9DWgXfNswuAp_ZJqTikg'
  ) {
    console.log('TOKEN IS GOOD');
    return {
      user: {
        name: 'Admin',
        role: 'admin',
        access_token: '2ffre55f12k1l2l4k23ogj1o2od3ee22e',
      },
      loading: false,
    };
  } else {
    console.log('token not foodd');
    return null;
  }
};

export const getAuthData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // comment out this when persistent login is done

      // const access_token = JSON.parse(
      //   window.localStorage.getItem('access_token')
      // );
      // console.log('ACCESSTOKEN IN AUTH DATA', access_token);
      // if (access_token) {
      //   return resolve(fetchUser(access_token));
      // } else {
      //   return resolve({loading: false});
      // }

      return resolve({
        user: {
          name: 'Admin',
          role: 'admin',
          access_token: '2ffre55f12k1l2l4k23ogj1o2od3ee22e',
        },
        loading: false,
      });
    }, 300);
  });
};
