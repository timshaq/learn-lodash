/*

_.chunk(array, [size=1])

_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

*/


// function getValid () {
// 	var isArray = Array.isArray(array);
// 	var isNum = typeof(size) === 'number';

// 	if (isArray && isNum) {
// 		return 1
// 	} else {
// 		return 0
// 	}

// }


function __chunk (arr, size) {
	var i = 0;
	const result = [];
	var tempArr = [];
	arr.map((obj,cur) => {
		if (i!=size && cur+1!=arr.length) {
			tempArr.push(obj)
		} else if (cur+1!=arr.length) {
			result.push(tempArr)
			i=0;
			tempArr = [obj]
		} else if (tempArr.length != size) {
			tempArr.push(obj)
			result.push(tempArr)
			i=0;
		} else {
			result.push(tempArr)
			tempArr = [obj]
			result.push(tempArr)
		}
		i++;
	})
	return result
}

// const array = [1,2,3,4,5,6,7,8,9];
// console.log('CHUNK');
// console.log(chunk(array,4));