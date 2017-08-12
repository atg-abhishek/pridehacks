export function call(endpoint, structure) {
  return fetch(`https://protected-hollows-68287.herokuapp.com/${endpoint}`)
  .then(response => {
    return response.json();
  })
  .then(res => {
    if (res.status === 'ok') {
      structure.dataSource.data = res.data;

      return structure;
    }
  });
}
