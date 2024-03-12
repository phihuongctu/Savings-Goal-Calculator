## Saving Goal Calculator

The Saving Goal Plan

### Technical stack

-   Frontend
    -   **ReactJS** as build user interfaces
    -   **Material UI** as React component library that implements Google's Material Design

-   Tool
    -   **Eslint** find and fix problems in your JavaScript code
    -   **Vite** is a build tool to provide a faster and leaner development experience for modern web projects

### Design patterns
-   Strategy pattern used for file-processor in recorder

### Best practices
-   Rate limit for all route
-   Size limit 1MB
-   Optimize docker image use multi-stage builds and .dockerignore
-   Specific Docker image versions

### Folder structure
```
public #Assets Outside of the Module System
    └── favicon.ico
src # shares features, page
    ├── assets
    ├── component
    ├── configs
    ├── page
    ├── utils
    └── main.jsx
```

### Local machine
-   Install dependencies
```bash
PORT=5173
$ npm install
```

### Running the app
```bash
# development
$ npm run dev

# testing
$ yarn run lint

# build
$ yarn run build
```
