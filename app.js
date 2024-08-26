let cel=document.getElementById("cel");
cel.addEventListener('input', function(){
    let c=this.value;
    let calValue=(c * 9/5) + 32;
    if(!Number.isInteger(con)){
        calValue=calValue.toFixed(4);
    }
    fah.value=con;
});
let fah=document.getElementById("fah");
fah.addEventListener('input', function(){
    let f=this.value;
    let calValue=(f-32) * 5/9 ;
    if(!Number.isInteger(con)){
        calValue=calValue.toFixed(4);
    }
    cel.value=con;
});