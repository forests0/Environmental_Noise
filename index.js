const express = require('express')
const fs = require('fs')
const app = express();
const request = require('request')
const path = require('path')
require('dotenv').config();
let port = 8090
var getInfoJson;
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));

app.get('/', (req,res) => {
  res.status(200).json({
    message : "/ Page"
  })
})

const apiRequest = (pageNo, inspecKb1, inspecKb2) => {
  let options = {
    url : "http://apis.data.go.kr/6260000/EnvironmentalNosie/getNoiseInfo",
    qs : {
      serviceKey : "mWY/97Mhx4CtfaDiroJfnd9m0vPzFQaWCaw9KFf/RkArL+xaGOsxEN37fBgrUM49WU6hXLQl6DrfJTY91cZNyw==",
      pageNo : pageNo,
      numOfRows : 10,
      resultType : "json",
      inspecKb1 : inspecKb1, // 법적구분 (가, 나, 다)
      inspecKb2 : inspecKb2, // 용도구분 (녹지, 종합병원, 일반주거(1,2,3), 준공업지역, 준공업, 상업)
    }
  }
  request.get(options, (err, response, body) => {
    if(err) throw err;
    //body : undefined
    //console.log(body)
    getInfoJson = JSON.parse(body);
    //res.json(response)
  })
}

app.get('/getInfo', (req,res) => {
  apiRequest(
    req.params.pageNo,
    req.params.inspecKb1,
    req.params.inspecKb2
    )
    res.json(getInfoJson)
})


app.listen(port, () => {
  console.log(`http://localhost/${port}`)
})