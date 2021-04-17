# API document

## Outline

1. [取得病人列表](#1取得病人列表)
2. [增加醫囑](#2增加醫囑)

## API description

### 1、取得病人列表

#### Request URL

```
GET: http://localhost:8080/api/patient
```

#### 返回示例：

```javascript
[
  {
    id: "607a4c79c61c422cc4022a40",
    name: "Allen",
  },
  {
    id: "607a4c79c61c422cc4022a41",
    name: "Hank",
  },
  {
    id: "607a4c79c61c422cc4022a42",
    name: "Nash",
  },
  {
    id: "607a4c79c61c422cc4022a43",
    name: "Antony",
  },
  {
    id: "607a4c79c61c422cc4022a44",
    name: "Ryan",
  }
]
```

### 2、增加醫囑

#### Request URL

```
POST: http://localhost:8080/api/order
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|message      |Y       |string   |醫囑內文 |

#### 返回示例：

```javascript
{
  "isSuccess": true,
  "data": {
    "id": "607b03cb0a0c944278c789eb",
    "message": "超過120請施打8u"
  }
}
```
