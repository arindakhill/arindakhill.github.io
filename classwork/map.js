var a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
  ];
  
  var a2 = a.map(function(s) {
    return s.length;
  });
  console.log("a2: " + a2);
  
  var a3 = a.map(s => s.length);
  console.log("a3: " + a3);
  console.log(typeof a2, typeof a3, typeof a)
  