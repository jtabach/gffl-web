export function getRequest(url) {
  return fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
}
export function postRequest(url, data) {
  return fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
}
