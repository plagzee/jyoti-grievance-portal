# 📢 Jyoti's Grievance Portal

This is a side-project where I make a fully-functional grievance portal for my girlfriend as of **07-06-2025** (DD-MM-YYYY).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The front-end is designed using [Tailwind CSS](https://tailwindcss.com/), and the back-end is powered by [MongoDB](https://www.mongodb.com/).

---

## 📋 Contents
- [✨ Features](#features)
- [🚀 Getting Started](#getting-started)
- [📝 Update Log](#update-log)
- [🛠️ To be added](#to-be-added)

---

## ✨ Features <a id="features"></a>
- ✅ Login
- ✅ Create Grievance
- ✅ View Grievances

### 🔐 Login <a id="login"></a>

The login uses JWT tokens, which are created on login and stored in localstorage. The token is then used to verify the user's login status and to check if the user is allowed to access certain pages.

Since the website is meant to be single-user, there are valid credentials for only one user. The username is **"keniko"** and the password is not publicly available.

One with the correct username and password can login into the portal and create grievances and view grievances.

![Image not loaded](/login_image.png)

#### 🛠️ How the login system works? <a id="how-login-works"></a>

1. The user enters the username and password in the login form.
2. The login form sends a POST request to the server with the username and password.
3. The server checks if the username and password are correct.
4. If the username and password are correct, the server returns a JWT token.
5. The JWT token is stored in localstorage.
6. The user is redirected to the home page.
7. The home page uses the JWT token to check if the user is logged in.
8. If the user is logged in, the home page shows the Main Menu.
9. If the user is not logged in, the home page shows the login form displayed with an error message.

---

## 🚀 Getting Started <a id="getting-started"></a>

Once logged in, the main menu consists of three options:

1. 📝 Create Grievance  
2. 📜 View Past Grievances  
3. 🚪 Logout

![Image not loaded](/main_menu.png)

### 📝 Create Grievance <a id="create-grievance"></a>
![Image not loaded](/create.png)

To create a grievance, the user enters the **title** and **description** of the grievance in the form. The grievance is saved in the database.

### 📜 View Grievances <a id="view-grievances"></a>
![Image not loaded](/past.png)

To view past grievances, the user can see all grievances created by other users.  
The grievances are sorted by **date in descending order**.

The user can choose to toggle the status of a grievance. The grievance is then saved in the database.

The user can choose to delete a grievance. The grievance is then deleted from the database.

---

## 📝 Update Log <a id="update-log"></a>
- 🗓️ **18-05-2025**  
    - Created login page  
    - Added create grievance page  
    - Added logout button  
    - Submitting grievance uses a third-party API to send an email to the user.  

- 🗓️ **07-06-2025**  
    - Prettier Design
    - Added view grievances page  
    - Added toggle status button  
    - Added delete grievance button  
    - Removed third party API usage  
    - MongoDB Cluster is used to store and update grievances  
    - Proper verification of login credentials is added  

---

## 🛠️ To be added <a id="to-be-added"></a>
- ⏳ Rate Limitations  
- 👥 Guest accounts to view grievances  
- 🌏 Better Design for the Create and Past Grievances Page
