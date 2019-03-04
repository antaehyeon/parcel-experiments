# Parcel Experiments
> Setting up a professional React project with Parcel as a code bundler.

## Feater

- React
- ES6 with Babel
- SCSS
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

   

















