# API

# Установка

### Необходимо иметь на локальной машине:

- bun
- bunx (обычно скачивается вместе с bun)
- Docker

**Если вы сделали это еще в самом корне проекта, то отдельно делеть этого не надо**

### Скачать зависимости:

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
