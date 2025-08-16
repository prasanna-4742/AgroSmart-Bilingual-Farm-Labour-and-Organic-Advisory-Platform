function toggleForm() {
  const signupForm = document.getElementById('signup-form');
  const loginForm = document.getElementById('login-form');
  const toggleText = document.querySelector('.toggle-link');
  const formTitle = document.getElementById('form-title');
  const formDesc = document.getElementById('form-desc');

  if (signupForm.classList.contains('hidden')) {
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    toggleText.textContent = 'Already have an account? Log In';
    formTitle.textContent = 'Create Your Account';
    formDesc.textContent = 'Join the platform to connect with farmers and workers!';
  } else {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    toggleText.textContent = 'Don\'t have an account? Sign Up';
    formTitle.textContent = 'Welcome Back';
    formDesc.textContent = 'Log in to your account';
  }
}
