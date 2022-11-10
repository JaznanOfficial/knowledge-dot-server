
# Knowleldge dot



## API Reference

## Main root

```http
  https://knowledge-dot-server-production.up.railway.app/
```

## users api

#### get,post,put and delete all users

```http
/api/v1/users
```

* for get,put,delete with any query use query after this api. like this:
```http
/api/v1/users?email=abc@gmail.com
```

#### which data you can provide

| Property | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. |
| `email` | `string` | **Required and must be unique**. |
| `img` | `string` | **must be img link**. |
| `profession` | `string` | **Not Required**. |
| `gender` | `string` | **must be one of these 3- male,female,other**. |
| `phone` | `string` | **must be a bangladesi phone number with country code +880. and total digit will be 14**. |
| `role` | `string` | **must be one of these 3- admin,moderator,user**. |
| `status` | `string` | **must be active or blocked**. |

<!-- user api -->

## instructors api

#### get,post,put and delete all users

```http
/api/v1/instructors
```

* for get,put,delete with any query use query after this api. like this:
```http
/api/v1/instructors?email=abc@gmail.com
```

#### which data you can provide

| Property | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. |
| `email` | `string` | **Required and must be unique**. |
| `img` | `string` | **must be img link**. |
| `title` | `string` | **Not Required**. |
| `gender` | `string` | **must be one of these 3- male,female,other**. |
| `phone` | `string` | **must be a bangladesi phone number with country code +880. and total digit will be 14**. |
| `professionLevel` | `string` | **must be one of these 3- junior,senior,expert**. |
| `status` | `string` | **must be active or blocked**. |


