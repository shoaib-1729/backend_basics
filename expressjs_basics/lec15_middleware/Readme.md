# Middleware Overview

## Introduction

Is project mein do prakar ke middleware ka istemal kiya gaya hai:

1. **Application Level Middleware**
2. **Router Level Middleware**

## Middleware Types

### 1. Application Level Middleware

- Yeh middleware application ke saare routes par execute hota hai.
- Global level par apply hota hai, matlab yeh har request par kaam karega.
- Iska istemal common tasks jaise logging, authentication, aur error handling ke liye hota hai.

### 2. Router Level Middleware

- Yeh middleware sirf specific router ke routes par execute hota hai.
- Iska istemal sirf us router file ke liye kiya jata hai, jo specific routes ko target karta hai.
- Yeh specific functionality jaise validation ya custom logic apply karne ke liye useful hai.

## Usage

Middleware ko apne Express application mein add karne ke liye aap yeh syntax istemal kar sakte hain:

```javascript
const express = require('express');
const app = express();
const loggerMiddleware = require('./logger-middleware');

// Application Level Middleware
app.use(loggerMiddleware);

// Router Level Middleware
const router = express.Router();
router.use(loggerMiddleware);

// Define routes
router.get('/example', (req, res) => {
    res.send('This is an example route!');
});

app.use('/api', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
