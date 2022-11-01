
let show=document.getElementById("addval")

console.log(show);
let n=5;
let s='';
for(var i=1;i<=n;i++){
    for(var j=1;j<=n-i;j++){
        s += " ";
    }
    for(var k=0;k<2*i-1;k++){
        s+= "*";
    }
    s += "\n";
}
console.log(s);

let h=document.createElement("h3");
h.innerText=s;
show.append(h);