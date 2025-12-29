const express = require('express')
const router = express.Router()
 const {

   getPeople,
   createPerson,
   deletePerson

 } = require('../controllers/people')

 //router.get('/', getPeople)

 //router.post('/',createPerson )

//router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson)

router.route('/:id').delete(deletePerson)

module.exports = router