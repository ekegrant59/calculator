let keys = document.querySelectorAll('button');
let calculator = document.querySelector('section')
let before;

for (let i=0; i<keys.length; i++) {
    let key = keys[i];
    key.onclick = function solve(){
        let action = key.dataset.action;
        let display = document.querySelector('.display');
        let displayed = display.textContent;
        let keyContent = key.textContent;
        let previous = calculator.dataset.previousKey

        if (!action){
            if (displayed === '0'|| previous === 'calculate'){
                display.textContent = keyContent
            } else{
                display.textContent = displayed + keyContent
            }
            calculator.dataset.previousKey = '';
        }

        
         if(action === 'add' || action === 'subtract'
            || action === 'divide' || action === 'multiply' ){
                    display.textContent = displayed + keyContent
                    calculator.dataset.previousKey = 'action'
                
        }

        if(action === 'decimal'){
           if (previous != 'decimal'){
            display.textContent = displayed+ '.'
            calculator.dataset.previousKey = 'decimal'
           }
        }

        if ( action === 'clear'){
           display.textContent = '0';
           calculator.dataset.previousKey = '';
        }

        if( action === 'delete'){
            if( displayed.length === 1){
                display.textContent = '0'
            }
            if(displayed === 'SyntaxError') {
                display.textContent = before
                console.log(before)
            }
            else{
                display.textContent = displayed.substring(0, displayed.length - 1);
            }
    
        }

        if (action === 'equals'){
            try{
                before = displayed;
                let answer = eval(displayed)
                let strAnswer = (answer).toString()
                console.log(strAnswer)
                if(strAnswer.length > 7) {
                   var stAnswer = parseFloat(strAnswer)
                    display.textContent = parseFloat(stAnswer.toFixed(3))
                } else{
                    var stAnswer = parseFloat(strAnswer)
                    display.textContent = stAnswer
                }
                calculator.dataset.previousKey  = 'calculate' 
            }
            catch(err){
                display.textContent = err.name
            }
        }
        
    }
}