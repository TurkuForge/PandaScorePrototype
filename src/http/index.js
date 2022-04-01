var myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');
myHeaders.append('Authorization', 'Bearer R0vi6WY1uFj8VdmvyGWqoysJBPsVBt2k2ML5juj_bMRtjI7K8zs');

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

export const http = async (url) => {
  return await fetch(url, requestOptions).then((response) => response.json());
};
