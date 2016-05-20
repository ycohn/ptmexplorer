module.exports = {
draw_ruler: function(aaChain) {

var d3 = require('d3');
  
var seq = aaChain;

var seqlength = seq.length;
console.log(seqlength);

var margin = {top: 100, right: 100, bottom: 100, left: 100},
    width = 860 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.identity()
    .domain([0, seqlength]);

var xAxis = d3.svg.axis()
    .scale(x)
    .ticks(seqlength%100)
    .orient("bottom");

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
    .attr("class", "x axis")
    .call(xAxis);
 }
}
// var myString="gene.txt"  
// var length="myString.length" 