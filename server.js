var express = require('express');
var fs = require('fs');
var request = require('request');
var math = require('mathjs');
var app = express();

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1);  // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    math.sin(dLat / 2) * math.sin(dLat / 2) +
    math.cos(deg2rad(lat1)) * math.cos(deg2rad(lat2)) *
    math.sin(dLon / 2) * math.sin(dLon / 2)
    ;
  var c = 2 * math.atan2(Math.sqrt(a), math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (math.PI / 180)
}



// function(){
//     calls db and selects only from range of lat/lon that are within the requisite area
// }
// function(){
//     sort the stores based on distance
// }
// function(){
//     compute the total distance of each store and closest branch return best store
// }

app.listen(process.env.PORT || '3000', console.log("connected"));
exports = module.exports = app;