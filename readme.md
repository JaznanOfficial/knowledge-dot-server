
# Knowleldge dot

A brief description of what this project does and who it's for


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






