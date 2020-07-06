/*

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]

*/


function __concat (...vars) {

	console.log('vars')
	console.log(vars)
	
	var result = []

	vars.map(obj => {
		if (!Array.isArray(obj)) {
			result = [...result, obj]
		} else {
			obj.map(o => {
				result = [...result, o]
			})
		}
	})

	return result

}


// var array = [1]
// var other = __concat(array,2,[3],[[4]])

// console.log(other)
// console.log(array)
