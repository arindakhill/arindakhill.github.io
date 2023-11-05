const a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium" 
   ]; 
   const a2 = a.filter(function(s) {return s.length > 7 }); 
   console.log("a2: " + a2); 
   
   const a3 = a.filter(s =>  s.length  > 10 ); 
   console.log("a3: " + a3); 
    
   
   const a4 = a.find( s => s.length > 10 );
   console.log("a4: " + a4); 
   
   const a5 = a.findIndex( s => s.length > 10 );
   console.log("a5: " + a5); 
   