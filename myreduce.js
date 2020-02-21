function myreduce(reducer, array , initialvalue=0)
{
    var accum = initialvalue
    for(var index = 0;index < array.length;index++)
        accum = reducer(accum, array[index])
    return accum
}

function input()
{
    array = [1,2,3,4]
    console.log(myreduce(reducer, array,10))
}

function reducer(accumulator, currentvalue)
{
    return accumulator + currentvalue
}

input()
