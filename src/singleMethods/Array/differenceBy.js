/*

_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
=> [1.2]
 
The `_.property` iteratee shorthand.
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
=> [{ 'x': 2 }]

*/



function __differenceBy (...arr) {

	var result = []

	const sameValueZero = (x, y) => x === y || (Number.isNaN(x) && Number.isNaN(y))

	var example = arr.shift()

	var iteratee = arr.pop()

	var valueList = []

	arr.map( (obj,i) => {
		try {
			obj.map(val => {
				if (typeof iteratee === 'function') {
					valueList = [...valueList,iteratee(val)]
				} else {
					valueList = [...valueList,val[iteratee]]
				}
				
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

				if (typeof iteratee === 'function') {
					var asd = sameValueZero(iteratee(obj),valueList[i])
				} else {
					var asd = sameValueZero(obj[iteratee],valueList[i])
				}

				
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

// [{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'
// console.log(__differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor))