const {people} = require('../data')
const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}
 const createPerson = (req,res) =>{
        const { name } =req.body
        if(!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
      
}
   const newPerson = {
    id: people.length + 1,
    name,
  }

  people.push(newPerson)

  res.status(201).json({
    success: true,
    person: newPerson,
    
  })
}
  const deletePerson = (req, res) => {
  const id = Number(req.params.id)

  const person = people.find((person)=> person.id === id)

  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `No person with id ${id}`
    })
  }

   const newPeople = people.filter((person)=> person.id !== id)

   return res.status(200).json({
    success: true,
    data:newPeople
  })
}
module.exports = {
   getPeople,
   createPerson,
   deletePerson    
}