
/* let setColor = (ElemType , Elemcolor) =>
{
     document.querySelectorAll(ElemType).forEach(elem => elem.style.color = Elemcolor);
}

setColor("h1","rgb(234,122,333)");

let links = () =>
{
     let linksArr = document.querySelectorAll("a");
     let returnArr = [linksArr.length, linksArr[0].innerText, linksArr[linksArr.length - 1].innerText];  
     return returnArr;
}

console.log(links()); */

let setColor = () =>
{
    document.querySelectorAll(".list li").forEach(elem => {elem.style.fontSize = "10px";elem.style.color = "red"});
}

setColor();

let addLi = () =>
{
    let newElement = document.createElement('li');
    newElement.innerText = "New city";
    newElement.style.fontSize = "10px";
    newElement.style.color = "red"
    document.querySelector(".list").appendChild(newElement);
}
let removeLi = () =>
{
    let list = document.querySelector(".list");
    let liArr = document.querySelectorAll(".list li");
    let lastItem = liArr[liArr.length - 1];
    list.removeChild(lastItem);
}

document.querySelector(".add").addEventListener("click",addLi);
document.querySelector(".remove").addEventListener("click",removeLi);