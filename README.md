# 📱 MyFirstRNApp

A **React Native learning project** focused on building **real-world, production-grade mobile app architecture** using modern best practices.

This project is developed incrementally with a strong emphasis on clean code, scalable architecture, native-first patterns, and meaningful GitHub commits.

---

## 🚀 Tech Stack

- React Native (CLI / Bare – No Expo)
- TypeScript
- React Navigation
  - Native Stack Navigator
  - Bottom Tab Navigator
- React Context API
- AsyncStorage
- Phosphor Icons
- Platform-native Toasts
- Git & GitHub (clean, consistent commits)

---

## ✨ Key Features

- Cross-platform support for **Android and iOS**
- Clean and scalable project structure
- Authentication system using Context API
- Persistent login using AsyncStorage
- Auto-login on app restart
- Proper logout handling
- Auth-driven navigation flow
- Bottom tab navigation (Home, Products, Profile)
- Modern UI with consistent iconography (Phosphor)
- Platform-native feedback
  - Android: ToastAndroid
  - iOS: custom bottom toast
- iOS Safe Area handling (notch & Dynamic Island support)
- Native splash screen implementation (no JS-based splash screens)
- Custom native app icon for Android and iOS


---

## 🧠 Architecture Highlights

- Single source of truth for authentication state
- Navigation fully controlled by auth state
- Clear separation of concerns
  - `context/` → global state management
  - `navigation/` → navigation structure
  - `screens/` → UI screens
  - `hooks/` → reusable logic
- Designed to be API-ready for real backend integration

---

## 🔐 Authentication Flow

- User initiates login
- Auth state updates via Context API
- Session persisted using AsyncStorage
- App bootstraps silently on launch
- Navigation renders based on auth state
- Logout clears persisted data and resets state

---

## 🎯 Purpose of This Project

- Learn real-world React Native patterns
- Practice production-grade architecture
- Avoid tutorial shortcuts and hacks
- Maintain consistent, meaningful GitHub contributions
- Prepare for real backend integration using Node.js

---

## 📌 Status

🚧 Actively under development

Upcoming work includes:
- Real Node.js authentication API
- Token-based authentication
- Secure API integration
- Environment-based configuration

---

## 🧑‍💻 Author

**Divyanshu Tandon**  
React Native / MERN Stack Developer

---

## ⭐️ Notes

This project intentionally avoids **Expo** to gain deeper experience with native React Native tooling, build systems, and platform-specific behavior.
