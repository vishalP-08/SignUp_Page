const apiKey = 'Jv9jjrRErdCu3qjEjyVxULWgUZpOuOZgfzv0SSfj';  // Replace with your NASA API key

function getCurrentImageOfTheDay() {
  const currentDate = new Date().toISOString().split("T")[0];
  getImageOfTheDay(currentDate);
}

function getImageOfTheDay(date) {
  const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayImage(data);
      saveSearch(date);
      addSearchToHistory(date);
    })
    .catch(error => console.error('Error fetching data:', error));
}

function displayImage(data) {
  const imageContainer = document.getElementById('current-image-container');
  imageContainer.innerHTML = `
    <h2>${data.title}</h2>
    <img src="${data.url}" alt="${data.title}">
    <p>${data.explanation}</p>
  `;
}

function saveSearch(date) {
  let searches = JSON.parse(localStorage.getItem('searches')) || [];
  searches.push(date);
  localStorage.setItem('searches', JSON.stringify(searches));
}

function addSearchToHistory(date) {
  const searchHistory = document.getElementById('search-history');
  const listItem = document.createElement('li');
  listItem.textContent = date;

  listItem.addEventListener('click', () => {
    getImageOfTheDay(date);
  });

  searchHistory.appendChild(listItem);
}

document.getElementById('search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const date = document.getElementById('search-input').value;
  getImageOfTheDay(date);
});

document.addEventListener('DOMContentLoaded', () => {
  getCurrentImageOfTheDay();
  const savedSearches = JSON.parse(localStorage.getItem('searches')) || [];
  savedSearches.forEach(date => addSearchToHistory(date));
});
