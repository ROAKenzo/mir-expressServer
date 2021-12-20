const express=require('express');
const app = express();
const PORT=4000
//Middlewares
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send("<h1>Hello from one of the Middlewares</h1>")
})
app.get('/book',(req, res) => {
  res.status(200).send('<form action="/list-books" method="POST"><input type="text" name="book"><button type="submit">Enter a book name</button></form>')
} )
app.post('/list-books', (req, res) => {
  console.log(req.body)
  res.status(300).redirect("/")
})
app.patch('/book/:bookId', (req, res) => {
  const {bookId} = req.params
  res.json({msg:"updated",book:bookId})
})
app.delete('/book/:bookId', (req, res) => {
  const {bookId} = req.params
  res.json({msg:"deleted",book:bookId})
})

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));
