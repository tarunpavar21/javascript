function avgNumber(x,y){
    return (x+y)/2;
};

let a=2;
let b=3;
let c=4;

console.log("avg of a and b",avgNumber(a,b));
console.log("avg of b and c ", avgNumber(b,c));
console.log("avg of c and a",avgNumber(c,a));

//second way to decalare functions

const sum = (p,q)=>{
    return p+q;

}
console.log(sum(9,3));
