var ReactRouter = require('react-router');

var Provider = require('react-redux').Provider;

module.exports = <Provider store={store}>
<ReactRouter.RouterContext {...renderProps} />
</Provider>