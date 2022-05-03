const headers = new Headers();
headers.append('Accept', 'application/json');
// eslint-disable-next-line no-undef
headers.append('Authorization', `Bearer ${PANDA_SCORE_API_TOKEN}`);

const requestOptions = {
  method: 'GET',
  headers,
  redirect: 'follow'
};

const CACHE = {};

export const http = async (path) => {
  // eslint-disable-next-line no-undef
  const url = `${PANDA_SCORE_API_URL}/${path}`;
  if (url in CACHE) {
    return Promise.resolve(CACHE[url]);
  }
  console.log(url);
  return await fetch(url, requestOptions).then(async (response) => {
    CACHE[url] = await response.json();
    return CACHE[url];
  });
};
