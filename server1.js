const express=require('express');
const app=express();
app.use(express.json());
 let data=[];

 app.get('/students',(req,res) => {
    res.send(data);
 })
 app.post('/students',(req,res) => {
    const student=req.body;
    data.push(student);
    res.send("Student Added");
 })
 app.put('/students/:rollno',(req,res) =>{
    const rollno=parseInt(req.params.rollno);
    const update=req.body;
    const idx=data.findIndex((item) => item.rollno == rollno);
    if(idx!=-1){
        data[idx]={...data[idx],...update};
        res.send("Updated");
    }else{
        res.send("Not Found");
    }
 })
 app.delete('/students/:rollno',(req,res) => {
    const rollno=parseInt(req.params.rollno);
    const idx=data.findIndex((item) => item.rollno == rollno);
    if(idx!=-1){
        data.splice(idx,1);
        res.send("deleted");
    }else{
        res.send("not found");
    }
 })
 app.listen(3000,() => {
    console.log("http://localhost:3000");
 })