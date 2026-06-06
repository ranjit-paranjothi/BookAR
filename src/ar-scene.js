/**
 * AR Scene Setup and Management
 * Handles interactions and event listeners for the AR experience
 */

document.addEventListener('DOMContentLoaded', () => {
  initializeARScene();
});

function initializeARScene() {
  const scene = document.querySelector('a-scene');
  
  if (!scene) {
    console.error('A-Frame scene not found');
    return;
  }

  // Listen for target detection
  document.addEventListener('targetFound', (event) => {
    console.log('Target found!', event);
    // Add custom logic here
  });

  document.addEventListener('targetLost', (event) => {
    console.log('Target lost!', event);
    // Add custom logic here
  });

  // Setup scene interactions
  setupInteractions();
  
  console.log('AR scene initialized');
}

function setupInteractions() {
  // Get interactive elements
  const box = document.querySelector('a-box');
  
  if (box) {
    // Click to change color
    box.addEventListener('click', () => {
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      box.setAttribute('color', randomColor);
    });
  }

  console.log('Interactions setup complete');
}

export { initializeARScene, setupInteractions };
