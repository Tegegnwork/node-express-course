const express = require('express')
const path = require('path')
const app  = express()
const { products } = require("./data");

app.use(express.static("./public"))
app.get('/about', (req, res) =>{
  res.send('<h2>about page</h2>')
        })
        app.get('/api/v1/test',(req,res) =>{
                res.json({ message: "It worked!" })
        })
        app.get('/api/v1/products',(req,res)=>{
          res.json(products)
        })
        app.get('/api/v1/products/:productID',(req,res)=>{
          //res.json(req.params)
          const idToFind = parseInt(req.params.productID) 
         const product = products.find((p) => p.id === idToFind)
          if(!product){
            res.status(404).send('The product not found')
          }
          res.json(product)
        })
        app.get('/api/v1/query', (req,res) => {
  const {search,limit,minPrice,maxPrice }= req.query
  let result = [...products]
  if (search) {
    result = result.filter((product) => product.name.includes(search))
  }
     // Apply limit
  if(limit ) { result= result.slice(0, parseInt(limit)
  
    )}
    if(minPrice) {
      result = result.filter((product)=> product.price >= parseFloat(minPrice))
    }
if(maxPrice) {
      result = result.filter((product)=> product.price < parseFloat(maxPrice))
    }
  res.json(result)
   })

app.all('*', (req, res) => {
  res.status(404).send('The page not found')
})
app.listen(3000,()=>{
        console.log('server is running  on port 3000.....')
})