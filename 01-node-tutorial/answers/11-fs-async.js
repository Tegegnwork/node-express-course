const { readFile, writeFile } = require('fs')
writeFile('./temporary/fileB.txt', 'This is Line 1\n', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('This Line 1 is completed')
  writeFile('./temporary/fileB.txt', 'This is Line 2\n',{flag:'a'} ,(err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('This Line 2 is completed')
    writeFile('./temporary/fileB.txt', 'This is Line 3\n',{flag:'a'},(err) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('This Line 3 is completed')
      }
    )
  })
})
console.log('All Line is completed')