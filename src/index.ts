// union in typscript 
// union type in typescript is you set two probablity in typescript
// example

const id: number | string =12
const name: string = "sura2015"
type Status = "success" | "error" | "loading";


// check the status in the function 
function chickStataus(Status:string){
    if(Status === "success"){
        return ("success")
    }
    else if(Status === "error"){
        return "error"
    }
    else{
        return "loading"
    }
}
const statusval =chickStataus("error")
console.log('====================================');
console.log(statusval);
console.log('====================================');