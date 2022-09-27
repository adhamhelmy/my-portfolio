const ReactRouter = require('react-router');



module.exports = <ReactRouter.RouterContext {...renderProps}
                    createElement={function(Component, renderProps){
                        return <Component {...renderProps} {... props} />
                    }} />