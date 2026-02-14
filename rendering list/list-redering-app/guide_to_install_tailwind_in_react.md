# 📦 How to Install Tailwind CSS in React (Vite)

This guide explains how to add **Tailwind CSS** to a React app created
with **Vite**.

------------------------------------------------------------------------

## ✅ Step 1: Install Tailwind and Dependencies

Open your terminal inside your project folder and run:

``` bash
npm install -D tailwindcss postcss autoprefixer
```

Then generate the configuration files:

``` bash
npx tailwindcss init -p
```

This will create:

-   `tailwind.config.js`
-   `postcss.config.js`

------------------------------------------------------------------------

## ✅ Step 2: Configure Tailwind

Open `tailwind.config.js` and replace its content with:

``` js
/\* @type {import('tailwindcss').Config} \*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

------------------------------------------------------------------------

## ✅ Step 3: Add Tailwind Directives to CSS

Open your main CSS file (usually `src/index.css`) and replace everything
with:

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

------------------------------------------------------------------------

## ✅ Step 4: Make Sure CSS Is Imported

Open `src/main.jsx` (or `main.tsx`) and confirm this line exists:

``` js
import './index.css'
```

------------------------------------------------------------------------

## ✅ Step 5: Start the Development Server

``` bash
npm run dev
```

------------------------------------------------------------------------

## 🧪 Test Tailwind

Edit `App.jsx` and add:

``` jsx
export default function App() {
  return (
    <h1 className="text-4xl font-bold text-blue-500">
      Tailwind is working 🚀
    </h1>
  )
}
```

If the text appears **large and blue**, Tailwind is installed
successfully.

------------------------------------------------------------------------

# 🎉 Done!

You now have Tailwind CSS working with React + Vite.
