function test1(m,n){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(isNaN(m)||isNaN(n)){
                return reject()
            }
            for(let i=m;i<=n;i++){
                console.log(i);
            }
            return resolve()
        }, 4000);
    })
}
function message(){
    console.log("message printed");
}
test1(0,10)
.then(message())
.catch(()=>console.log("error occurred"))
.finally(()=>console.log("js"))