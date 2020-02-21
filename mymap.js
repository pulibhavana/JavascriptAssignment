function mymap(mapping, array)
{
    var resultantarray = []
    for(var index = 0;index < array.length;index++){
        var number = array[index]
        var temp = mapping(number)
        resultantarray.push(temp)
    }
    return resultantarray
}

function input()
{
    array =[1,2,3]
    console.log(mymap(mapping, array))
}

function mapping(number)
{
    return number * 2
}

input()
