# AR Application with mindAR & A-Frame

A web-based augmented reality application using mindAR for image tracking and A-Frame for 3D visualization.

## Features

- 📷 Image-based AR tracking with mindAR
- 🎯 A-Frame 3D scene management
- ⚡ Webpack bundling and dev server
- 📱 Mobile-friendly responsive design
- 🎨 Interactive 3D content

## Getting Started

### Prerequisites

- Node.js 14+ and npm
- Modern web browser with WebGL support
- Webcam/camera access

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:8080`

3. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```
├── src/
│   ├── index.js          - Main entry point
│   ├── ar-scene.js       - AR scene initialization and interactions
│   └── utils.js          - Utility functions
├── public/
│   └── index.html        - HTML template
├── assets/
│   ├── models/           - 3D models (glTF/GLB format)
│   └── target-images/    - Image targets for tracking
├── webpack.config.js     - Webpack configuration
└── package.json          - Project dependencies
```

## Configuration

### Image Targets

1. Create a `.mind` file from your target images at [mindAR creator](https://creator.mind-ar.com)
2. Place it in `assets/target-images/targets.mind`
3. Update the `imageTargetSrc` in `public/index.html`

### 3D Models

Add your 3D models (glTF/GLB format) to `assets/models/` and reference them in the A-Frame scene:

```html
<a-model-loader src="assets/models/your-model.gltf" position="0 0 0"></a-model-loader>
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Key Technologies

- **mindAR 1.2.7** - Image-based AR tracking
- **A-Frame 1.4.2** - Entity-component-based 3D framework
- **Three.js** - WebGL 3D graphics
- **Webpack 5** - Module bundler

## Troubleshooting

### Camera Not Working
- Ensure HTTPS (or localhost) for camera access
- Check browser permissions
- Verify webcam is not in use by other applications

### Targets Not Detected
- Create proper `.mind` file from your target images
- Ensure good lighting conditions
- Target image should have sufficient features (not uniform colors)

## Development Tips

- Use browser DevTools to debug AR issues
- Clear `.mind` cache if targets change
- Test on actual mobile devices for best results
- Use Chrome DevTools device emulation for initial testing

## License

MIT

## Resources

- [mindAR Documentation](https://docs.mind-ar.com)
- [A-Frame Documentation](https://aframe.io/docs)
- [mindAR Creator](https://creator.mind-ar.com)
