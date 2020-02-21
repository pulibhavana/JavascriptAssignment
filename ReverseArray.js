function reverseArray(array)
{
    var reverseArray = []
    for(var index = array.length -1;index >= 0;index--){
        reverseArray.push(array[index])
    }
    return reverseArray
}

function main() {
    numbers = [23,54,32,12,10]
    console.log("The numbers in the array is :"+numbers)
    console.log("The reversed array is :" + numbers.reverse())
}

main()