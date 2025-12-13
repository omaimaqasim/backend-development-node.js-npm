## How to setup Tailwind CSS

Step 1: Run the following commands

``` 
npm install -D tailwindcss
npx tailwindcss init
```

Step 2: Update tailwind.conf.js file to include this line:
```
content: ["*.html"],
```

Step 3: create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Include the src/output.css file to your html

Step 5: Run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Step 6: f you have a similar error try the code below to continue with the sigma course:
$ npx tailwindcss init
npm error could not determine executable to run
npm error A complete log of this run can be found in: 

```
npm install -D tailwindcss@3postcss autoprefixer

 npx tailwindcss init
```