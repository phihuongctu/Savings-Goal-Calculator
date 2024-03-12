## Saving Goal Calculator

The Saving Goal Plan

### Technical stack
- Frontend
  - **ReactJS** build user interfaces
  - **Material UI** React component library that implements Google's Material Design

- Infrastructure
  - Postgres, RabbitMQ
  - docker and docker-compose
  - Kong API gateway
  - B2 Cloud storage

### Design patterns
- Strategy pattern used for file-processor in recorder

### Best practices
- Rate limit for all route
- Size limit 1MB
- Optimize docker image use multi-stage builds and .dockerignore
- Specific Docker image versions

### Folder structure

```
apps
├── api # responsible for handling incoming requests and returning responses to the client.
└── recorder # recorder consume messages from queues, and insert data into DB
    └── src
        └── file-processor
libs
└── shared # shares features, types, constants, and services used by (micro) services in apps directory
    └── src
        ├── common
        ├── decorators
        ├── entities
        ├── guards
        ├── index.ts
        ├── interfaces
        ├── modules
        ├── services
        └── utils
```

### Local machine
- Install dependencies
```bash
PORT=3000
$ yarn install
```

### Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
