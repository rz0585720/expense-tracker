const users = [
  {
    name: '廣志',
    email: 'user1@example.com',
    password: '123',
    restaurantsOwned: [0, 1]
  },
  {
    name: '小新',
    email: 'user2@example.com',
    password: '123',
    restaurantsOwned: [2, 3, 4]
  }
]

const records = [
  {
    "name": "午餐",
    "date": "2023-04-23",
    "amount": 60,
    "category": "餐飲食品",
    "categoryId": ""
  },
  {
    "name": "晚餐",
    "date": "2023-04-23",
    "amount": 60,
    "category": "餐飲食品",
    "categoryId": ""
  },
  {
    "name": "捷運",
    "date": "2023-04-23",
    "amount": 120,
    "category": "交通出行",
    "categoryId": ""
  },
  {
    "name": "電影：驚奇隊長",
    "date": "2023-04-23",
    "amount": 220,
    "category": "休閒娛樂",
    "categoryId": ""
  },
  {
    "name": "遊樂園",
    "date": "2023-04-03",
    "amount": 800,
    "category": "休閒娛樂",
    "categoryId": ""
  },
  {
    "name": "租金",
    "date": "2023-04-01",
    "amount": 25000,
    "category": "家居物業",
    "categoryId": ""
  }
]

module.exports = { users, records }