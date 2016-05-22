var express = require('express');
var router = express.Router();



/* POST results listing. */
router.post('/', function (req, res, next) {
     var mysql      = require('mysql');
     var connection = mysql.createConnection("mysql://kbvlfxkdq4gjve3g:ijx1rkn4p843wu4a@g8r9w9tmspbwmsyo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/e44kgb0mva2857vu");
 connection.connect();
 
 var upid = req.body.inputProtein;

 var proteins = connection.query('SELECT * FROM Proteins WHERE upid = ?', upid, function(err, rows, fields) {
  var queryResults = [];
   if (!err) {
    for (var i = 0; i < rows.length; i++) {
      queryResults.push(rows[i]); 
    }
    res.render('results', { proteins: queryResults });
   }
   else {
     console.log('Error while performing Query.');
   }
  });


 // ßconnection.end();   

});



module.exports = router;
