export const PI = 3.141592; 

export function getArea(radius) { 
	return PI * radius * radius;
}

export function getCircumference(radius) { 
	return 2 * PI * radius;
}

//또는 한 번에 내보내기 export{PI, getArea, getCircumference};