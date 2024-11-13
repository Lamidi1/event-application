const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bcrypt = require ("bcrypt")

const eventModel = require("./models/eventModel");
const venueModel = require("./models/venueModel");
 const userModel = require ("./models/userModel");
const upcomingModel = require ("./models/upcomingModel");
const djModel = require ("./models/djModel");
const mcModel = require ("./models/mcModel");
const comedianModel = require ("./models/comedianModel");
const dancerModel = require ("./models/dancerModel");
const musicModel = require ("./models/musicModel");
const soundModel = require ("./models/soundModel");
const evtModel = require ("./models/evtModel");
const allModel = require ("./models/allModel");
const discovervenueModel = require ("./models/discovervenueModel");
const signinuserModel = require ("./models/SigninuserModel");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// routes
// ADDING EVENT.MODEL...................................................

app.post("/event", async (req, res) => {
  try {
    const event = await eventModel.create(req.body);

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //  console.log(req.body)
});


// GET ALL EVENTS
app.get("/events",async(req,res)=>{
    try{
    const events = await eventModel.find()
    
    res.status(200).json(events)

//  console.log(events)
    } catch(error){
        res.status(500).json({error:error.message})
    }
  })

  // GET A SINGLE EVENT
  app.get(`/event/:id`,async(req,res)=>{
      const {id} = req.params

      try{
          const event = await eventModel.findById(id)
          res.status(200).json(event)

      } catch (error){
          res.status(500).json({error:error.message})
      }
  }) 


// app.get("/", (req, res) => {
//   res.send("<h1>welcome to event planning</h1>");
// });

  //  VENUE MODEL.........................................
  // routes
// ADDING VENUE

app.post("/venue", async (req, res) => {
  try {
    const venue = await venueModel.create(req.body);

    res.status(200).json(venue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //  console.log(req.body)
});

// // GET ALL VENUES
app.get("/venues",async(req,res)=>{
  try{
  const venues = await venueModel.find()
  
  res.status(200).json(venues)

//  console.log(venues)
  } catch(error){
      res.status(500).json({error:error.message})
  }
})

 // GET A SINGLE VENUE
 app.get(`/venue/:id`,async(req,res)=>{
  const {id} = req.params

  try{
      const venue = await venueModel.findById(id)
      res.status(200).json(venue)

  } catch (error){
      res.status(500).json({error:error.message})
  }
}) 
//  app.get("/",(req,res) =>{
//   res.send("<h2>you are welcome to larva events</h2>");
//  });


 //  DJ MODEL.........................................
  // routes
// ADDING DJ

app.post("/dj", async (req, res) => {
  try {
    const dj = await djModel.create(req.body);

    res.status(200).json(dj);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //  console.log(req.body)
});

// // GET ALL DJS
app.get("/djs",async(req,res)=>{
  try{
  const djs = await djModel.find()
  
  res.status(200).json(djs)

//  console.log(djs)
  } catch(error){
      res.status(500).json({error:error.message})
  }
})

// GET A SINGLE DJ
app.get(`/dj/:id`,async(req,res)=>{
  const {id} = req.params

  try{
      const dj = await djModel.findById(id)
      res.status(200).json(dj)

  } catch (error){
      res.status(500).json({error:error.message})
  }
}) 
 app.get("/",(req,res) =>{
  res.send("<h2>you are welcome to dj events</h2>");
 });


  //  MC MODEL.........................................
  // routes
// ADDING MC

app.post("/mc", async (req, res) => {
  try {
    const mc = await mcModel.create(req.body);

    res.status(200).json(mc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //  console.log(req.body)
});

// // GET ALL MCS
app.get("/mcs",async(req,res)=>{
  try{
  const mcs = await mcModel.find()
  
  res.status(200).json(mcs)

//  console.log(mcs)
  } catch(error){
      res.status(500).json({error:error.message})
  }
})

// GET A SINGLE MC
app.get(`/mc/:id`,async(req,res)=>{
  const {id} = req.params

  try{
      const mc = await mcModel.findById(id)
      res.status(200).json(mc)

  } catch (error){
      res.status(500).json({error:error.message})
  }
}) 

 app.get("/",(req,res) =>{
  res.send("<h2>you are welcome to mc events</h2>");
 });


  //  COMEDIAN MODEL.........................................
  // routes
// ADDING COMEDIAN

app.post("/comedian", async (req, res) => {
  try {
    const comedian = await comedianModel.create(req.body);
    res.status(200).json(comedian);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //  console.log(req.body)
});

// // GET ALL COMEDIANS
app.get("/comedians",async(req,res)=>{
  try{
  const comedians = await comedianModel.find()
  res.status(200).json(comedians)

//  console.log(comedians)
  } catch(error){
      res.status(500).json({error:error.message})
  }
})

// GET A SINGLE COMEDIAN
app.get(`/comedian/:id`,async(req,res)=>{
  const {id} = req.params

  try{
      const comedian = await comedianModel.findById(id)
      res.status(200).json(comedian)

  } catch (error){
      res.status(500).json({error:error.message})
  }
}) 
 app.get("/",(req,res) =>{
  res.send("<h2>you are welcome to comedian events</h2>");
 });


 //  DANCER MODEL.........................................
  // routes
// ADDING DANCER

app.post("/dancer", async (req, res) => {
  try {
    const dancer = await dancerModel.create(req.body);
    res.status(200).json(dancer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //  console.log(req.body)
});

// // GET ALL DANCERS
app.get("/dancers",async(req,res)=>{
  try{
  const dancers = await dancerModel.find()
  res.status(200).json(dancers)
//  console.log(dancers)
  } catch(error){
      res.status(500).json({error:error.message})
  }
})

// GET A SINGLE DANCER
app.get(`/dancer/:id`,async(req,res)=>{
  const {id} = req.params
  try{
      const dancer = await dancerModel.findById(id)
      res.status(200).json(dancer)

  } catch (error){
      res.status(500).json({error:error.message})
  }
}) 
 app.get("/",(req,res) =>{
  res.send("<h2>you are welcome to dancer events</h2>");
 });

  //  MUSIC MODEL.........................................
  // routes
// ADDING MUSIC

app.post("/music", async (req, res) => {
  try {
    const music = await musicModel.create(req.body);
    res.status(200).json(music);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //  console.log(req.body)
});

// // GET ALL MUSICS
app.get("/musics",async(req,res)=>{
  try{
  const musics = await musicModel.find()
  res.status(200).json(musics)
//  console.log(musics)
  } catch(error){
      res.status(500).json({error:error.message})
  }
})

// GET A SINGLE MUSIC
app.get(`/music/:id`,async(req,res)=>{
  const {id} = req.params

  try{
      const music = await musicModel.findById(id)
      res.status(200).json(music)

  } catch (error){
      res.status(500).json({error:error.message})
  }
}) 

 app.get("/",(req,res) =>{
  res.send("<h2>you are welcome to music events</h2>");
 });


  //  SOUND MODEL.........................................
  // routes
// ADDING SOUND

app.post("/sound", async (req, res) => {
  try {
    const sound = await soundModel.create(req.body);
    res.status(200).json(sound);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //  console.log(req.body)
});

// // GET ALL SOUNDS
app.get("/sounds",async(req,res)=>{
  try{
  const sounds = await soundModel.find()
  res.status(200).json(sounds)
//  console.log(sounds)
  } catch(error){
      res.status(500).json({error:error.message})
  }
})

// GET A SINGLE SOUND
app.get(`/sound/:id`,async(req,res)=>{
  const {id} = req.params
  try{
      const sound = await soundModel.findById(id)
      res.status(200).json(sound)

  } catch (error){
      res.status(500).json({error:error.message})
  }
}) 
 app.get("/",(req,res) =>{
  res.send("<h2>you are welcome to sound events</h2>");
 });

// .................
  //  EVTMODEL.........................................
  // routes
// ADDING EVT

app.post("/evt", async(req, res) => {
  try {
    const evt = await evtModel.create(req.body);
    res.status(200).json(evt);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //  console.log(req.body)
});

// // GET ALL EVTS
app.get("/evts",async(req,res)=>{
  try{
  const evts = await evtModel.find()
  res.status(200).json(evts)
//  console.log(evts)
  } catch(error){
      res.status(500).json({error:error.message})
  }
})

// GET A SINGLE EVT
app.get(`/evt/:id`,async(req,res)=>{
  const {id} = req.params
  try{
      const evt = await evtModel.findById(id)
      res.status(200).json(evt)

  } catch (error){
      res.status(500).json({error:error.message})
  }
}) 

 app.get("/",(req,res) =>{
  res.send("<h2>you are welcome to evt events</h2>");
 });

// .................
  //  ALLMODEL.........................................
  // routes
// ADDING ALL

app.post("/all", async(req, res) => {
  try {
    const all = await allModel.create(req.body);
    res.status(200).json(all);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //  console.log(req.body)
});

// // GET ALL ALLS
app.get("/alls",async(req,res)=>{
  try{
  const alls = await allModel.find()
  res.status(200).json(alls)
//  console.log(alls)
  } catch(error){
      res.status(500).json({error:error.message})
  }
})

// GET A SINGLE ALL
app.get(`/all/:id`,async(req,res)=>{
  const {id} = req.params
  try{
      const all = await allModel.findById(id)
      res.status(200).json(all)

  } catch (error){
      res.status(500).json({error:error.message})
  }
}) 

 app.get("/",(req,res) =>{
  res.send("<h2>you are welcome to all events</h2>");
 });

  //  SIGNINMODEL.........................................
  // routes
// ADDING SIGNIN


app.post("/signinuser", async(req, res) => {
  // var {email, password} = req.body;
  // if (!email || !password) {
  //   res.status(404);
  //   throw new Error("All fields are Mandatory!");
  // }
  // try {
  //   const signinuser = await signinuserModel.create(req.body);
  //   res.status(200).json(signinuser);
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }

  console.log("posted");
  const {password} =req.body;
  const hashedpassword = await bcrypt.hash(password,10)
  try {
    const signinuser = await signinuserModel.create({
      ...req.body,
      password:hashedpassword,
    });
    // .......
    res.status(200).json(signinuser);
    console.log(signinuser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //  console.log(req.body)
});

// // GET ALL SIGNIN
app.get("/signinusers",async(req,res)=>{
  try{
  const signinusers = await signinuserModel.find()
  res.status(200).json(signinusers)
//  console.log(signins)
  } catch(error){
      res.status(500).json({error:error.message})
  }
})

// GET A SINGLE SIGNIN
app.get(`/signinuser/:id`,async(req,res)=>{
  const {id} = req.params
  try{
      const signinuser = await signinuserModel.findById(id)
      res.status(200).json(signinuser)

  } catch (error){
      res.status(500).json({error:error.message})
  }
}) 

 app.get("/",(req,res) =>{
  res.send("<h2>you are welcome to signinuser events</h2>");
 });







  //  USER MODEL.............................................................
  // ADDING USER
  app.post("/user", async (req, res) => {
// ....
// var {name,username,gender,nationality,email,dateofBirth, password} = req.body;
// if (!name|| !username|| !gender|| !nationality|| !dateofBirth|| !email || !password) {
//   res.status(404);
//   throw new Error("All fields are Mandatory!");
// }

    // .......Hashed password
    console.log("posted");
    const {password} =req.body;
    const hashedpassword = await bcrypt.hash(password,10)

    try {
      const user = await userModel.create({
        ...req.body,
        password:hashedpassword,
      });

      res.status(200).json(user);
      console.log(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    //   console.log(req.body)
  });

  // GET ALL USERS
app.get("/users",async(req,res)=>{
  try{
  const users = await userModelModel.find()
  
  res.status(200).json(users)

  // console.log(users)
  } catch(error){
      res.status(500).json({error:error.message})
  }
})

// GET A SINGLE USER
app.get(`/user/:id`,async(req,res)=>{
  const {id} = req.params

  try{
      const user = await userModel.findById(id)
      res.status(200).json(user)

  } catch (error){
      res.status(500).json({error:error.message})
  }
}) 

  app.get("/",(req,res) =>{
    res.send("<h2> welcome to lambass event planning</h2>");
   });

 //  UPCOMING MODEL.............................................................
  // ADDING UPCOMONG
  app.post("/upcoming", async (req, res) => {
    try {
       const upcoming = await upcomingModel.create(req.body);
       res.status(200).json(upcoming);
     } catch (error) {
       res.status(500).json({ error: error.message });
    }
//     //  console.log(req.body)
  });

  // GET ALL UPCOMINGS
  app.get("/upcomings",async(req,res)=>{
    try{
    const upcomings = await upcomingModel.find()
    
    res.status(200).json(upcomings)
  
  //  console.log(upcomings)
    } catch(error){
        res.status(500).json({error:error.message})
    }
  })

  // GET A SINGLE UPCOMING
app.get(`/upcoming/:id`,async(req,res)=>{
  const {id} = req.params

  try{
      const upcoming = await upcomingModel.findById(id)
      res.status(200).json(upcoming)

  } catch (error){
      res.status(500).json({error:error.message})
  }
}) 
  
app.get("/",(req,res) =>{
    res.send("<h2> welcome to upcoming</h2>");
      });
   
//  DISCOVER VENUE MODEL.............................................................
  // ADDING DISCOVER
  app.post("/discovervenue", async (req, res) => {
    try {
       const discovervenue = await discovervenueModel.create(req.body);
       res.status(200).json(discovervenue);
     } catch (error) {
       res.status(500).json({ error: error.message });
    }
//     //  console.log(req.body)
  });

  // GET ALL DISCOVERVENUES
  app.get("/discovervenues",async(req,res)=>{
    try{
    const discovervenues = await discovervenueModel.find()
    
    res.status(200).json(discovervenues)
  
  //  console.log(discovervenues)
    } catch(error){
        res.status(500).json({error:error.message})
    }
  })
// ....

  // GET A SINGLE DISCOVER VENUE
  app.get(`/discovervenue/:id`,async(req,res)=>{
    const {id} = req.params
  
    try{
        const discovervenue = await discovervenueModel.findById(id)
        res.status(200).json(discovervenue)
  
    } catch (error){
        res.status(500).json({error:error.message})
    }
  }) 
    
  app.get("/",(req,res) =>{
      res.send("<h2> welcome to discover</h2>");
        });







// connect to mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
     console.log("connected succesfully")
    app.listen(5000, () => {
      
      console.log("app listen to port 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
