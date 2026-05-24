# Modern React To-Do Application

An attractive, highly responsive, and feature-rich To-Do application built with React and Vite. It combines a stunning modern UI—featuring glassmorphism, gradient accents, and subtle animations—with practical task management capabilities.

## ✨ Features

**Core Tracking (Phase 1)**
- Add new tasks effortlessly.
- Mark tasks as completed (featuring strike-throughs and visual fading).
- Delete unwanted items permanently.

**Organization & Theming (Phase 2)**
- **Priority Labeling**: Assign "High" or "Low" priorities to your tasks.
- **Due Dates**: Integrated browser-native calendar date picker.
- **Overdue Detection**: Tasks that are past their due date dynamically emit a pulsing red "aura" ring to command your attention!
- **Dark & Light Mode**: Seamlessly switch themes via a visually pleasing toggle.

**Advanced Controls (Phase 3)**
- **Drag & Drop**: Freely and intuitively reorder your tasks using the grip icon (powered by `@hello-pangea/dnd`).
- **Local Storage Persistence**: Automatically saves your tasks and theme preferences directly in the browser. They remain exactly where you left them across reloads!
- **Filtering**: Handy tabs to filter down strictly to "All", "Pending", or "Completed" tasks.

## 🚀 Technologies Used
- **React (via Vite)** for lightning-fast bootstrapping and component architecture.
- **Vanilla CSS** utilizing CSS Variables, Flexbox, and Keyframe Animations.
- **`@hello-pangea/dnd`** for accessible native drag-and-drop lists.
- **`date-fns`** for seamless date parsing and overdue logic calculations.
- **`lucide-react`** for crisp, scalable iconography.

## 🛠️ Getting Started

To run this project on your local machine:

1. Clone or download the repository to your machine.
2. Open your terminal in the project's root folder.
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit the URL provided in the terminal (typically `http://localhost:5173/`).
