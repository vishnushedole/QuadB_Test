const connect = require('../Database/connection.js');
const mongoose = require('mongoose')
const axios = require('axios');

exports.getData = async (req,res,next)=>{
   let data = await axios.get('https://api.wazirx.com/api/v2/tickers');
   data = data.data;
   let arr = [];
   Object.keys(data).forEach((key,ind)=>{
      if(ind<10)
      arr.push(data[key]);
   })
   const db = mongoose.connection;
   const coll = await db.collection('storage');
   coll.insertMany(arr).then(result=>{
      console.log("success")
      res.json(arr);
   }).catch(err=>{
      console.log(err);
   })
}