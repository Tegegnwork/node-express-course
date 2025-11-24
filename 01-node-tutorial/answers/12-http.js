const http = require('http')
const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.end('Welcome to our home page!')
  } else if (req.url === '/about') {
    res.end('This is about page.')
  } else if (req.url ==='/contact'){
    res.end('web@yahoo.com')
  } else {
    res.end(`404 the page not found`)
  }
})

    server.listen(3000)


