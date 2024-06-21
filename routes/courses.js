
const app = require("express");

// const {route } = require("express/lib/application");

const Course = require("../models/courses");
const mongoose = require("mongoose");

const router = app.Router();

// This is get all courses  api
router.get("/", async (req,res) =>{ 
    try{
     const courses = await Course.find()

        res.status(200).json({
            message : 'Courese get Successfully ',
            courses: courses
        })

        // res.json(courses)

    }catch(err){
        res.json(err)
    }
} )

// This is get 1 course using Course Id  api
router.get("/:courseId", async (req,res) =>{ 
    try{
        const courseID = req.params.courseId;
        const course = await Course.findById(courseID)
        res.json(course);
    }catch(err){
        res.json(err)
    }
})

// This is create course using post api
router.post("/", async (req,res) =>{ 
    try{
        console.log("K____________----  ", req.body);
       const course =  Course.create(req.body);
        res.json(course);
    }catch(err){
        res.json(err)
    }
})

// This is delete api
router.delete("/:courseId", async (req,res) =>{ 
    try{
   await Course.remove({_id: req.params.courseId})

        res.status(200).json({
            message : 'Courese Delete Successfully '
        })

    }catch(err){
        res.json(err)
    }
} )


module.exports = router;
