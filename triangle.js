function getTriangleArea(a,h) {
if (a<=0 || h<=0) {
	console.log('unvalid number');
} else {
	return a*h/2;
};
};

console.log(getTriangleArea(10,6))
var Triangle1Area = getTriangleArea(2,5);
var Triangle2Area = getTriangleArea(7,8);