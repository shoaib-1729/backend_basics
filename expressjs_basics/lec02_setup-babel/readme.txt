For Production:
   "scripts": {
        "build": "babel index.js --out-dir prd",
        "start": "npm run build  && nodemon prd/index.js",
        "server": "node prd/index.js"
    },

For Development:
   "scripts": {
        "build": "babel index.js -w --out-dir prd",
        "dev-serve": "nodemon prd/index.js"
    },

For Development - Compile Directory
   "scripts": {
        "build": "babel src -w --out-dir prd",
        "dev-serve": "nodemon prd/index.js"
    },