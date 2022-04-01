var myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');
myHeaders.append('Authorization', 'Bearer R0vi6WY1uFj8VdmvyGWqoysJBPsVBt2k2ML5juj_bMRtjI7K8zs');

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch('https://api.pandascore.co/leagues', requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    result
      .map(({ image_url }) => image_url)
      .forEach((url) => {
        let img = document.createElement('img');
        img.src = url;
        var src = document.getElementById('png');
        src.appendChild(img);
      });
  })
  .catch((error) => console.log('error', error));
