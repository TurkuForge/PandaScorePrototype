var myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');
myHeaders.append('Authorization', 'Bearer R0vi6WY1uFj8VdmvyGWqoysJBPsVBt2k2ML5juj_bMRtjI7K8zs');

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch('https://api.pandascore.co/leagues', requestOptions)
  .then((response) => response.text())
  .then((result) => console.log('Success', result))
  .catch((error) => console.log('error', error));
