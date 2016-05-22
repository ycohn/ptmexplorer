var express = require('express');
var router = express.Router();



/* POST results listing. */
router.post('/', function (req, res, next) {
     var mysql      = require('mysql');
     var connection = mysql.createConnection(DATABASE_URL);
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
