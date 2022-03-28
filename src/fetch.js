function myFetch (url, method, data) {
  const config = {
    method: "GET",
  };
  if (method === 'POST') {
    config.body = JSON.stringify(data)
  }
  return fetch(url, config).then(res => {
    const doc = res.json();
    if (res.ok) {
      return doc;
    } else {
      return Promise.reject(doc);
    }
  })
}

myFetch.get = (url) => {
  return myFetch(url, 'GET')
}

myFetch.post = (url, data) => {
  return myFetch(url, 'POST', data)
}

export default myFetch
