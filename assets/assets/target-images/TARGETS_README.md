# mindAR Target Configuration Guide

## Creating Your `.mind` File

The `.mind` file contains training data for image-based AR tracking. Follow these steps:

### Step 1: Prepare Your Target Image
- Use a high-contrast image with distinctive features (logos, patterns, photos with varied content)
- Minimum size: 200x200 pixels
- Avoid uniform colors or simple patterns
- Supported formats: JPG, PNG

### Step 2: Create the `.mind` File
Visit the [mindAR Creator Tool](https://creator.mind-ar.com/):

1. Click "Create"
2. Upload your target image
3. The tool will generate a `.mind` file
4. Download and save it to `assets/target-images/targets.mind`

### Step 3: Update HTML Configuration
Update the `imageTargetSrc` in `public/index.html`:

```html
<a-scene mindar-image="imageTargetSrc: assets/target-images/targets.mind;">
  ...
</a-scene>
```

### Step 4: Update Target Index
If using multiple targets, update the `targetIndex` in your entities:

```html
<a-entity mindar-image-target="targetIndex: 0">
  <!-- AR content for first target -->
</a-entity>

<a-entity mindar-image-target="targetIndex: 1">
  <!-- AR content for second target -->
</a-entity>
```

## Best Practices

### Image Selection
- ✅ Use images with texture and variation
- ✅ Include natural features (faces, landscapes, objects)
- ❌ Avoid plain colored backgrounds
- ❌ Avoid simple geometric shapes alone
- ❌ Avoid text-heavy images

### Testing
1. Test in good lighting conditions
2. Test with actual camera from various angles
3. Ensure the physical target image has good contrast
4. Multiple targets should have unique features

### Performance
- Limit to 5-10 targets per scene for better performance
- Optimize event listeners in `ar-scene.js`
- Use compressed assets

## Troubleshooting

**Targets not detected:**
- Create new `.mind` file with better featured image
- Test target image has sufficient contrast
- Ensure good lighting during tracking

**Performance issues:**
- Reduce number of targets
- Optimize 3D model complexity
- Close unnecessary browser tabs

## Multi-Target Setup

To track multiple different images:

1. Create separate `.mind` files for each image
2. Combine them into one file using mindAR Creator
3. Index each target (0, 1, 2, etc.)
4. Create separate entities for each target content

```html
<a-entity mindar-image-target="targetIndex: 0">
  <!-- Content for target 1 -->
</a-entity>

<a-entity mindar-image-target="targetIndex: 1">
  <!-- Content for target 2 -->
</a-entity>
```

## Resources

- [mindAR Creator](https://creator.mind-ar.com)
- [mindAR Documentation](https://docs.mind-ar.com)
- [A-Frame mindAR Components](https://github.com/hiukim/mind-ar-js)
