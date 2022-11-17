const express = require('express');
const mongoose = require('mongoose');
const path=require('path')
const app = express();
const cors = require('cors');
const { storage, fileFilter } = require("./multer/upload")
const multer = require('multer');
const upload = multer({ limits: { fileSize: 2097152 }, fileFilter: fileFilter, storage: storage })

const IVModel = require("./models/form")
app.use(express.static(path.join(__dirname, "/public")))
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://balasurya:balasurya@IV.drb9qco.mongodb.net/iv?retryWrites=true&w=majority",{
    useNewUrlParser: true,
})
.then(()=>console.log('connection open'))
.catch(err=>console.log('error'))


app.post('/uploadform',upload.single('photo'),async (req, res) => {
    const stuName= req.body.name
    const stuRoll = req.body.roll
    const stuEmail = req.body.email
    const stuDept = req.body.dept
    const stuSection = req.body.section
    const stuDate = req.body.date
    console.log(req.file)
    const stuPlace = req.body.place
    const stuStaff = req.body.staff
    const image = 'http://localhost:3001/'+req.file.path.substring(6);
    const iv = new IVModel({name:stuName,roll:stuRoll,email:stuEmail,dept:stuDept,section:stuSection,date:stuDate,place:stuPlace,staff:stuStaff,image})
    try{
        await iv.save();
        res.send("inserted one")
    } catch (err){
        console.log(err)
    }
});

// app.put('/displayform',async (req, res) => {
//     const stunewName= req.body.newName
//     const id = res.body.id;
//     const stunewRoll = req.body.roll
//     const stunewDept = req.body.dept
//     const stunewSection = req.body.section
//     const stunewDate = req.body.date
//     const stunewPlace = req.body.place
//     const stunewStaff = req.body.staff

//     try{
//         await IVModel.findById(id, (err, updatedName) => {
//             updatedName.name = newName
//             updatedName.save();
//             res.send("update")
//         })
//     } catch (err){
//         console.log(err)
//     }
// });

app.get('/displayform',async (req, res) => {
    IVModel.find({},(err, result) => {
        if (err){
            res.send(err)
        }
        res.send(result);
    })
});

app.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;
    console.log(id);
    // res.send(id)
     await IVModel.findByIdAndDelete(id);
     res.send("deleted")
})

app.listen(3001,() => {
    console.log("Server is running")
});