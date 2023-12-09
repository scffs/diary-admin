[![Build API](https://github.com/Diary-SPO/diary-admin/actions/workflows/build-api.yml/badge.svg)](https://github.com/Diary-SPO/diary-admin/actions/workflows/build-api.yml)
# API

# Установка

### Необходимо иметь на локальной машине:

- bun
- bunx (обычно скачивается вместе с bun)
- Docker


> **_NOTE:_**  Если установили зависимости в корне, то отдельно ставить не надо.

##### Скачать зависимости:

```bash
bun i
```

# Разработка

### Для запуска сервера:

```bash
bun run dev
```

![img.png](images/img.png)

### Для запуска БД (в докере!):

```bash
bun run db:start
```

![img_1.png](images/img_1.png)

### Для запуска миграций:

```bash
bun run migrate
```

![img_2.png](images/img_2.png)

#### API доступен по урлу http://localhost:3000/

# Возможные ошибки

- Ругается на `@prisma/client`

Необходимо в `apps/api` запустить команду
```bash
cd apps/api
npx prisma generate
```
or
```bash
npx prisma generate
```
