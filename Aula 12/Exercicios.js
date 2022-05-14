let varA = 'A';
let varB = 'B';
let varC = 'C';
const VarAtemp = varA;

 varA = varB;  
 varB = varC, 
 varC = VarAtemp;
 console.log(varA, varB, varC);
