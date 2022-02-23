const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})



router.get('/movies',function (req,res){
    res.send('["Dangal","Sanju","Pk","ABCD","Rockstar"]')
});

router.get('/movies/:moviesID',function(req,res){
    mov=["Dangal","Sanju","Pk","ABCD","Rockstar"]
    let value=req.params.moviesID;
    if (value>mov.length-1){
        res.send('"doesnot exist"')
    }else{
        res.send(mov[value])
    }
});

router.get('/moviesz',function (req,res){
    res.send([{
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Demo'
       }]
       )
});


router.get('/films/:filmID',function (req,res){
    let movi=[{
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Demo'
       }]
       let value =req.params.filmID;
       let found=false;
       for(i=0;i<movi.length;i++){
           if(movi[i].id==value){
               found=true;
               res.send(movi[i])
               break
           }
       }
if (found==false){
    res.send('No movie exists with this id')
}
});

module.exports = router;