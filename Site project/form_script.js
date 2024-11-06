const form = document.getElementById('feedbackForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const level = document.getElementById('level').value;
  const message = document.getElementById('message').value;
  
  const queryString = name=${name}&email=${email}&level=${level}&message=${message};
  
  const searchQuery = https://www.bing.com/search?${queryString};
  
  window.location.href = searchQuery;
});