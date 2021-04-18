# API document

## Outline

1. [取得病人列表](#1取得病人列表)
2. [取得醫囑列表](#2取得醫囑列表)
3. [更新病人醫囑](#3更新病人醫囑)

## API description

### 1、取得病人列表

#### Request URL

```
GET: http://localhost:8080/api/patient
```

#### 返回示例：

```json
{
    "patients": [
        {
            "id": "607b9bf80167092e18aa4969",
            "name": "Allen",
            "orders": [
                "607b9bf70167092e18aa4968"
            ]
        },
        {
            "id": "607b9bf80167092e18aa496a",
            "name": "Hank",
            "orders": [
                "607b9bf70167092e18aa4967"
            ]
        },
        {
            "id": "607b9bf80167092e18aa496b",
            "name": "Nash",
            "orders": [
                "607b9bf70167092e18aa4966"
            ]
        },
        {
            "id": "607b9bf80167092e18aa496c",
            "name": "Antony",
            "orders": [
                "607b9bf70167092e18aa4967"
            ]
        },
        {
            "id": "607b9bf80167092e18aa496d",
            "name": "Ryan",
            "orders": [
                "607b9bf70167092e18aa4968"
            ]
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

```json
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

### 3、更新病人醫囑

#### Request URL

```
PATCH: http://localhost:8080/api/patient/:id/order
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|id      |Y       |string  |病人 id |

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|orders      |Y       |[string]  |可設定多項醫囑 id |

#### 返回示例：

```json
{
    "isSuccess": true,
    "patient": {
        "id": "607b9bf80167092e18aa4969",
        "name": "Allen",
        "orders": [
            "607b9bf70167092e18aa4967",
            "607b9bf70167092e18aa4968"
        ]
    }
}
```
