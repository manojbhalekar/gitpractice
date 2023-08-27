// Bank account
//manoj account details =>
// properties==>accName,accNo,Branch Bal
//methods==>Deposite(),Withdrawl(),transaction(),totalDeposite(),totalWithdrawl(),ministatementlastFivetransaction()

class Bank {
    constructor(accName,accNo,Branch,Bal){
        this.accName=accName
        this.accNo=accNo
        this.Branch=Branch
        this.Bal=Bal
        this.transaction=[]
    }
    Deposite(amount){
        this.Bal=this.Bal+amount
        this.transaction.push(amount)
        return this.bal
        
    }

    Withdrawl(amount){
        if(this.Bal>=amount){
        this.Bal=this.Bal-amount
        this.transaction.push(-amount)
        return this.Bal
    }
    else{
        console.log("Insufficent Balance")
    }
    }
    lastFiveTransaction(){
        return this.transaction.slice(-5)
    }
    totalDepositeA(){
        return this.transaction.filter((el)=>{
            return el>0
        }).reduce((acc,el)=>{
            return acc+el
        },0)
    }

    totalWithdrawlA(){
        return this.transaction.filter(function(el){
            return el<0
        }).reduce(function(acc,el){
            return acc+el
        },0)
    }
}


let Manoj=new Bank("MAnoj",12345,"Dharashiv",2000)
console.log(Manoj)
Manoj.Deposite(200)
Manoj.Withdrawl(50)
Manoj.Deposite(100)
Manoj.Withdrawl(150)
Manoj.Deposite(300)
Manoj.Withdrawl(250)
Manoj.Deposite(400)
Manoj.Deposite(500)
console.log(Manoj.transaction)
let trans=Manoj.lastFiveTransaction()
console.log(trans)

console.log(Manoj.totalDepositeA())
console.log(Manoj.totalWithdrawlA())

