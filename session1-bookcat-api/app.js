const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Welcome to the Book Category API');
});
app.get('/categories', (req, res) => {
res.json([
//{ id: 1, name: 'Fiction' },
//{ id: 2, name: 'Non-Fiction' },
//{ id: 3, name: 'Biography' } **Brackets and Text can be removed or changed**
]);
});
app.get('/about', (req, res) => {
res.json([
"Hi, my name is Felix, age 17. I study IT in Ngee Ann Polytechnic"
]);
});
app.listen(3000, () => {
console.log('Listening on port 3000');
});