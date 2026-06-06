# AR Video Setup

## How to Add Your Video

1. **Place your video file** in this directory (`assets/`):
   - Filename: `sample-video.mp4`
   - Format: MP4 (H.264 codec recommended)
   - Duration: Any length (will loop when target detected)
   - Resolution: 1280x720 or 640x480 recommended

2. **Supported formats:**
   - `.mp4` (MP4 video)
   - `.webm` (WebM video)
   - `.ogv` (Ogg video)

3. **To convert an existing video to MP4:**

   ```bash
   # Using ffmpeg (install with: brew install ffmpeg)
   ffmpeg -i input-video.mov -c:v libx264 -preset medium -c:a aac sample-video.mp4
   ```

4. **Quick test video creation:**

   ```bash
   # Create a 5-second blue test video
   ffmpeg -f lavfi -i color=c=blue:s=640x480:d=5 -pix_fmt yuv420p sample-video.mp4
   ```

5. **Refresh your browser** after adding the video file

## How It Works

- Video **plays automatically** when the AR target is detected
- Video **pauses** when the target is lost
- Video is displayed on a plane in the AR scene positioned at `0 0.5 -1.5`
- Video loops continuously when playing

## Customization

To change video position/size in `public/index.html`:

```html
<a-plane
  position="0 0.5 -1.5"
  rotation="0 0 0"
  scale="2 1.5 1"
  material="src: #video-screen;"
></a-plane>
```

- `position`: X Y Z coordinates (adjust to move video around)
- `scale`: Width Height Depth (change 2 and 1.5 to resize)
- `rotation`: X Y Z rotation in degrees

## Troubleshooting

If video doesn't play:

1. Check browser console (F12) for errors
2. Ensure video format is supported (MP4 recommended)
3. Make sure video file is in the correct location
4. Try a different video file to test
