

## Saving Goal Calculator

The Saving Goal Plan Calculator

### Live Server
https://savings-goal-calculator-phihuongctu.vercel.app/

### Technical Stack
-   Frontend
    -   **ReactJS** as build user interfaces
    -   **Material UI** as React component library that implements Google's Material Design
-   Tools
    -   **Eslint** find and fix problems in your JavaScript code
    -   **Jest** JavaScript testing framework designed to ensure correctness of any JavaScript codebase
    -   **Vite** is a build tool to provide a faster and leaner development experience for modern web projects

### Best practices
- Component-Based Architecture
- Functional Components and Hooks
- Code Splitting
- Naming Conventions
- Testing

### Folder structure
```
public # Assets Outside of the Module System
└── favicon.ico
src # shares features, page, component, constant, assets
├── assets
├── component
├── configs
├── page
├── test
├── utils
└── main.jsx
```

### Running the app
```bash
#Install dependencies
PORT=5173
$ npm install

# Development
$ npm run dev

# Testing
$ npm run jest

# Build
$ npm run build
```