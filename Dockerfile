# Usar una imagen oficial de Node.js
FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto en el que corre Express
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]
