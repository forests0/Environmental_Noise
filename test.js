const request = require('request')

const url = "http://apis.data.go.kr/6260000/EnvironmentalNosie/getNoiseInfo"
const key = "mWY%2F97Mhx4CtfaDiroJfnd9m0vPzFQaWCaw9KFf%2FRkArL%2BxaGOsxEN37fBgrUM49WU6hXLQl6DrfJTY91cZNyw%3D%3D"
const resurl = `${url}?serviceKey=${key}&pageNo=1&numOfRows=10&resultType=json&inspecKb1=${encodeURIComponent('나')}&inspecKb2=${encodeURIComponent('일반주거1')}`

console.log(encodeURIComponent('가'), encodeURIComponent('일반주거1'))

request(resurl, (err, response, body) => {
  if(err) throw err;
  console.log(body);
})