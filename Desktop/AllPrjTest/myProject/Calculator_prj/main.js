const display=document.querySelector("#display");

const buttons=Array.from(document.querySelectorAll(".button"));

buttons.map((button) =>{
   button.addEventListener("click",calc);
});

function calc(e){
    let val=e.target.innerText;

    switch(val){
        case 'AC' :display.innerText='';
                   break;
        case '←' :display.innerText = display.innerText.slice(0,-1);
                  break;
                  
        case '=' :try{
                      if(display.innerText === '')
                      {
                          display.innerText='';  
                      }
                      else{
                          display.innerText=eval(display.innerText);
                      }
                      break;
                    }catch(e){
                          display.innerText="Error!!";
                          break;
                    }
        default:display.innerText+=val;           
    }
}