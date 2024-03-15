//create web server
const express = require('express');
const app = express();
const port = 3000;

//get comments
app.get('/comments', (req, res) => {
  res.json({
    comments: [
      { id: 1, author: 'user1', text: 'This is the first comment' },
      { id: 2, author: 'user2', text: 'This is the second comment' },
      { id: 3, author: 'user3', text: 'This is the third comment' }
    ]
  });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
```

```javascript
// Path: index.js
//create web server
const express = require('express');
const app = express();
const port = 3000;

//get comments
app.get('/comments', (req, res) => {
  res.json({
    comments: [
      { id: 1, author: 'user1', text: 'This is the first comment' },
      { id: 2, author: 'user2', text: 'This is the second comment' },
      { id: 3, author: 'user3', text: 'This is the third comment' }
    ]
  });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
```

```javascript
// Path: index.js
//create web server
const express = require('express');
const app = express();
const port = 3000;

//get comments
app.get('/comments', (req, res) => {
  res.json({
    comments: [
      { id: 1, author: 'user1', text: 'This is the first comment' },
      { id: 2, author: 'user2', text: 'This is the second comment' },
      { id: 3, author: 'user3', text: 'This is the third comment' }
    ]
  });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
```

```javascript
// Path: index.js
//create web server
const express = require('express');
const app = express();
const port = 3000;

//get comments
app.get('/comments', (req, res) => {
  res