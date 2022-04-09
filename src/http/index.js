var myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');
myHeaders.append('Authorization', 'Bearer ' + window.PANDA_SCORE_API_TOKEN);

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  redirect: 'follow'
};

export const http = async (url) => {
  return await fetch(url, requestOptions).then((response) => response.json());
};
