export default function requestTest(url, method, data) {
  return fetch(url, {
    method: method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
}
