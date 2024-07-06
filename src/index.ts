import express from 'express';

const app = express ();

//using middleware
app.use(express.json());


//connections and listeners
app.listen(5000,() => console.log("Server Open"));