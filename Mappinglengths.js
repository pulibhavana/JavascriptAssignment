function mymap(nameslist)
{
    nameslength = []
    for(var index = 0;index < nameslist.length;index++){
        var name = nameslist[index]
        nameslength.push(name.length)
    }
    return nameslength
}

function main()
{
    var nameslist = ["bhavana", "lohithamallakuntla", "tejaswini", "mahathi", "prerana"]
    console.log("The list of names is "+ nameslist)
    console.log(nameslist.map(word => word.length))
}

main()