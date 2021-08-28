FROM node:16-alpine
COPY index.js /index.js
ENTRYPOINT [ "node", "/index.js" ]