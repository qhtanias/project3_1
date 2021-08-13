var mongoclient = require('mongodb').MongoClient
var url = "mongodb://localhost:27019/customerdb";

mongoclient.connect(url,function(err,db)

{
    if (err) throw err;
    console.log('database connected and created in mongo');
    db.close();
}

    )
