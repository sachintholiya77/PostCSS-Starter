# Gulp PostCSS Starter with Sass and Browser Sync

Kickstart your web development projects with this Gulp-based starter kit, combining the power of Sass, PostCSS, and Browser Sync. Simplify your CSS workflow and enhance your development experience with essential plugins for optimization, autoprefixing, and live reloading.

## Prerequisites:

1. **Node.js Installed:**
   Ensure that Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

2. **Gulp Installed Globally:**
   Gulp should be installed globally on your machine. If not, install it using the following command:
   ```bash
   npm install -g gulp
   ```

## Setup Instructions:
1. **Initialize NPM**
```bash
   npm init
# or
   npm init -y
```

1. **Install Dependencies:**
   Run the following command to install the necessary Gulp plugins and dependencies:
   ```bash
   npm install gulp gulp-postcss gulp-sass sass autoprefixer cssnano postcss-pxtorem postcss-assets browser-sync --save-dev
   ```

2. **Download the `gulpfile.js`:**
   Download the `gulpfile.js` from the provided source and paste it into the root of your project.

3. **Run Gulp:**
   Execute the following command to start the Gulp task:
   ```bash
   gulp
   ```

4. **Folder Structure:**
   Ensure your project follows the recommended folder structure:
   ```plaintext
   |-- dist/
       |-- index.html
   |   |-- assets/
   |       |-- css/
   |           |-- (compiled CSS files will be here)
   |       |-- img/
   |-- src/
   |   |-- scss/style.scss
   |       |-- (place your Sass files here)
   |-- node_modules/
   |   |-- (npm packages - created after running `npm install`)
   |-- .gitignore (optional)
   |-- gulpfile.js
   |-- package.json
   |-- package-lock.json
   ```

## Features:

- **Sass Support:**
  Leverage the benefits of Sass for organized and maintainable stylesheets.

- **Autoprefixer:**
  Automatically add vendor prefixes for cross-browser compatibility.

- **CSSnano:**
  Minify and optimize CSS for faster loading and reduced file sizes.

- **PostCSS Assets:**
  Efficiently manage and optimize asset paths in your CSS.

- **pxtorem:**
  Convert pixel units to rem units for responsive and accessible designs.

- **Browser Sync:**
  Experience live CSS reloading and seamless browser syncing during development.

