function fun(p1,p2,p3){
  if(p2 === "+"){
    return  Number(p1)+Number(p3);
}
else if(p2 === "-"){
    return Number(p1)-Number(p3);
}
else if(p2 === "x"){
    return  Number(p1)*Number(p3);
}
else if(p2 === "/"){
    return Number(p1)/Number(p3);
}else if(p2 === "%"){
    return Number(p1)%Number(p2);
  
}}
function init() {
  for (let char = 0; char <= 17; char++) {
    let id = "i" + char;
    let buttonElement = document.getElementById(id);
    buttonElement.addEventListener("click", () => {
      let screenElement = document.getElementById("scr");
      let op;
      if (char === 10) {
        op = " + ";
      } else if (char === 11) {
        let exp = screenElement.innerHTML;
        let ops = exp.split(' ');
        let len=ops.length;
        let ans=0;
        for(let j=0;j<len;){
          if(j<=2){
          ans=fun(ops[j],ops[j+1],ops[j+2]);j=j+3;}
          else{
            ans=fun(ans,ops[j],ops[j+1]);j=j+2;
          }
        }
        screenElement.innerHTML=ans;
        return;
      } else if (char === 12) {
        op = " - ";
      } else if (char === 13) {
        op = " x ";
      } else if (char === 14) {
        op = " / ";
      }
      else if(char === 15){
        op = " % ";
      }
      else if(char === 16){
        let exp = screenElement.innerHTML;
        exp=exp.substring(0,exp.length-1);
        screenElement.innerHTML=exp;
        return;

      }
      else if(char === 17){
        screenElement.innerHTML = "0";
        return;
      }
       else {
        op = "" + char;
      }
      screenElement.innerHTML =
        screenElement.innerHTML === "0" ? op : screenElement.innerHTML + op;
    });
  }
}
init();
