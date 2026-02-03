# How to Change App Icon in React Native

## 📱 App Icon vs In-App Logo

**App Icon** = The icon on your phone's home screen (launcher icon)
**In-App Logo** = Logo shown inside the app (what we just added)

## 🎯 Steps to Change App Icon

### For Android:

1. **Prepare your icon images** in these sizes:

   - `mipmap-mdpi`: 48x48px
   - `mipmap-hdpi`: 72x72px
   - `mipmap-xhdpi`: 96x96px
   - `mipmap-xxhdpi`: 144x144px
   - `mipmap-xxxhdpi`: 192x192px

2. **Replace files in these folders:**

   ```
   android/app/src/main/res/
   ├── mipmap-mdpi/ic_launcher.png
   ├── mipmap-hdpi/ic_launcher.png
   ├── mipmap-xhdpi/ic_launcher.png
   ├── mipmap-xxhdpi/ic_launcher.png
   └── mipmap-xxxhdpi/ic_launcher.png
   ```

3. **Also replace round icons** (if you want):
   ```
   android/app/src/main/res/
   ├── mipmap-mdpi/ic_launcher_round.png
   ├── mipmap-hdpi/ic_launcher_round.png
   ├── mipmap-xhdpi/ic_launcher_round.png
   ├── mipmap-xxhdpi/ic_launcher_round.png
   └── mipmap-xxxhdpi/ic_launcher_round.png
   ```

### For iOS:

1. **Open Xcode** (on Mac)
2. Navigate to: `ios/YourAppName/Images.xcassets/AppIcon.appiconset/`
3. Replace all icon files with your new icons

**OR** use the Xcode GUI:

- Open `ios/YourAppName.xcworkspace` in Xcode
- Click on Images.xcassets
- Click on AppIcon
- Drag and drop your icons into the appropriate slots

## 🛠️ Easy Method: Use Icon Generator Tools

### Option 1: Online Icon Generator (Recommended)

Use these free tools to generate all sizes automatically:

1. **App Icon Generator**: https://www.appicon.co/

   - Upload one 1024x1024px image
   - Downloads all required sizes for Android & iOS

2. **MakeAppIcon**: https://makeappicon.com/

   - Upload one image
   - Get all sizes instantly

3. **Icon Kitchen** (Android only): https://icon.kitchen/

### Option 2: Use React Native Asset Tool

Install the tool:

```bash
npm install -g react-native-asset
```

Create a folder structure:

```
assets/
  └── icon.png  (1024x1024px)
```

Add to `react-native.config.js`:

```javascript
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets'],
};
```

Run:

```bash
react-native-asset
```

## 📋 Step-by-Step Process

### 1. Create Your Icon

- Size: 1024x1024px (square)
- Format: PNG with transparency
- Design: Simple, recognizable at small sizes
- No text (hard to read when small)

### 2. Generate All Sizes

- Use appicon.co or makeappicon.com
- Upload your 1024x1024px icon
- Download the generated package

### 3. Replace Android Icons

```bash
# Extract downloaded files to:
android/app/src/main/res/
```

### 4. Replace iOS Icons (if applicable)

```bash
# Extract downloaded files to:
ios/YourAppName/Images.xcassets/AppIcon.appiconset/
```

### 5. Rebuild Your App

```bash
# For Android
cd android
./gradlew clean
cd ..
npx react-native run-android

# For iOS (Mac only)
cd ios
pod install
cd ..
npx react-native run-ios
```

## 🎨 Icon Design Tips

✅ **DO:**

- Use simple, bold designs
- High contrast colors
- Centered composition
- Test at small sizes (48x48px)
- Use PNG format
- Include transparency if needed

❌ **DON'T:**

- Use small text
- Too many details
- Low contrast
- Use JPG (no transparency)
- Make it too complex

## 🔍 Verify Your Icon

After replacing:

1. Uninstall the old app from your device
2. Rebuild and reinstall
3. Check home screen for new icon

## 📱 Current Icon Locations

Your current icons are at:

- **Android**: `android/app/src/main/res/mipmap-*/ic_launcher.png`
- **iOS**: `ios/My_Storage/Images.xcassets/AppIcon.appiconset/` (if exists)

## 🚀 Quick Start

1. Create 1024x1024px icon
2. Go to https://www.appicon.co/
3. Upload your icon
4. Download the package
5. Replace files in `android/app/src/main/res/mipmap-*`
6. Rebuild app: `npx react-native run-android`

---

Need help? Let me know! 🎯
