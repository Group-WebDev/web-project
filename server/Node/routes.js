const express = require('express')
const app = express()
const router = express.Router()

const Item = require('../api/mongoDB')

router.route('/add').post((req, res)=>{
    var item = new Item(req.body);
        item.save()
        .then(item =>{
            res.status(200).json({'item':'item added successfully'})
        })
        .catch(err=>{
            res.status(400).json("unable to save item")
        })
})

router.route('/').get((req,res)=>{
    Item.find((err, items)=>{
        if(err){
            console.log(err)
        }else{
            res.json(items)
        }
    })
})

module.exports = router