const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/lovePet';  // 其中 lovePet为连接的数据库名称,改成需要使用的 
mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connection.on('connected', function() {  
    console.log('Mongoose connected to ' + dbURI);
});
