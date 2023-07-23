# 記帳本-Expense Tracker

![](https://github.com/rz0585720/expense-tracker/blob/main/login.png?raw=true)
![](https://github.com/rz0585720/expense-tracker/blob/main/register.png?raw=true)
![](https://github.com/rz0585720/expense-tracker/blob/main/index.png?raw=true)

## 簡介 Introduction

這是一個使用 Node.js + Express 打造的記帳本。

## 功能 Features

- 你可以註冊帳號，或透過 Facebook Login 直接登入
- 你可以在首頁看到所有支出的清單
- 你可以在首頁看到所有支出清單的總金額
- 你可以新增一筆支出
- 你可以編輯支出的屬性 (一次只能編輯一筆)
- 你可以刪除一筆支出 (一次只能刪除一筆)
- 你可以在首頁可以根據支出「類別」篩選支出，並顯示該類別的總金額

## 環境建置及需求 Prerequisites

1. [Node.js](https://nodejs.org/en)
2. [Express @4.16.4](https://expressjs.com)
3. [Express-handlebars @3.0.0](https://www.npmjs.com/package/express-handlebars)
4. [Mongoose @5.9.7](https://mongoosejs.com)
5. [MongoDB](https://www.mongodb.com/try/download/community)
6. [Dotenv](https://www.npmjs.com/package/dotenv)

## 安裝 Installation

1. 打開終端機(Terminal)，Clone 此專案至本機電腦

```
git clone https://github.com/rz0585720/expense-tracker.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd expense-tracker
```

3. 安裝 npm 套件

```
npm install
```

4. 在專案資料夾中新增 .env 檔案，並依照 .env.example 檔案的格式設定環境變數
5. 建立種子資料
  
  ```
  npm run seed
  ```
  ```
  帳號:user1@example.com   user2@example.com
  密碼:123                 123
  ```
6. 啟動伺服器，執行 app.js 檔案

```
npm run start
```

6. 當終端機(Terminal)出現以下字樣，表示伺服器已啟動並成功連結

```
Express is running on http://localhost:3000
```

7. 在任一瀏覽器中輸入 http://localhost:3000 開始使用網站
8. 在終端機(Terminal)中按下 Ctrl+C ，即可關閉伺服器結束專案
