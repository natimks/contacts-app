const URL = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';

async function getContacts() {
  return await fetch(URL).then((response) => {
    return response.json();
  });
}

export default getContacts;
