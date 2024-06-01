FROM node:20

# Создаем непривилегированного пользователя
RUN useradd -m appuser
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

# Меняем пользователя с root на appuser
USER appuser

EXPOSE 3000

CMD ["npm", "run","dev2"]