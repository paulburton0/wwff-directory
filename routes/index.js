var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
	MongoClient.connect('mongodb://localhost:27017/pota', function(err, db) {
        
        // Create a collection we want to drop later
        var collection = db.collection('directory');

        // Perform a simple find and return all the documents
        collection.find().toArray(function(err, docs) {
            db.close();
            docs.sort(function(a,b){
                if (a.Ref < b.Ref)
                    return -1;
                if (a.Ref > b.Ref)
                    return 1;
                return 0;
            });
            res.render('index', { docs, title: 'Directory of Parks on the Air' });
        });
	});
});

module.exports = router;
