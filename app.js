const myInput = document.querySelector('.name-input')
const myBtn = document.querySelector('.btn')
const camelContainer = document.querySelector('.camelCase')
const pascalContainer = document.querySelector('.pascalCase')
const snakeContainer = document.querySelector('.snakeCase')
const SSnakeContainer = document.querySelector('.SSnakeCase')
const kebabContainer = document.querySelector('.kebabCase')
const SKebabContainer = document.querySelector('.SKebabCase')
let myName = ""
myBtn.addEventListener('click',()=>{
    myName = myInput.value;
    camelContainer.innerHTML = toCamelCase(myName)
    pascalContainer.innerHTML = toPascalCase(myName)
    snakeContainer.innerHTML = toSnakeCase(myName)
    SSnakeContainer.innerHTML = toScreamingSnakeCase(myName)
    kebabContainer.innerHTML = toKebabCase(myName)
    SKebabContainer.innerHTML = toScreamingKebabCase(myName)
})

function toPascalCase(nameStr)
{
    nameStr = nameStr.replace(/[0-9-._]/g,"")
    nameStr = nameStr.toLowerCase().trim()
    let modifiedStr = ""
    nameStr.split(" ").forEach((nm)=>{
        modifiedStr += nm[0].toUpperCase() + nm.slice(1,nm.length)
    })
    
    return modifiedStr
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
    
    return modifiedStr
}

function toSnakeCase(nameStr)
{
    nameStr = nameStr.replace(/[0-9-._]/g,"")
    nameStr = nameStr.toLowerCase().trim()
    let modifiedStr = nameStr.replaceAll(' ','_') 
    
    return modifiedStr
}

function toScreamingSnakeCase(nameStr)
{
    nameStr = nameStr.replace(/[0-9-._]/g,"")
    nameStr = nameStr.toUpperCase().trim()
    let modifiedStr = nameStr.replaceAll(' ','_') 
    
    return modifiedStr
}

function toKebabCase(nameStr)
{
    nameStr = nameStr.replace(/[0-9-._]/g,"")
    nameStr = nameStr.toLowerCase().trim()
    let modifiedStr = nameStr.replaceAll(' ','-') 
    
    return modifiedStr
}

function toScreamingKebabCase(nameStr)
{
    nameStr = nameStr.replace(/[0-9-._]/g,"")
    nameStr = nameStr.toUpperCase().trim()
    let modifiedStr = nameStr.replaceAll(' ','-') 
    
    return modifiedStr
}
