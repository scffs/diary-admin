# Тесты
#### Тестируем сервисы (бизнес логику)
- Для тестов использовать ЧИСТУЮ ТЕСТОВУЮ БД
- Запускать БД как обычно в докере
- После запуска тестов надо удалить БД, иначе след. запуск тестов может упасть из-за повторяющихся данных

### Как очистить БД

#### Запуск studio
```bash
cd apps/api
npx prisma studio
```

![img.png](../images/run-studio.png)

#### Удаление
![img.png](../images/remove-data-from-db.png)
