function isAscendingOrder(array)
{

    for(var index = 0;index < array.length - 1;index++){
        if(array[index] > array[index+1])
            return false
    }
    return true
}

function main() {
    array = [10, 34, 56, 86]
    console.log("The numbers in the list are :" + array)
    console.log(array.every(isAscending))
}

function isAscending(element , index, array)
{
    if(index == array.length-1)
        return true
    return element < array[index+1]
}

main()
