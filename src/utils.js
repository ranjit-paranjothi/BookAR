/**
 * Utility functions for AR application
 */

/**
 * Convert image to grayscale for mindAR target
 * @param {HTMLImageElement} image - Input image
 * @returns {ImageData} Grayscale image data
 */
export function convertToGrayscale(image) {
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
    data[i] = gray;      // R
    data[i + 1] = gray;  // G
    data[i + 2] = gray;  // B
    // data[i + 3] = alpha (unchanged)
  }
  
  return imageData;
}

/**
 * Load 3D model
 * @param {string} src - Path to model file
 * @returns {Promise<Object>} Loaded model
 */
export async function loadModel(src) {
  try {
    const response = await fetch(src);
    if (!response.ok) throw new Error(`Failed to load model: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Error loading model:', error);
    return null;
  }
}

/**
 * Get camera permission
 * @returns {Promise<MediaStream>} Camera stream
 */
export async function getCameraPermission() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
    });
    return stream;
  } catch (error) {
    console.error('Camera permission denied:', error);
    return null;
  }
}

/**
 * Check browser AR support
 * @returns {boolean} True if AR is supported
 */
export function checkARSupport() {
  return (
    navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia &&
    'WebGL' in window
  );
}

console.log('Utilities loaded');
