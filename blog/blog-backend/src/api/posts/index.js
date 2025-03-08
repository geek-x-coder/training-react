const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();

posts.get('/', (ctx) => postsCtrl.list(ctx));
posts.post('/', (ctx) => postsCtrl.write(ctx));
posts.get('/:id', (ctx) => postsCtrl.read(ctx));
posts.delete('/:id', (ctx) => postsCtrl.remove(ctx));
posts.put('/:id', (ctx) => postsCtrl.replace(ctx));
posts.patch('/:id', (ctx) => postsCtrl.update(ctx));

module.exports = posts;
