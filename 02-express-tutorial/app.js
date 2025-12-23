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
           return res.status(404).json({ error: 'Product not found' })
          }
          res.json(product)
        })
        app.get('/api/v1/query', (req,res) => {
  const {search,limit,minPrice,maxPrice }= req.query
  let productsResult = [...products]

  
  if (search) {
    productsResult = productsResult.filter((product) => product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }
     // Apply limit
  if(limit ){
     const lim = Number(limit)
     if(!isNaN(lim) && lim > 1)
    { productsResult= productsResult.slice(0, lim)
    }
  }
    if(minPrice) {
      const min = Number(minPrice)
      if(!isNaN(min)){
      productsResult = productsResult.filter((product)=> product.price >= min)
    }
  }
if(maxPrice) {
  const max = Number(maxPrice)
  if(!isNaN(max)){
      productsResult = productsResult.filter((product)=> product.price <= max)
  }
}

  res.json(productsResult)
        
      })
app.all('*', (req, res) => {
  res.status(404).send('The page not found')
})
app.listen(3000,()=>{
        console.log('server is running  on port 3000.....')
})