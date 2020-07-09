/*


_.difference([2, 1], [2, 3]);
// => [1]

*/



function __difference (...arr) {

	var result = []

	const sameValueZero = (x, y) => x === y || (Number.isNaN(x) && Number.isNaN(y))


	var example = arr.shift()

	var valueList = []

	arr.map( (obj,i) => {
		try {
			obj.map(val => {
				valueList = [...valueList,val]
			})
		}
		catch {
			result = []
			return result
		}
		
	})

	try {

		example.map( (obj,counter) => {
			var status = true
			for (var i = 0; i < valueList.length; i++ ) {
				var asd = sameValueZero(obj,valueList[i])
				if (asd) {
					status = false
				}
			}
			if (status) {
				result = [...result,obj]
			}
		})

	}
	catch {
		result = []
		return result
	}


	return result

}

// array1 = [2,1]
// array2 = [2,3]

// console.log(__difference(array1,array2))