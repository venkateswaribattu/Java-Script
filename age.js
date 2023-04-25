// let age=16;
// if (age>=17){
//         document.write('you are eligible for voting system');
// }



//  let age;
//  age= prompt('enter your age');
//  if (age>=18){
//       document.write('your eligible to voting system');
//      document.write('<br>');
//       document.write('frist take the job without hhord work');

//  }
//  else{
//       document.write('wait for up to 18 years afterwords you will know life');
//      document.write('<br>');
//      document.write('this is wonderfull life go to wonder la')

//}
 



//  let age;
//  age=prompt('Enter kid age');
//  if (age==4){
//     document.write('Admision for pre-nursery');
//  }
//  else if (age==5){
//     document.write('Admission for LKG');
//  }
//  else if (age==6){
//     document.write('Adimission for UKG');
//  }
//  else{
//    document.write('No vacancy for admission');
// }

// let time= Number(prompt('Enter the time'));
// switch(time){
//     case 6:
//     document.write('GOOD MORNING');
//    // break;
//     case 12:
//     document.write('GOOD AFTERNOON');
//     //break;
//     case 17:
//     document.write('GOOD EVENING');
//     //break;
//     case 21:
//     document.write('GOOD NIGHT');
//     //break;
//     default:
//         document.write('GOOD DAY BISCUITES')
    
// }
 
//whileloop
// let i=1;
// while (i<=10){
//     console.log(i);
//     i++;
//}
//dowhile loop


// let i=11;
// do {
//     console.log(i);
//     i++;
    
// } while (i<=20);

 //for loop


//  for(let i=30; i<=41; i++)
//  {
//     console.log(i);
//  }

//functions
// function venky()
// {
//     console.log('HELLO WORD.....');
// }
// venky()


//creat a fnction calling country
// function country()
// {
//     console.log('INDIA');
// }
// country()
//creat a function called state
// function state()
// {
//     console.log('andhrapradesh');
// }
// state()


// function country()
// {
//     state();
//     console.log('INDIA');
// }
// function state()
// {
//     console.log('Andhrapradesh')
// }
// country()
//PARAMETERS IN FUNCTIONS IN JAVASCRIPT
// function add(a,b)
// {
//     let c;
//     c=a+b;
//     console.log(c);
// }
// add(30,40)

// function add(a,b)
// {
//     let c;
//     c=a+b;
//     return(c);
// }
// let x=add(40,67)
// console.log(x)
// function add()
// {
//     console.log(arguments);
// }
// add(10,30,49,50)

// function add()
// {
//     for(let i=0; i<=arguments.length; i++)
//     {
//         console.log(arguments[i]);
//     }
// }
// add(10,40);
// add(10,20,30,40);
// add(5,10,15,20,25,30,35,40,45);
//ARRYS


// console.log([10,20,30,40,50])
// console.log([10,20,30,40,50][0])
// console.log([10,20,30,40,50][2])
// console.log([10,20,30,40,50][1])
// console.log([10,20,30,40,50][4])
// console.log([10,20,30,40,50][3])
//OR
// let x=[10,20,70,100]
// console.log(x)
// console.log(x[0])
// console.log(x[1])
// console.log(x[2])
// console.log(x[3])
//ADDING THE VALUES


// let x=[10,20,70,100];
// console.log(x);
// let s=0;
// for(let i=0; i<=x.length-1; i++)
// {
//     s=s+x[i];

// }
// console.log(s)



//console.log(Math.max(10,20,70,100));
//ADDING ELEMENT TO The ARRY
// let a=[10,20,70,100]
// console.log(a)
// a.push(45);
// console.log(a)
//REMOVEIN ELEMENT FROM THE ARRY
// let a=[10,20,70,100]
// console.log(a)
// a.splice(1,1)
// console.log(a)
//ADDING ELEMENT INTO PERTICULAR INDEX INTO THE ARRY
// let a=[10,20,70,100]
// console.log(a)
// a.splice(1,0,40)
// console.log(a)
//PASSING ARRY TO THE FUNCTION TO FIND THE SUM OF ARRY
// let a=[10,20,70,100]
// let result=findsum(a)
// console.log(result)
// function findsum(myarray){
//     let sum=0;
//     for(let i=0; i<a.length; i++)
//     {
//         sum=sum+a[i];
//     }
//     return(sum)
// }
//OBJECT CAN BE CREATED THREE WAYS
//OBJECT LITERAL
// let a=
// {
//     x:10,
//     y:20
// }
// console.log(a)
//  let s= 
//  {
//     student:1,
//     studentname:'srini',
//     marks:80
//   }
// console.log(s)


//  let s=
//  {
//      student:1,
//      studentname:'srini',
//      marks:80,
//      result:function()
//      {
//          if (this.marks>=35){
//              return"pass"
//          }
//          else{
//              return"fail"
//          }
//      }
//  }
//  console.log(s.student)
//  console.log(s.studentname)
//  console.log(s.marks)
//  console.log(s.result())
//OBJECT CONSTRUCTOR
// function person()
// {
//     this.name='scott',
//     this.age=23,
//     this.greet=function(){
//         console.log('hello');
//     }
// }
// let person1=new person()
// console.log(person1.name)
// console.log(person1.age)
// let person2=new person()
// console.log(person2.name)
// console.log(person2.age)
//OBEJECT PROTOTYPE
function person()
{
    this.name='scott',
    this.age=23,
    this.greet=function(){
        console.log('hello');
    }
}
let person1=new person()
let person2=new person()
person.prototype.gender='female'
console.log(person1.gender)
console.log(person2.gender)