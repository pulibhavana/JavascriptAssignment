function summation(numbers)
{
    var sum = 0
    for(var index = 1;index < numbers.length; index++){
        sum = sum + numbers[index]
    }
    return sum
}

function main()
{
    var numbers = [1,23,67,89,100]
    console.log("The list of numbers is :" + numbers)
    result = getAverage(numbers)
    console.log("The average of list is " +result)
}

function getAverage(numbers)
{
    summation = numbers.reduce(sum)
    return summation/numbers.length
}
function sum(accumulator, currentvalue)
{
    return accumulator + currentvalue
}

main()