function isDescendingOrder(array)
{

    for(var index = 0;index < array.length - 1;index++){
        if(array[index] < array[index+1])
            return false
    }
    return true
}

function main() {
    array = [10, 9, 8, 7]
    console.log("The numbers in the list are :" + array)
    console.log(array.every(isDescending))
}

function isDescending(element , index, array)
{
    if(index == array.length-1)
        return true
    return element > array[index+1]
}

main()
