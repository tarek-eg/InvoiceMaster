const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/user');


const db = "mongodb://admintarek:tarekmostafa@ds155414.mlab.com:55414/invoice, {authMechanism: 'ScramSHA1'}"
mongoose.Promise = global.Promise;
mongoose.connect(db,function(err){
    if(err){
        console.error("Error!" + err);
    }
});


router.get('/users',function(req, res){
    console.log('get request for all users');
    user.find({})
    .exec(function(err, vedios){
        if (err){
            console.log('error retriving users');            
        }else{
            res.json(users)
            console.log(users)
        }
    });
});

router.get('/users/:id',function(req, res){
    console.log('get request for a single user');
    user.findById(req.params.id)
    .exec(function(err, user){
        if (err){
            console.log('error retriving user');            
        }else{
            res.json(user)
        }
    });    
});

router.post('/user', function(req, res){
    console.log('post a user');
    var newUser = new user();
    newUser.fullName = req.body.fullName;
    newUser.userName = req.body.userName;
    newUser.code = req.body.code;
    newUser.save(function(err, insertedUser){
        if(err){
            console.log("error saving user");
        }else{
            res.json(insertedUser);
        }
    })
});


router.put('/user/:id',function(req, res){
    console.log('Update a user');
    user.findByIdAndUpdate(req.params.id,
    {
        $set: {fullName: req.body.fullName, userName: req.body.userName, code: req.body.code}
    },
    { new: true},
    function(err, updatedUser){
        if(err){
            res.send("Error updating user");
        }else{
            res.json(updatedUser);
        }            
    }
)
});

router.delete('/user/:id', function(req,res){
    console.log('user is deleted')
    user.findByIdAndRemove(req.params.id, function(err, deletedUser){
        if(err){
            res.send('Error deleting user');
        }else{
            res.json(deletedUser);
        }
    })
})

module.exports = router;