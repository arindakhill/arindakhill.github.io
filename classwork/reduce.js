function calc(multiplier, base, ...numbers) {
    var temp = numbers.reduce((accum, num) => accum + num);
  //  console.log(temp);
    return multiplier * temp;
  }
  
  var total = calc(2, 6, 10, 9, 8);
  //console.log("total: " + total);
  

  let array = [1,2,3,4,5]
   let answer = array.reduce((accum ,ele)=> accum+ele,10)
   console.log(answer)
