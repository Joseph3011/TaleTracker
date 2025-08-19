FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5137
CMD ["npm", "run", "dev", "--", "--host", "--port", "5137"]
