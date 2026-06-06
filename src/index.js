// Main entry point for AR application
import './ar-scene';
import './utils';

console.log('AR Application loaded!');

// Initialize AR Scene
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  
  // Get the A-Frame scene
  const scene = document.querySelector('a-scene');
  
  if (scene) {
    scene.addEventListener('loaded', () => {
      console.log('A-Frame scene loaded');
    });
  }
});
