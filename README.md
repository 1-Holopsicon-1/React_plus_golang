# Это мой личный проект, чат созданный с помощью websoket на Golang и UI -> React.

# Если вы пользователь Docker то проект запускается 2 командами
  ```docker
  docker-compose build
  ```
  ```docker
  docker-compose up
  ```
  
## *Требует порты 8080 (backend) и 5000 (frontend)*

# Иерархия папок

- backend \
  Всё достаточно логично, это папка websoket-сервера написанном на Go
- frontend \
  Несобранная версия UI, внутри находится React в котором всё пишется
- project \
  Это папка созданная для упрощения написания DockerFile туда перемещена папка build \
  созданная `npm run build`, к нему создана зависимость compose ~~типо как бы продакшн~~ так надо :D

 
