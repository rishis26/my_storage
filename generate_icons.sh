#!/bin/bash

# Script to generate Android app icons from a source image
# Usage: ./generate_icons.sh

SOURCE_ICON="assets/icon.png"
ANDROID_RES="android/app/src/main/res"

echo "🎨 Generating Android app icons from $SOURCE_ICON"
echo ""

# Check if source icon exists
if [ ! -f "$SOURCE_ICON" ]; then
    echo "❌ Error: Source icon not found at $SOURCE_ICON"
    exit 1
fi

# Create temporary directory
mkdir -p temp_icons

# Generate icons for each density
echo "📱 Generating mipmap-mdpi (48x48)..."
sips -z 48 48 "$SOURCE_ICON" --out "temp_icons/ic_launcher_mdpi.png" > /dev/null 2>&1
cp "temp_icons/ic_launcher_mdpi.png" "$ANDROID_RES/mipmap-mdpi/ic_launcher.png"
cp "temp_icons/ic_launcher_mdpi.png" "$ANDROID_RES/mipmap-mdpi/ic_launcher_round.png"

echo "📱 Generating mipmap-hdpi (72x72)..."
sips -z 72 72 "$SOURCE_ICON" --out "temp_icons/ic_launcher_hdpi.png" > /dev/null 2>&1
cp "temp_icons/ic_launcher_hdpi.png" "$ANDROID_RES/mipmap-hdpi/ic_launcher.png"
cp "temp_icons/ic_launcher_hdpi.png" "$ANDROID_RES/mipmap-hdpi/ic_launcher_round.png"

echo "📱 Generating mipmap-xhdpi (96x96)..."
sips -z 96 96 "$SOURCE_ICON" --out "temp_icons/ic_launcher_xhdpi.png" > /dev/null 2>&1
cp "temp_icons/ic_launcher_xhdpi.png" "$ANDROID_RES/mipmap-xhdpi/ic_launcher.png"
cp "temp_icons/ic_launcher_xhdpi.png" "$ANDROID_RES/mipmap-xhdpi/ic_launcher_round.png"

echo "📱 Generating mipmap-xxhdpi (144x144)..."
sips -z 144 144 "$SOURCE_ICON" --out "temp_icons/ic_launcher_xxhdpi.png" > /dev/null 2>&1
cp "temp_icons/ic_launcher_xxhdpi.png" "$ANDROID_RES/mipmap-xxhdpi/ic_launcher.png"
cp "temp_icons/ic_launcher_xxhdpi.png" "$ANDROID_RES/mipmap-xxhdpi/ic_launcher_round.png"

echo "📱 Generating mipmap-xxxhdpi (192x192)..."
sips -z 192 192 "$SOURCE_ICON" --out "temp_icons/ic_launcher_xxxhdpi.png" > /dev/null 2>&1
cp "temp_icons/ic_launcher_xxxhdpi.png" "$ANDROID_RES/mipmap-xxxhdpi/ic_launcher.png"
cp "temp_icons/ic_launcher_xxxhdpi.png" "$ANDROID_RES/mipmap-xxxhdpi/ic_launcher_round.png"

# Clean up
rm -rf temp_icons

echo ""
echo "✅ All icons generated successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Clean the build: cd android && ./gradlew clean && cd .."
echo "2. Rebuild the app: npx react-native run-android"
echo "3. Check your phone's home screen for the new icon!"
echo ""
