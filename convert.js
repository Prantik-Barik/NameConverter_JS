let str = "Krishna Chan--dra Barik--"

function toPascalCase(nameStr)
{
    nameStr = nameStr.replace(/[0-9-._]/g,"")
    nameStr = nameStr.toLowerCase().trim()
    let modifiedStr = ""
    nameStr.split(" ").forEach((nm)=>{
        modifiedStr += nm[0].toUpperCase() + nm.slice(1,nm.length)
    })
    console.log(modifiedStr)
}

function toCamelCase(nameStr)
{
    nameStr = nameStr.replace(/[0-9-._]/g,"")
    nameStr = nameStr.toLowerCase().trim()
    let modifiedStr = ""
    let splitStr=nameStr.split(" ")
    splitStr.forEach((nm,index)=>{
        if(index == 0 && splitStr.length!=1)
        modifiedStr = nm;
        else
        modifiedStr += nm[0].toUpperCase() + nm.slice(1,nm.length)
    })
    console.log(modifiedStr)
}

function toSnakeCase(nameStr)
{
    nameStr = nameStr.replace(/[0-9-._]/g,"")
    nameStr = nameStr.toLowerCase().trim()
    let modifiedStr = nameStr.replaceAll(' ','_') 
    console.log(modifiedStr)
}

function toScreamingSnakeCase(nameStr)
{
    nameStr = nameStr.replace(/[0-9-._]/g,"")
    nameStr = nameStr.toUpperCase().trim()
    let modifiedStr = nameStr.replaceAll(' ','_') 
    console.log(modifiedStr)
}

function toKebabCase(nameStr)
{
    nameStr = nameStr.replace(/[0-9-._]/g,"")
    nameStr = nameStr.toLowerCase().trim()
    let modifiedStr = nameStr.replaceAll(' ','-') 
    console.log(modifiedStr)
}

function toScreamingKebabCase(nameStr)
{
    nameStr = nameStr.replace(/[0-9-._]/g,"")
    nameStr = nameStr.toUpperCase().trim()
    let modifiedStr = nameStr.replaceAll(' ','-') 
    console.log(modifiedStr)
}

toCamelCase(str)
toPascalCase(str)
toSnakeCase(str)
toScreamingSnakeCase(str)
toKebabCase(str)
toScreamingKebabCase(str)