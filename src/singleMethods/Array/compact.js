/*

_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

*/

function __compact (arr) {
	const result = [];
	arr.map(obj => {
		(Boolean(obj)) ? result.push(obj) : '';
	});
	return result;
}

const arr = ["string", " ", "", 9, 1, 0, -1, 1.5, 1/10, NaN, undefined, null, false, true];
console.log(__compact(arr));