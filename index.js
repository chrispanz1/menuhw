

let ownerName='chris';
let specialPrice=30;


// lets make an object that stores the breakfast elements//

const breakfastFoods={

    pancakes:"5 dollars",
    omelet:"7 dollars",
    frenchToast:"9 dollars"
    
}


// next we can make an object stores lunch and dinner element//
const lunchDinnerFoods={
    burger:"14 dollars",
    wrap:"11 dollars",
    Pizza:"15 dollars"

}
// lastly we will just do an array for the brunch
let specialArray=['lobster','swordfish','calamari','shrimp']

//now lets begin building the functions that will apply after clicking the buttons//
const breakfastFunction=()=>{
  console.log(breakfastFoods);
  

}
const lunchDinnerFunction=()=>{
    console.log(lunchDinnerFoods);
    
  
  }
  //lets iterate thru the array with a for loop and then console.log each element//

  const mealSpecials=()=>{
    
    for (let i = 0; i < specialArray.length; i++) {
        console.log(specialArray[i])

        
      }
    
  }



