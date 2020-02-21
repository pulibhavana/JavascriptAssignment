function minvalue(numbers)
{
    minvalue=numbers[0]
    for(var index = 1;index < numbers.length; index++){
        if(numbers[index] < minvalue)
            minvalue = numbers[index]
    }
    return minvalue
}

function main()
{
    var numbers = [1,23,89,69,100]
    console.log("The list of numbers is :" + numbers)
    console.log("The min value from the list is:")
    result = numbers.sort(function(num1,num2){return num2 - num1})
    console.log(result[numbers.length-1])
}

main()