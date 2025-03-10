# iTask - Your Task Planner

iTask is a simple and efficient task planner built with **React.js**. It allows users to manage their to-do list with ease, providing options to add, edit, delete, and mark tasks as completed. The application also persists data using **local storage**, ensuring that tasks are not lost even after refreshing the page.

## Features

### 1. Add Tasks
- Users can write a new to-do in the input box and click the **"Save"** button to add it to the list.
- The newly added task appears under the **"Your Todos"** section.

### 2. Edit and Delete Tasks
- Each task displayed has **Edit** and **Delete** buttons.
- Clicking **"Edit"** allows users to update the task content.
- Clicking **"Delete"** removes the task from the list.

### 3. Mark Tasks as Completed
- Each task has a **checkbox** to mark it as completed.
- Once checked, the task gets a **line-through** style using CSS and disappears from the **"Your Todos"** list.
- The completed task moves to the **"Finished Todos"** section.

### 4. View Finished Todos
- Users can toggle the **"Finished Todos"** checkbox to view the list of completed tasks.
- Unchecking the finished todos checkbox hides the completed tasks again.

### 5. Persistent Storage
- All tasks (including finished ones) are stored in **local storage**, maintaining state even after the page is refreshed.

## Installation

Follow these steps to get the application up and running on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/news-app.git
2. **Navigate to the project directory:**
   cd iTask - Your Task Planner
3. **Install the dependencies:**
   npm install
4. **Start the application:**
   npm run dev
5. **Open your browser and navigate to:**
   http://localhost:5173

## Technologies Used
- **React.js for building the user interface.**
- **Tailwind CSS for styling.**

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve the application.
