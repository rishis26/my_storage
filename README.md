# 📦 My Storage - Inventory Management App

A React Native mobile application for managing inventory and stock levels. Built as a learning project to understand React Native development, state management, and mobile app design patterns.

![React Native](https://img.shields.io/badge/React%20Native-0.76.6-blue)
![Platform](https://img.shields.io/badge/Platform-Android-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📱 About The Project

**My Storage** is a simple yet functional inventory management application that allows users to:

- ✅ View all inventory items with stock levels
- ✅ Filter low-stock items (< 20 units)
- ✅ Add new items to inventory
- ✅ Edit existing items
- ✅ Delete items from inventory
- ✅ Color-coded stock indicators (red for low stock, green for adequate stock)

This project was built to learn and practice:

- React Native fundamentals
- State management with React Hooks
- Component composition and reusability
- CRUD operations in mobile apps
- Styling and UI/UX design in React Native
- Android app configuration and customization

---

## 🎯 Features

### 1. **Dashboard with Tab Navigation**

- Three main tabs: All Items, Low Stock, and Create
- Clean, intuitive interface
- Real-time stock level monitoring

### 2. **Inventory Management**

- **View All Items**: See complete inventory with stock quantities
- **Low Stock Alert**: Automatically filters items below threshold (< 20 units)
- **Color Coding**:
  - 🔴 Red background for low stock items
  - 🟢 Green background for adequate stock

### 3. **CRUD Operations**

- **Create**: Add new items with name and stock quantity
- **Read**: View all items in a scrollable list
- **Update**: Edit item details inline
- **Delete**: Remove items from inventory

### 4. **Smart UI Features**

- Dynamic button text (Add/Update based on mode)
- Cancel button appears during edit mode
- Form auto-clears after submission
- Responsive layout with proper spacing

### 5. **Custom Branding**

- Custom app icon
- Footer with developer attribution
- Professional color scheme

---

## 🚀 Getting Started

### Prerequisites

Before running this project, ensure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **React Native CLI**
- **Android Studio** (for Android development)
- **JDK 17** or higher
- **Android SDK** (API Level 34 or higher)

For detailed setup instructions, visit: [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rishis26/my_storage.git
   cd My_Storage
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start Metro bundler**

   ```bash
   npm start
   ```

4. **Run on Android**

   In a new terminal:

   ```bash
   npm run android
   # OR
   npx react-native run-android
   ```

5. **Run on iOS** (macOS only)
   ```bash
   cd ios
   pod install
   cd ..
   npm run ios
   ```

---

## 📂 Project Structure

```
My_Storage/
├── android/                    # Android native code
│   └── app/src/main/res/
│       └── mipmap-*/          # App icons (all densities)
├── assets/                     # App assets
│   └── icon.png               # Source app icon (3510x3510px)
├── src/                        # Source code
│   ├── screens/               # Screen components
│   │   ├── HomeScreen.jsx     # Main dashboard with tabs
│   │   ├── AllItems.jsx       # Item list display
│   │   └── CreateScreen.jsx   # Add/Edit item form
│   └── MyStampName.jsx        # Footer component
├── App.tsx                     # Root component
├── generate_icons.sh          # Icon generation script
└── README.md                  # This file
```

---

## 🎨 How to Change App Icon

### Quick Method (Automated)

1. **Prepare your icon**

   - Create a square PNG image (recommended: 1024x1024px or larger)
   - Save it as `assets/icon.png`

2. **Run the icon generator script**

   ```bash
   ./generate_icons.sh
   ```

3. **Rebuild the app**
   ```bash
   cd android && ./gradlew clean && cd ..
   npx react-native run-android
   ```

### What the Script Does

The `generate_icons.sh` script automatically:

- Generates all 5 required Android icon sizes:
  - mipmap-mdpi: 48x48px
  - mipmap-hdpi: 72x72px
  - mipmap-xhdpi: 96x96px
  - mipmap-xxhdpi: 144x144px
  - mipmap-xxxhdpi: 192x192px
- Creates both square and round versions
- Places them in correct Android resource folders

### Manual Method

If you prefer to do it manually:

1. Generate icon sizes using online tools:

   - [App Icon Generator](https://www.appicon.co/)
   - [MakeAppIcon](https://makeappicon.com/)

2. Replace files in:

   ```
   android/app/src/main/res/mipmap-*/ic_launcher.png
   android/app/src/main/res/mipmap-*/ic_launcher_round.png
   ```

3. Clean and rebuild:
   ```bash
   cd android && ./gradlew clean && cd ..
   npx react-native run-android
   ```

For detailed instructions, see: [HOW_TO_CHANGE_APP_ICON.md](./HOW_TO_CHANGE_APP_ICON.md)

---

## 💻 Technology Stack

### Core Technologies

- **React Native** (0.76.6) - Mobile app framework
- **React** (18.3.1) - UI library
- **TypeScript** - Type safety (App.tsx)
- **JavaScript** - Component logic

### Key Dependencies

- **react-native-safe-area-context** - Safe area handling
- **@react-native-community/cli** - React Native CLI tools

### Development Tools

- **Metro** - JavaScript bundler
- **Gradle** - Android build system
- **sips** - macOS image processing (for icon generation)

---

## 📚 What I Learned

### React Native Fundamentals

- ✅ Component structure and lifecycle
- ✅ JSX syntax and rendering
- ✅ Props and state management
- ✅ Event handling (onPress, onChangeText)

### React Hooks

- ✅ `useState` - Managing component state
- ✅ State updates and re-rendering
- ✅ Multiple state variables in one component

### UI Components

- ✅ `View` - Container component
- ✅ `Text` - Text display
- ✅ `TextInput` - User input
- ✅ `Pressable` - Touch interactions
- ✅ `FlatList` - Efficient list rendering
- ✅ `StyleSheet` - Styling components

### Styling

- ✅ Flexbox layout
- ✅ Dynamic styling based on state
- ✅ Color schemes and theming
- ✅ Responsive design principles

### State Management

- ✅ Lifting state up (data in HomeScreen, passed to children)
- ✅ State updates with arrays (add, edit, delete)
- ✅ Conditional rendering based on state
- ✅ Form state management

### CRUD Operations

- ✅ **Create**: Adding new items to array
- ✅ **Read**: Displaying items with FlatList
- ✅ **Update**: Editing existing items with map()
- ✅ **Delete**: Removing items with filter()

### Advanced Concepts

- ✅ Conditional rendering (`&&`, ternary operators)
- ✅ Array methods (map, filter, find)
- ✅ Component composition
- ✅ Props drilling and data flow
- ✅ Edit mode toggle pattern

### Android Development

- ✅ App icon configuration
- ✅ Resource folders (mipmap densities)
- ✅ Gradle build system
- ✅ APK generation and installation
- ✅ Android manifest configuration

### Tools & Workflow

- ✅ Git version control
- ✅ npm package management
- ✅ Metro bundler
- ✅ Hot reloading / Fast Refresh
- ✅ Shell scripting (icon generation)
- ✅ macOS sips command for image processing

---

## 🎓 Key Learnings & Best Practices

### 1. **State Management Pattern**

```javascript
// Centralized state in parent component
const [data, setData] = useState([...]);

// Pass down as props to children
<CreateScreen data={data} setData={setData} />
```

### 2. **Edit Mode Pattern**

```javascript
// Track edit state and ID
const [isEdit, setIsEdit] = useState(false);
const [editingId, setEditingId] = useState(null);

// Conditional logic in handler
if (isEdit) {
  // Update existing item
} else {
  // Add new item
}
```

### 3. **Dynamic Styling**

```javascript
// Conditional background color
style={[
  styles.itemContainer,
  { backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F6BFFF' }
]}
```

### 4. **FlatList Optimization**

```javascript
<FlatList
  data={data}
  keyExtractor={item => item.id.toString()} // Unique keys
  renderItem={({ item }) => <ItemComponent item={item} />}
/>
```

### 5. **Form Handling**

```javascript
// Clear form after submission
setItemName('');
setStockAmt('');
setIsEdit(false);
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. **App Icon Not Changing**

```bash
# Solution: Clean build and reinstall
cd android && ./gradlew clean && cd ..
npx react-native run-android
```

#### 2. **Metro Bundler Issues**

```bash
# Reset cache
npm start -- --reset-cache
```

#### 3. **Build Errors**

```bash
# Clean Android build
cd android
./gradlew clean
cd ..

# Reinstall node modules
rm -rf node_modules
npm install
```

#### 4. **Emulator Not Detected**

```bash
# List connected devices
adb devices

# If none, start emulator from Android Studio
```

---

## 🔧 Scripts

### Available Commands

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios

# Run tests
npm test

# Lint code
npm run lint

# Generate app icons
./generate_icons.sh

# Clean Android build
cd android && ./gradlew clean && cd ..
```

---

## 📖 Additional Documentation

- [HOW_TO_ADD_LOGO.md](./HOW_TO_ADD_LOGO.md) - Guide for adding in-app logos
- [HOW_TO_CHANGE_APP_ICON.md](./HOW_TO_CHANGE_APP_ICON.md) - Detailed icon setup guide
- [ICON_CHANGE_COMPLETE.md](./ICON_CHANGE_COMPLETE.md) - Icon change summary

---

## 🚀 Future Enhancements

Potential features to add:

- [ ] Data persistence (AsyncStorage or SQLite)
- [ ] Search functionality
- [ ] Categories for items
- [ ] Barcode scanning
- [ ] Export data (CSV/PDF)
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] Cloud sync
- [ ] Analytics dashboard
- [ ] Push notifications for low stock

---

## 🤝 Contributing

This is a learning project, but contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Rishi Shah**

- GitHub: [@rishis26](https://github.com/rishis26)
- Repository: [my_storage](https://github.com/rishis26/my_storage)

---

## 🙏 Acknowledgments

- React Native Documentation
- React Native Community
- Stack Overflow Community
- All the open-source contributors

---

## 📞 Support

If you have any questions or run into issues:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review [React Native Documentation](https://reactnative.dev/docs/getting-started)
3. Open an issue on GitHub

---

**Made with ❤️ by Rishi Shah**

_Learning React Native one component at a time!_ 🚀
