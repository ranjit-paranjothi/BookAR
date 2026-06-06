# AR Application Setup Instructions

This is a web AR application using mindAR for image tracking and A-Frame for 3D visualization.

## Project Setup Checklist

- [x] Project structure created
- [ ] Dependencies installed
- [ ] Webpack configured
- [ ] HTML and AR scenes set up
- [ ] mindAR targets configured
- [ ] Development server running

## Technologies Used
- **mindAR**: Image-based AR tracking
- **A-Frame**: 3D scene management
- **Webpack**: Module bundling
- **Three.js**: 3D graphics (via A-Frame)

## Development Commands
- `npm install` - Install dependencies
- `npm start` - Start development server
- `npm run build` - Build for production

## Project Structure
```
src/
  ├── index.js           - Main entry point
  ├── ar-scene.js        - AR scene setup
  └── utils.js           - Utility functions
public/
  └── index.html         - Main HTML file
assets/
  ├── models/            - 3D models (glTF/GLTF)
  └── target-images/     - Tracking target images
```
