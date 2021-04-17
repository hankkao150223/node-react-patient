# API document

## Outline

1. [取得病人列表](#1取得病人列表)
2. [取得醫囑列表](#2取得醫囑列表)

## API description

### 1、取得病人列表

#### Request URL

```
GET: http://localhost:8080/api/patient
```

#### 返回示例：

```javascript
{
    "patients": [
        {
            "id": "607b00334148fe341c6df402",
            "name": "Allen",
            "orderId": "607b00324148fe341c6df401"
        },
        {
            "id": "607b00334148fe341c6df403",
            "name": "Hank",
            "orderId": "607b00324148fe341c6df400"
        },
        {
            "id": "607b00334148fe341c6df404",
            "name": "Nash",
            "orderId": "607b00324148fe341c6df3ff"
        },
        {
            "id": "607b00334148fe341c6df405",
            "name": "Antony",
            "orderId": "607b00324148fe341c6df400"
        },
        {
            "id": "607b00334148fe341c6df406",
            "name": "Ryan",
            "orderId": "607b00324148fe341c6df401"
        }
    ]
}
```

### 2、取得醫囑列表

#### Request URL

```
GET: http://localhost:8080/api/order
```

#### 返回示例：

```javascript
{
    "orders": [
        {
            "id": "607b00324148fe341c6df3ff",
            "message": "超過120請施打8u"
        },
        {
            "id": "607b00324148fe341c6df400",
            "message": "病患需多活動身體"
        },
        {
            "id": "607b00324148fe341c6df401",
            "message": "懷疑為急性腸梗阻，需拍片"
        },
        {
            "id": "607b03cb0a0c944278c789eb",
            "message": "1"
        }
    ]
}
```
