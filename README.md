# 🧪 Lab Exercise: Personal Portfolio & Login System

## 📋 Overview
In this lab, you will work with a pre-built two-page web application consisting of a **Login Page** and a **Dashboard**. Your goal is to clone the repository, understand the existing HTML/CSS/JS structure, and implement specific features to enhance functionality and design.

## 🎯 Learning Objectives
By completing this lab, you will:
1. Practice cloning and managing files from GitHub.
2. Understand the relationship between HTML structure, CSS styling, and JavaScript logic.
3. Implement DOM manipulation to add dynamic content.
4. Practice responsive design techniques using CSS Grid and Flexbox.

---

## 🚀 Getting Started

### Step 1: Clone the Repository
Open your terminal (Command Prompt, PowerShell, or Terminal) and navigate to the folder where you want to save your project. Then run:

```bash
git clone <YOUR_REPOSITORY_URL_HERE>
cd <REPOSITORY_FOLDER_NAME>
```

### Step 2: Open in Code Editor

1. Open **Visual Studio Code** (or your preferred editor).
2. Go to `File > Open Folder` and select the folder you just cloned.
3. You should see the following file structure:

```text
├── index.html      (Login Page)
├── dashboard.html  (Main Page)
├── style.css       (Styles for both pages)
├── script.js       (Logic for both pages)
└── README.md       (Instructions)
```

## Task 3: Dynamic Dashboard Features (JS)

1. Open `dashboard.html` and `script.js`.
2. Currently, the "Add Project" button adds a card with generic text.
3. **Challenge:** Modify the `createProjectCard` function to accept a second parameter for a **description**.
4. Update the input section in `dashboard.html` to include a second input field for the description.
5. Ensure the new card displays the custom description provided by the user.

## Task 4: Responsive Navigation (CSS)

1. Resize your browser window to mobile width (< 600px).
2. Notice that the navigation links stack vertically.
3. **Challenge:** Create a "Hamburger Menu" icon for mobile views.
   - Hide the `.nav-links` by default on mobile.
   - Show them only when a menu button is clicked (you will need to add a click event listener in `script.js`).

## 📂 File Structure Explanation

| File | Purpose |
|------|---------|
| `index.html` | The entry point. Contains the login form structure. |
| `dashboard.html` | The protected page. Contains the navbar and project grid. |
| `style.css` | Contains all visual styles. Uses CSS Variables for easy theming. |
| `script.js` | Contains all interactivity. Uses `DOMContentLoaded` to ensure HTML is ready before running JS. |

## 🐛 Troubleshooting

- **Page not updating?** Hard refresh your browser (`Ctrl + F5` on Windows, `Cmd + Shift + R` on Mac).
- **JavaScript not working?** Open the Browser Console (`F12` > Console tab) to check for error messages.
- **CSS not applying?** Ensure the `<link rel="stylesheet" href="style.css">` tag is present in the `<head>` of both HTML files.

## 📤 Submission Instructions

1. Ensure all your changes are saved.
2. If using Git, commit your changes:

```bash
git add .
git commit -m "Completed lab tasks: updated colors, added remember me, dynamic descriptions"
git push origin main
```
