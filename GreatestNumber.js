function maxvalue(numbers)
{
    maxvalue=numbers[0]
    for(var index = 1;index < numbers.length; index++){
        if(numbers[index] > maxvalue)
            maxvalue = numbers[index]
    }
    return maxvalue
}

function main()
{
    var numbers = [1,23,89,69,100]
    console.log("The list of numbers is :" + numbers)
    console.log("The max value from the list is:")
    result = numbers.sort(function(num1,num2){return num1-num2})
    console.log(result[numbers.length-1])
}
main()