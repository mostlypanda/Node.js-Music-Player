const express=require('express');
const app=express();

app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('client');
})

app.listen(3000,()=>{
    console.log('app is live');
})