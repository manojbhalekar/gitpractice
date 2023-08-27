//object 
// object ==structure destructrure
//               0     1      2       3
let months = ['jan', 'feb', 'march', 'april']
console.log(months)// elements print 
console.log(months[2])// index prints

let m1 = months[0]
let m2 = months[1]
let m3 = months[2]
let m4 = months[3]
console.log(m1)
console.log(m3)

//Destructure
let [a1,a2,a3,a4]=months
console.log(a3)//march
console.log(a2)//feb
console.log(a1)//jan
console.log(a4)//april

// prog 1 ...........................................
let fruits=['apple','mango','banana','grapes']
console.log(fruits[0])// prints el

//destructre array
let [b1,b2,b3,b4]=fruits
console.log(b1)//apple
console.log(b2)//mango
console.log(b3)//banana
console.log(b4)//grapes

// prog 2............................................
let state=[['MH','RJ'],['MP','UP']]

//destructure array

let[[c1,c2],[c3,c4]]=state

console.log(c1)//MP
console.log(c2)//RJ
console.log(c3)//MP
console.log(c4)//UP

//
let numb=[[11,22],[33,44]]

let[[v],[w]]=numb // v1 for 1st array v2 for 2nd array 
console.log(v)// it prints 1st element in agiven array
console.log(w) // it prints 1st el in 2nd array

let[[v1,v2],[w1,w2]]=numb

console.log(v1)//11
console.log(v2)//22
console.log(w1)//33
console.log(w2)///44

//prob 3...........................................
let obj={
    firstName:'Manoj',
    lastName:'Bhalekar',
    age:30
}

let  q1=obj.firstName
let  q2=obj.lastName
let q3=obj.age

console.log(q1)
console.log(q2)
console.log(q3)

//destructure array ^
let{firstName,lastName,age}=obj
console.log(firstName)
console.log(lastName)
console.log(age)

//=========================
let vehicle={
    color:'red',
    type:'sedane'
}
let{color:cl,type:ty}=vehicle
console.log(cl)
console.log(ty)

//....................................................................
//program no 4
let student={
    fullName:'manoj bhalekar',
    parents:{
        mother:'meera bhalekar',
        father:'pandurang bhalekar'
    }

}

let{fullName:fn,parents:{mother,father}}=student
console.log(fn)
console.log(mother)
console.log(father)
//...............................
let animal={
    color:'red',
    body:{
        legs:4,
        hands:2
    }
}
let{color:c,body:{legs:lg,hands:hs}}=animal
console.log(c)
console.log(lg)
console.log(hs)

// program no 5  in object array
let info={
    fullName:'manoj bhalekar',
    skills:['python','java']
}

let{fullName:fnn,skills:[ss1,ss2]}=info
console.log(fnn)
console.log(ss1)
console.log(ss2)

// program no 6 in array object
let students=[
    {
        fullName:'mansi bhalekar',
        skills:'python'
    },
    {
        fullname:'kiran bhalekar',
        skills:'java'
    },
]

let[{fullName:e1,skills:e2},{fullname:e3,skills:e4}]=students
console.log(e1)
console.log(e3)
