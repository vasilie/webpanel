import {useLocalStorageState} from 'react';
export function api() {}
// export const fetchUser = (token) => {
//   console.log('token', token);
//   if (token === 'valid') {
//     return {
//       isLoggedIn: true,
//       name: 'krompir',
//       role: 'Admin',
//       error: '',
//     };
//   } else {
//     return false;
//   }
// };

export const fetchLogin = (data) => {
  const {username, password} = data;

  // fetch `
  if (username == 'admin' && password == 1234) {
    return {
      name: 'Admin',
      role: 'admin',
      access_token: '2ffre55f12k1l2l4k23ogj1o2od3ee22e',
    };
  } else {
    return null;
  }
};
const fetchUser = (token) => {
  console.log('FETCHING USER');
  console.log('TOKEN', token);
  if (token == '2ffre55f12k1l2l4k23ogj1o2od3ee22e') {
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
      const access_token = JSON.parse(
        window.localStorage.getItem('access_token')
      );
      console.log('ACCESSTOKEN IN AUTH DATA', access_token);
      if (access_token) {
        return resolve(fetchUser(access_token));
      } else {
        return resolve({loading: false});
      }
    }, 300);
  });
};
