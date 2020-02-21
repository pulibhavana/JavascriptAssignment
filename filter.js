function myfilter(array)
{
    var resultantarray = []
    for(var index = 0;index < array.length;index++) {
        number = array[index]
        if (filtercondition(number))
            resultantarray.push(number)
    }
    return resultantarray
}

function input()
{
    array = [5,10,34,56]
    console.log(myfilter(filtercondition ,array))
}

function filtercondition(number)
{
    return number > 10
}

input()