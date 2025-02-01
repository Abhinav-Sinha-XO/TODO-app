const express = require('express')
const { createTodo, updateTodo } = require("./types")
const {todo} = require('./db') 
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())



app.post('/todo', async (req,res)=>{
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload)
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "you sent the wrong input"
    })
    return
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed:false
  })
  res.json({
    msg:"todo is created"
  })

})

app.get('/todo',async (req,res)=>{
  const alltodo = await todo.find({})
  res.json({
    alltodo
  })

})

app.put('/completed',async (req,res)=>{
  const updatepayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatepayload)
  if(!parsedPayload.success){
    res.status(411).json({
      msg:"you sent the wrong input"
    })
    return
  }
  await todo.updateOne({
    _id: req.body.id
  },{completed:true})

  res.json({
    msg:"todo marked as complete"
  })

})




app.listen(3000)



