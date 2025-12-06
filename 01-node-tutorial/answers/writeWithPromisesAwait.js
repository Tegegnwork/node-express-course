const {writeFile ,readFile} = require('fs').promises
   async function writer (){
        try {
           await writeFile('temp.txt','This is Line 1\n')
           await writeFile('temp.txt','This is Line 2\n', {flag: 'a'})
           await writeFile('temp.txt','This is Line 3\n', {flag: 'a'})    
        
        console.log('The lines completed')
   }
   catch(err) {
        console.log("An error occurred: ", err)
    }
}

async function reader() {
  try {
    const data = await readFile('temp.txt', 'utf8');
    console.log('File content:');
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

async function readWrite() {
  await writer();
  await reader();
}

readWrite();
