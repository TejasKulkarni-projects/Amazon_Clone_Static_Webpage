const box = document.getElementById('box');

// Example: Changing a transition when clicking the product
box.addEventListener('click', () => {
  box.style.transition = 'background-color 0.5s ease-in-out';
  box.style.backgroundColor = 'lightblue';
});