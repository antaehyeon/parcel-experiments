# Parcel Experiments
> Setting up a professional React project with Parcel as a code bundler.

## Feater

- React
- ES6 with Babel
- SCSS -> CSS
- CSS Modules
- Typography.js
- Build for production

---

## STEP 1. Hello world with Parcel

1. git clone

2. yarn init (private no)

3. [parcel getting started](https://parceljs.org/getting_started.html)

   1. `yarn global add parcel-bundler` (global setting)

4. `yarn add react react-dom`

5. `yarn add babel-preset-env babel-preset-react`

6. set index.html & index.js

   ```javascript
   <html>
   <body>
     <script src="./index.js"></script>
   </body>
   </html>
   ```

   ```javascript
   console.log("hello world");
   ```

7. parcel index.html

8. set yarn start (with package.json)

   ```json
   "scripts": {
       "start": "parcel index.html"
   }
   ```



## STEP 2. React and ES6 with Parcel

1. Create src/App.js

   ```react
   import React from "react";
   
   export default () => <div>LALALA</div>;
   ```

2. Create index.js

   ```react
   import React from "react";
   import ReactDOM from "react-dom";
   import App from "./src/App";
   
   ReactDOM.render(<App />, document.getElementById("app"));
   ```

3. Create .babelrc

   ```json
   {
     "preset": ["env", "react"]
   }
   ```



## STEP 3. CSS Modules and SCSS with Parcel

1. create `.postcssrc` [postCSS](https://postcss.org/)

   ```
   {
       "module": true
   }
   ```

2. yarn add postcss-modules

3. yarn global add node-sass

4. Change css -> scss

5. [auto prefixer](https://github.com/postcss/autoprefixer)

   1. yarn add autoprefixer

   2. add plugin (to .postcssrc)

      ```json
      { 
          "modules": true,
          "plugins": {
              "autoprefixer": {
                  "browsers": [
                      "> 1%",
                      "Last 2 versions",
                      "IE 10"
                  ]
              }
          }
      }
      ```

   3. modify styles.scss

      `.title {` -> `.title:fullscreen {`



## STEP 4. TypographyJS and Building for Production

1. yarn add [typography](https://kyleamathews.github.io/typography.js/)

2. create new file `typography.js`

   ```javascript
   import Typography from "typography";
   
   const typography = new Typography({
     baseFontSize: "18px",
     baseLineHeight: 1.666,
     googleFonts: [
       {
         name: "Montserrant",
         styles: ["700"]
       },
       {
         name: "Open Sans",
         styles: ["400"]
       }
     ],
     headerFontFamily: ["Montserrant", "Open Sans", "sans-serif"],
     bodyFontFamily: ["Open Sans", "sans-serif"]
   });
   
   typography.injectStyles();
   
   export default typography;
   ```

3. add new line to index.js

   `import typography from "./typography";`

4. add new line to package.json (scripts)

   ```json
     "scripts": {
       "start": "parcel index.html",
       "build": "parcel build index.html -d build --public-url ./"
     }
   ```

   



















