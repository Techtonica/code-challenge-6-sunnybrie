// Given two input strings, s1 and s2, write code to check if s2 is a rotation of s1.
//
// Ex
//
// ```
// isRotation(“coding”, “ingcod”) // -> true
// ```
//
// ```
// isRotation(“help”, “phel”) // -> true
// ```

// ```
// isRotation(“github”, “git”)// -> false
// ```
//
// ```
// isRotation(“node”, “edon”) -> false
// ```
//
// Bonus: find a solution that can work even when the two strings have duplicate letters.

function isRotation(s1,s2){
    let result = false;

    //If strings aren't the same length, return false.
    if(s1.length !== s2.length){
        return false;
    }

    //convert strings to arrays
    let arr1 = s1.split("");
    let arr2 = s2.split("");
    let firstEl = arr1[0];
    console.log(arr1, arr2); //-TEST

    //This function cuts out a piece of the arrays to compare
    function dissect(item, index){
            console.log("Dissecting..."); //-TEST

            segLength = arr2.length - index;
            console.log(`Segment Length: ${segLength}`) //-TEST

            //Begin first dissection
            let a = (arr1.slice(0, segLength)).join(""); //array 1 segment
            let b = (arr2.slice(index)).join(""); //array 2 segment

            //compare segments
            let comp1 = (a === b);
            console.log(
            `Array 1 Segment: ${a} | Array 2 Segment: ${b}
            Compared: ${comp1}`
            ); //-TEST

            //Reassign to compare next segments
            a = (arr1.slice(segLength)).join(""); //array 1 segment
            b = (arr2.slice(0, index)).join(""); //array 2 segment

            //second comparison
            let comp2 = (a === b);
            console.log(
            `Array 1 Segment: ${a} | Array 2 Segment: ${b}
            Compared: ${comp2}`
            );//-TEST

            //If both comparisons come out true, return true.
            if(comp1 === true && comp2 === true){
                return true;
            }else{
                return false;
            };
        
    };

    //This calls dissect when it finds a match
    arr2.map(item => {
        if(item === firstEl){
            if(dissect(item, (arr2.indexOf(item)))){
                result = true;
            };
        };
    });

    return result;
};

console.log(`TEST: isRotation("butter", "terbut") : ${isRotation("butter", "terbut")}
EXPECTED: True`);

console.log(`TEST: isRotation("hello", "goodbye") : ${isRotation("hello", "goodbye")}
EXPECTED: False`);

console.log(`TEST: isRotation("asdfghjkl", "ghjklasdf") : ${isRotation("asdfghjkl", "ghjklasdf")}
EXPECTED: True`);

module.exports = isRotation;
