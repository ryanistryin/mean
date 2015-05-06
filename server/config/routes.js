


module.exports = function(app){
    
    //render angular partails
    app.get('/partials/*', function (req,res) {
            res.render('../../public/app/' + req.params[0])
    });

    //make every request go to index file
    app.get('*',function(req,res) {
            res.render('index', {
            });
    });



}