# 🚗 Car Rental Platform — Full Stack Web Application
A comprehensive, full-stack car rental platform that allows users to browse, book, and manage vehicle listings. This project focuses on modern web architecture, secure authentication, and cloud-based deployment.

---

## 🌐 Live Demo
Experience the platform live: [Car Rental Demo](https://car-rental-fullstack-bay.vercel.app/)

## 💻 Repository
Source code: [GitHub Repo](https://github.com/Vedant-Chaudhari/CarRental-fullstack)

---

## 📌 Project Overview
This project is a functional Car Rental System, designed to simulate real-world booking platforms. It features a robust backend for user management and a dynamic frontend for browsing and booking vehicles.

### Key Highlights:
- **End-to-End Communication:** Seamless integration between React frontend and Node.js/Express backend.
- **Secure Authentication:** Implementation of JWT-based login and signup flows.
- **Cloud Infrastructure:** Fully deployed environment using Vercel and MongoDB Atlas.
- **Image Management:** Cloud-based image uploads and optimization using ImageKit.

---

## 🛠 Tech Stack
| Component | Technology |
| :--- | :--- |
| **Frontend** | React.js, Tailwind CSS, Axios, React Router |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (NoSQL) |
| **Auth** | JSON Web Tokens (JWT) & Bcrypt.js |
| **Image Storage** | ImageKit |
| **Deployment** | Vercel (Frontend & Backend) |

---

## ✨ Features
- [x] **User Signup & Login:** Secure account creation and credential validation.
- [x] **JWT Authentication:** Token-based session management.
- [x] **Protected Routes:** Dashboard access restricted to authorized users.
- [x] **Car Listings:** Browse available cars with details and images.
- [x] **Booking System:** Users can book available cars for specific dates.
- [x] **Owner Dashboard:** Car owners can add, edit, and manage listings.
- [x] **Image Uploads:** Cloud-based image management via ImageKit.
- [x] **RESTful API:** Clean API design for cars, bookings, and user data.

---

## 🔐 Authentication Flow
1. **User Signup/Login:** User submits credentials via the React form.
2. **Backend Validation:** Node.js server validates data and checks MongoDB.
3. **JWT Generation:** Server signs a unique token using a secret key.
4. **Storage:** The token is sent to the client and stored in `localStorage`.
5. **Authorization:** The token is included in headers for all protected API requests.

---

## 📚 Key Learnings
- [x] Architectural design of Full Stack applications.
- [x] Managing environment variables across different deployment environments.
- [x] Implementing secure password hashing using Bcrypt.js.
- [x] Handling Cross-Origin Resource Sharing (CORS) between frontend and backend.
- [x] Cloud image storage and optimization using ImageKit.
- [x] Deploying full-stack Node.js apps on Vercel with custom routing.

---

## ⭐ Future Improvements
- [ ] **Online Payments:** Integration with Razorpay or Stripe.
- [ ] **Real-time Availability:** Live car availability tracking.
- [ ] **Advanced Filters:** Search by price, category, fuel type, and more.
- [ ] **HTTP-Only Cookies:** Enhancing security for token storage.
