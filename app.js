const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.get('/posts', function(req, res) {
  res.json([{
    avatar: 'http://localhost:8000/static/avatar.png',
    liked: false,
    name: 'Paul Todd',
    post: 'Hello! This is my first post. It\'s great to be here.',
    postId: 175
  }, {
    avatar: 'http://localhost:8000/static/avatar.png',
    liked: false,
    name: 'Harper Harriet',
    post: 'Hello! This is my first post. It\'s great to be here.',
    postId: 875
  }, {
    avatar: 'http://localhost:8000/static/avatar.png',
    liked: false,
    name: 'Lexia Brandee',
    post: 'Hello! This is my first post. It\'s great to be here.',
    postId: 745
  }, {
    avatar: 'http://localhost:8000/static/avatar.png',
    liked: true,
    name: 'Lexia Brandee',
    post: 'Hello! This is my first post. It\'s great to be here.',
    postId: 176
  }, {
    avatar: 'http://localhost:8000/static/avatar.png',
    liked: false,
    hidden: true,
    name: 'Lexia Brandee',
    post: 'Hello! This is my first post. It\'s great to be here.',
    postId: 589
  }, {
    avatar: 'http://localhost:8000/static/avatar.png',
    liked: true,
    name: 'Tria Meriel',
    post: 'Hello! This is my first post. It\'s great to be here.',
    postId: 463
  }, {
    avatar: 'http://localhost:8000/static/avatar.png',
    liked: false,
    name: 'Daley Rochelle',
    post: 'Hello! This is my first post. It\'s great to be here.',
    postId: 752
  }, {
    avatar: 'http://localhost:8000/static/avatar.png',
    hidden: true,
    liked: false,
    name: 'Bea Sapphire',
    post: 'Hello! This is my first post. It\'s great to be here.',
    postId: 426
  }, {
    avatar: 'http://localhost:8000/static/avatar.png',
    liked: false,
    name: 'Bea Sapphire',
    post: 'Hello! This is my first post. It\'s great to be here.',
    postId: 429
  }]);
});

app.listen(8000, () => {
  console.log('listening on localhost:8000');
});
