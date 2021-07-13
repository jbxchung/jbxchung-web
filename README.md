# Personal Web App

Private repository for personal web app front end (React app) at jbxchung.dev

## Build Docker image
```bash
docker build -t jbxchung/personal-webapp .
```

## Run container
connect host port 9000 (for example) to container port 17713
```bash
docker run -d -p 9000:17713 jbxchung/personal-webapp
```

## Run as non-root
https://docs.docker.com/engine/install/linux-postinstall/
