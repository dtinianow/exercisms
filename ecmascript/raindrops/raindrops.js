class Raindrops {
  convert(num) {
    let output = '';

    if (num % 3 === 0) output += 'Pling';
    if (num % 5 === 0) output += 'Plang';
    if (num % 7 === 0) output += 'Plong';
    if (output === '') output += num

    return output;
  }
}

export default Raindrops;
