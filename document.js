// let ele=document.getElementById('ltwo')
// console.log(ele);
// ele.innerHTML='<h1>welcome to satyabama dom</h1>'
//SELECT BY CLASS NAME
// let ele=document.getElementsByClassName('cls1')
// console.log(ele);
// for(let i=0; i<=ele.length; i++)
// {
//     ele[i].innerHTML='<h1>welcome to nth</h1>'
// }
//SELECT BY TAG NAME
// let ele=document.getElementsByTagName('<h2>')
// console.log(ele);
// for(let i=0; i<=ele.length; i++)
// {
//     ele[i].innerHTML='welcome to narayana tech house'
// }
//EXAMPLE
let d=document.getElementById('div1');
let h=d.getElementsByTagName('h2');
for(let i=0; i<=h.length; i++)
{
    h[i].innerHTML='narayanakumar'
}