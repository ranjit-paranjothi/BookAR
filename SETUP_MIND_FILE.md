# Create Your mindAR .mind File

## Step 1: Prepare Your Target Image

You need a **high-contrast image with distinctive features**. Good options:
- Company logo
- Photo with varied textures
- Poster with patterns
- Magazine cover
- QR code + design
- Any image with unique features

**Requirements:**
- ✅ Minimum 200x200 pixels
- ✅ High contrast & clear details
- ✅ Lots of texture/patterns
- ❌ Avoid plain solid colors
- ❌ Avoid simple shapes alone

## Step 2: Go to mindAR Creator

1. Visit: **https://creator.mind-ar.com/**
2. Click **"Create"** button
3. Upload your chosen image

## Step 3: Download .mind File

1. Wait for processing (usually 10-30 seconds)
2. When complete, download the file
3. Name should be something like `targets.mind`

## Step 4: Add to Your Project

### Option A: Via File System
1. On your Mac, save the `.mind` file to:
   ```
   /Users/ranjit/tech/AR/assets/target-images/targets.mind
   ```
2. Dev server automatically reloads!

### Option B: Via Terminal
```bash
# Replace PATH_TO_FILE with actual path to your downloaded targets.mind
cp PATH_TO_FILE /Users/ranjit/tech/AR/assets/target-images/targets.mind
```

## Step 5: Test It!

1. Keep dev server running: `npm start`
2. Open on your phone: `http://YOUR_MAC_IP:8080`
3. Point camera at your **physical target image** (printed or on screen)
4. You should see the AR content!

---

## Need a Quick Test Image?

If you don't have an image ready, try one of these:
- Print this QR code: https://www.qr-code-generator.com
- Use your favorite logo (Company, Brand, etc.)
- Take a screenshot of this page and use it as target
- Use a magazine cover

**Pro Tip:** Test targets should have:
- Patterns ✓
- Sharp edges ✓
- Varied colors ✓
- Not too simple ✓

---

## Troubleshooting

**"Target not detected"**
- Ensure good lighting on the physical target
- Target image needs more texture/features
- Create a new `.mind` file with a different image

**Still having issues?**
Check [mindAR Docs](https://docs.mind-ar.com)
