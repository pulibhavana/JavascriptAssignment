
function selectEvenNumbers(numbers) {
    var listOfEvenNumbers = []
    for(var index = 0; index < numbers.length; index++)
    {
        number = numbers[index];
        if(isEven(number))
            listOfEvenNumbers.push(number)
    }
    return listOfEvenNumbers
}

function isEven(num)
{
    return (num%2 == 0);
}

function main() {
    var numbers = [10, 35, 54, 27, 1, 8];
    console.log("The given list is " + numbers)
    console.log("The even numbers from the list are")
    result = numbers.filter(number => number % 2 == 0)
    console.log(result)
}
main()