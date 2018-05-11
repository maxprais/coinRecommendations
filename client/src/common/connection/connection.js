export class HttpConnection {

  sendHttp({ method, url, data }) {
    const requestBody = {
      method: method || 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    };

    if (data) {
      Object.assign(requestBody, {
        body: JSON.stringify(data)
      });
    }

    let isOk;
    return new Promise((resolve, reject) =>
      fetch(url, requestBody)
        .then(response => {
          isOk = response.ok;
          const responseClone = response.clone();
          return responseClone.json()
            .then(() => response.json())
            .catch(() => response.text());
        })
        .then(response => isOk
          ? resolve(response)
          : reject(response)));
  }

}