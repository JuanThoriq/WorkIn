const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let name = document.getElementById('signUpName').value;
  let email = document.getElementById('signUpEmail').value;
  let password = document.getElementById('signUpPassword').value;
  
  if (name.length < 5) {
      alert('Name must be at least 5 characters long.');
      return;
  }
  if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
  }
  if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
  }
  
  window.location.href = '../Job Insight/JobInsight1.html';
});

document.getElementById('signInForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let email = document.getElementById('signInEmail').value;
  let password = document.getElementById('signInPassword').value;
  
  if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
  }
  if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
  }
  
  // Redirect to JobInsight1.html
  window.location.href = '../Job Insight/JobInsight1.html';
});