'use strict'
const router = function(app) {
    app.get('/', (req,res) =>{
        res.send('request URL : /');
    });
}
export default router;