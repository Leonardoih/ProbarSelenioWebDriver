const calcular = (numA, numB) => {
  if (numA > numB) {
    console.log(`el numero ${numA} es mayor que ${numB}`);
  }
  if (numB > numA) {
    console.log(`el numero ${numB} es mayor que ${numA}`);
  }
  if(numA === numB){
    console.log("ambos numero son iguales");
    
  }
};

calcular(115, 215);