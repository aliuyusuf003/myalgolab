// check maximum number

// maximNum(123)---->3;
// maximNum(498)---->9;


// var performance = window.performance
function findMax(array)
{
	
	array = array.toString();
    var max = 0; 
    for (counter=0; counter<array.length; counter++)
    {
    	
        if (array[counter] > max)
        {
            max = array[counter];
        }
    }
    return max;
}

// a = performance.now();
// console.log(a);
console.log(findMax(1238));