module.export = (length, width, callback) =>{

    if(length <= 0 || width <=0){
        setTimeout(() =>{
            callback(new Error("The dimension of the rectangle should be greater than zero"), null)
    
        }, 2000)
       }
    else{
        setTimeout(() =>{
        callback(null, 
            {
                 perimeter: () => 2*(length*width),
                 area: (length, width) => width*length
           })

        }, 2000)
          
    }

}













// const rectangle = {
//     perimeter: (length, width) =>2*(length*width),

//     area: (length, width) =>length*width

// }

// function solveRect(length, width){
//     console.log("Calculate the area and the perimeter of the rectangle with dimension: length = " + length + " and width = " +width)

//     if(length < 0 || width < 0){
//         console.log("The dimension of the rectangle should be greater than zero")
//     }

//     else{
//         console.log("This the perimeter of the rectangle: " + rectangle.perimeter(length, width))
//         console.log("This the area of the rectangle: " + rectangle.area(length, width))
//     }
// }

// solveRect(2,4);
// solveRect(3,5);
// solveRect(0,5);
// solveRect(-3,5);

//  module.exports = solveRect
