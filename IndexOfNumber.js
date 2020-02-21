function main()
{
    numbersList = [10,20,30,10,10,20,40,40,-10]
    result = numbersList.findIndex(number => number == 40)
    if(result != -1)
        console.log("The index of number is " +result)
    else
        console.log("The number doesnt exist")
}

main()