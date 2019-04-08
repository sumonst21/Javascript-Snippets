const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

const urls = [
  'https://dog.ceo/api/breeds/list',
  'https://dog.ceo/api/breeds/image/random'
];

Promise.all(urls.map(url =>
  fetch(url)
    .then(checkStatus)                 
    .then(parseJSON)
    .catch(error => console.log('There was a problem!', error))
))
.then(data => {
  const breedList = data[0].message;
  const randomImage = data[1].message;
  
  generateOptions(breedList);
  generateImage(randomImage);
})

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function parseJSON(response) {
  return response.json();
}

function generateOptions(data) {
  const options = data.map(item => `
    <option value='${item}'>${item}</option>
  `).join('');
  select.innerHTML = options;
}

function generateImage(data) {
  const html = `
    <img src='${data}' alt>
    <p>Click to view images of ${select.value}s</p>
  `;
  card.innerHTML = html;
}

function fetchBreedImage() {
  const breed = select.value;
  const img = card.querySelector('img');
  const p = card.querySelector('p');
  
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      img.src = data.message;
      img.alt = breed;
      p.textContent = `Click to view more ${breed}s`;
    })
    .catch(error => console.log('Looks like there was a problem!', error))
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);
