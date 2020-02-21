function extract(number)
{
    var digitsarray = []
    while(number!=0)
    {
        digit = number % 10
        digitsarray.unshift(digit)
        number = Math.floor(number / 10)

    }
    return digitsarray
}

function main()
{
    number = 20345
    console.log(extract(number))
}
main()