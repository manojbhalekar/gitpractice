//object
//***********OBJECT******************
//        firstName lastName   mobNo     rollNo age
let info=['manoj','bhalekar','9130456957','29','07']
// array stores the value by index
console.log(info[0])
console.log(info[4])

//retrive//update//add//delete

// retrive......
console.log(info[3])
//update
info[1]='sutar'
//add 
info.push('pune')
info.unshift('Mr')
//delete
info.pop()
info.shift()
info.shift()
info.splice(1,1)

// info1=['manoj','bhalekar','9130456957','29','07']
// object......
let info1={
    // property-value /element
    // key -value/elements
    firstName:'manoj',
    lastName:'bhalekar',
    mobile:'9130456957',
    agee:'29',
    rollNo:'07'
}

// object does not stors the value by index
console.log(info1[2])// undefined in object

//retrive (.dot notation / bracket notation)
console.log(info1.firstName)
console.log(info1['firstName'])

//update(. dot naotaion /bracket notation)
info1.firstName='manish'
console.log(info1)
info1['firstName']='ram'
console.log(info1)

//add (.dot notation/bracket notation)
info1.city='pune'
info1['language']='hindi'
console.log(info1)

// delete (.dot notation / bracket notation)
delete info1.firstName
delete info1['lastName']
console.log(info1)

// OBJECT LOOPING
let cities=['bhopal','banglore','chennai']
for(let i=0;i<cities.length;i++){
    console.log(i)
    console.log(cities[i])
}

// object does not stores the value by index
let months={
    january:'Days 31',
    february:'Days 28',
    march:'Days 30'
}
console.log(months.january) // does work inside loop
console.log(months['january'])

for(let prop in months){
    console.log(prop,months[prop])
}

//.....................
let animals={
    leg:'4',
    eyes:'2',
    color:'red'
}
for(let prop in animals){
    console.log(prop,animals[prop])
}
//.....................
let mansi={
    firstNAme:'Ganesh',
    lastName:'sutar',
    age:'55',
    city:'osmanabd'
}
for(let prop in mansi){
    console.log(prop,mansi[prop])
}

//>>>>>500.....2000 lines DRY principle do not repeat yourself

let amol = {
    firstName: "amol",
    lastName: "rao",
    age: "23",
    skills: ["python", "java", "javascript", "html"]
}
console.log(amol)

let chinmay = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: "23",
    skills: ["sql", "java", "javascript", "html"]
}
console.log(chinmay)

// tp avoid repetation we required a template

// CLASS..............
class person{
    firstName=undefined
    lastName=undefined
    rollNo=undefined
    age=undefined
}
let mansib=new person()
let sakshib=new person()
console.log(mansib)
console.log(sakshib)

mansib.firstName='ganesh'
mansib.lastName='rao'
mansib.age='33'
mansib.rollNo='01'

console.log(mansib)

//displayName method
class person3{
    firstName=undefined
    latsNAme=undefined
    age=undefined
    rollno=undefined
    displayName(){
        console.log(this.firstName+this.lastName)
    }
}

// let names = ["chi","nmay"]
//let names2 = new array(["chi","nmay"])
//let city="pune"
//let city2=new string("pune")

//  constructor......................
class personB{
    constructor(fn,ln,ag,rollNo){
        this.firstName=fn
        this.lastName=ln
        this.age=ag
        this.rollNo=rollNo
    }
}

let shritej=new personB('Shritej','Panchal','32','23')
console.log(shritej)

let kiran=new personB('kiran','bhalekar','28','23')
console.log(kiran)

let manoj=new personB('manoj','bhalekar','30','23')
console.log(manoj)

shritej.city='pune'
console.log(shritej)  //adds city in shritej

kiran.language='english'
console.log(kiran) // adds language in kiran

//=======================================================
//STEP METHOD.............
class personC{
    setFirstName(fn){
        this.firstName=fn
    }
    setLaststName(ln){
        this.lastNAme=ln
    }
    setAge(age){
        this.age=age
    }
    setrollNo(rn){
        this.rollNo=rn
    }
}

let akash=new personC()
console.log(akash)

akash.setFirstName("akash")
akash.setLaststName('ukrande')
akash.setAge(33)
akash.setrollNo(22)
console.log(akash)

//==========================================
// map==>

/* data stores in .....
property ---value
key ---value
*/
//keys / property ---value
let obj={
    firstName:'mahesh',
    lastName:'bhalekar',
    age:'29',
    rollNo:'20'
}


// keys properties are always string
//map properties can be any data type

let mapA=new Map([
    [1,'admin'],
    [true,'candrive'],
    ['fullName','mahesh bhalekar']

])
console.log(obj)
console.log(mapA)


let mapB=new Map([
    [1,'admin'],
    [2,'customer'],
    [3,'manager'],
    [4,'officer']

])
console.log(mapB)

//mapB is an object ...properties and methods of mapB
//size()
//has()
//get()
//set()
//clear()
//forEach()
//delete()
//entries()
//key()
//values()

//size () no key values prints
console.log(mapB.size)

// has() to check weather element is present
let q1=mapB.has(4)
console.log(q1)

// set () to add the property value
mapB.set(6,'clerk')
console.log(mapB)

//clear() to clear out only element
//mapB.clear()
//console.log(mapB)

//get ()
//let q12=mapB.get(2)
//console.log(mapB)

//forEach ()
mapB.forEach(function(v,k){
    console.log(v,k)
})

//delete()
mapB.delete(2)
console.log(mapB)

///entries()
console.log(mapB.entries())
//keys()
console.log(mapB.keys())
//values()
console.log(mapB.values()) // admin customer manager officer clerk

for(let k of mapB.keys()){
    console.log(k)
}
for(let k of mapB.values()){
    console.log(k)
}
for(let[k,v] of mapB.entries()){
    console.log(k,v)
}


//=================================================>
//set()

let names=new Set(['manoj','kiran','mahesh','prasad','abhishek'])
console.log(names)

//set does not stores the value by index
//console.log(names[0])   // undefined

//add()
names.add('amol')
console.log(names)

//clear()
//names.clear()
//console.log(names)

//size()
console.log(names.size)

// delete()
names.delete('amol')
console.log(names)

//has()
let a1=names.has('kiran')
console.log(a1)

//forEach()
names.forEach(function(el){
    console.log(el)
})

//let r1=names.values()
for(let v of names.values()){
   console.log(v)
}

for (let k of names.keys()){
    console.log(k)
}

for(let [k,v] of names.entries()){
    console.log(k,v)
}5.


let jj=names.values()
console.log(jj)

console.log(jj.next().value) // manoj 
console.log(jj.next().value) // kiran 
console.log(jj.next().value)//mahesh
console.log(jj.next().value)//prasad

