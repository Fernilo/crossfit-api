# Usa una imagen base de Node.js
FROM node:22.4.0

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que correrá la aplicación
EXPOSE 3000

# Define el comando para correr la aplicación
CMD ["npm", "run", "dev"]
