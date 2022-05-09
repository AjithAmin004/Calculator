let string = "";
let btns = document.querySelectorAll('.button');

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click',function(e){
    //   console.log(e);
      console.log(e.target.innerText);
      let val = e.target.innerText;
      if(val == '='){
          if(string!=''){
        string = eval(string);
          }
        let display = document.querySelector('#ans');
        display.value=string;
      }else if(val=='Clear'){
        let display = document.querySelector('#ans');
        display.value="";
        string='';
      }else {
        string = string+val;
        let display = document.querySelector('#ans');
        display.value=string;
        }
      
    })
}


