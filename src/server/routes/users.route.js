'use strict'
const userRouter = function(app) {
    app.get('/users', (req,res) =>{
        res.send('request URL : /users');
    });
}
export default userRouter;