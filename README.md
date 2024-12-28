# Project Nest

Project Nest is a project management web app designed to streamline workflows and enhance productivity for corporate teams. With powerful task management features, intuitive design, and advanced admin controls, Project Nest empowers teams to collaborate effectively and meet deadlines effortlessly.

## Live Demo
[Check out the live app here!](projectnestjs.vercel.app
)  


---

## Features

### 1. Effortless Task Management
- Create, assign, and prioritize tasks with ease.
- Manage sprints and set urgency levels to meet deadlines efficiently.

### 2. Intuitive User Interface
- Built with **Tailwind CSS**, offering a clean, responsive, and user-friendly design.
- Navigate effortlessly through a modern and professional layout.

### 3. Advanced Admin Controls
- Admins have exclusive roles and tools to monitor tasks, create sprints, and streamline workflows.
- Includes real-time updates to keep teams aligned and informed.

### 4. Secure and Reliable Authentication
- User accounts powered by **Clerk** for seamless login with Google, GitHub, or email.

### 5. Robust Database Support
- All data is securely stored and managed using **PostgreSQL**, ensuring performance and reliability.

---

## Tech Stack
- **Frontend**: Next.js, Tailwind CSS, ShadCN
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Authentication**: Clerk (Google, GitHub, Email)

---

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js
- PostgreSQL
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/project-nest.git
   ```

2. Navigate to the project directory:
   ```bash
   cd project-nest
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up the environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   CLERK_API_KEY=your_clerk_api_key
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Screenshots

### Home Page
![Home Page](![Screenshot 2024-12-29 043804](https://github.com/user-attachments/assets/105e7139-d159-4c05-a24f-a6cabd91845e))
![Home Page](![Screenshot 2024-12-29 043818](https://github.com/user-attachments/assets/5ce51bca-d4dd-41a1-9d26-615ab4a3910b))
![Home Page](![Screenshot 2024-12-29 043840](https://github.com/user-attachments/assets/0d2f1964-058e-4e13-9ee0-4a193383c9bb))

### Authentication
![Authentication](![Screenshot 2024-12-29 044049](https://github.com/user-attachments/assets/0174ab3f-1f0b-4260-b838-28dd1283824c))

### Task Management
![Task Management](![Screenshot 2024-12-29 044734](https://github.com/user-attachments/assets/1f77e5b4-f3b2-4265-bd45-e7ee8bd1d292)
)

### Admin Dashboard
![Admin Dashboard](![Screenshot 2024-12-29 044323](https://github.com/user-attachments/assets/6138e6d0-6ea5-429f-b563-f4bc4dbaa4a8)
)


---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---


