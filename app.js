let cel=document.getElementById("cel");
cel.addEventListener('input', function(){
    let c=this.value;
    let con=(c * 9/5) + 32;
    if(!Number.isInteger(con)){
        con=con.toFixed(4);
    }
    fah.value=con;
});
let fah=document.getElementById("fah");
fah.addEventListener('input', function(){
    let f=this.value;
    let con=(f-32) * 5/9 ;
    if(!Number.isInteger(con)){
        con=con.toFixed(4);
    }
    cel.value=con;
});