async function getData() {
     const URL = 'https://api.thecatapi.com/v1/breeds';
     const data = await fetch(URL);
     return data.json();
}

export default getData;