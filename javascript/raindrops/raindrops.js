var Raindrops = function() {};

Raindrops.prototype.convert = function(input) {
  var output = '';

  if (input % 3 === 0) output += 'Pling';
  if (input % 5 === 0) output += 'Plang';
  if (input % 7 === 0) output += 'Plong';

  return output || input.toString();
};

module.exports = Raindrops;
