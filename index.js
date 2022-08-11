
const rect = require('./rectangle')


function solveRect(length, width){

    console.log("Solve for rectangle with length = " + length + " and  width = " + width);
    rect(length, width, (err, rectangle) =>{
        if(err){
            console.log("ERROR: ", err.message)
        }

        else{
            console.log("The perimeter of a rectangle with length = " + length + " and width" + width + " is: " + rectangle.perimeter())
            
            console.log("The area of a rectangle with length = " + length + " and width" + width + " is: " + rectangle.area())
        }

    })

    console.log("This statment excutes after the rect()")
}





solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);



