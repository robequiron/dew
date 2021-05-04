class Ventana {

    newCalculate;

    memoria1 = 0;
    memoria2 = 0;
    operator = '';

    heightRow = 0;
    widthCol = 0;

    title = 0;

    constructor (w,h,t,l) {
        
        this.heightRow = h/5;
        this.widthCol = w/4

        this.newCalculate = document.createElement("div");
        this.newCalculate.style.width = h+'px';
        this.newCalculate.style.height = '300px';
        this.newCalculate.style.backgroundColor= 'red'
        
       
        this.createTitle()
        this.createButton();
       
        
    }

    createTitle() {
        let title = document.createElement('div');
        title.style.minHeight = this.heightRow+'px';
        title.style.backgroundColor = 'green';
        title.className = 'text-right pr-1 pt-1'
        title.innerHTML = '<h2 id="title">'+this.title +'</h2>'
        this.newCalculate.appendChild(title);
    }

    createButton() {
        let buttons = document.createElement('div');
        buttons.className='row m-0';
        buttons.style.maxWidth=this.widthCol;
        let buttonsNum = document.createElement('div');
        buttonsNum.className = 'col-12 bg-primary align-self-stretch';
        

        let rowbuttons = [];
        for (let i=0; i<=5;i++) {
            rowbuttons.push(document.createElement('div'));
            rowbuttons[i].className='row';
            rowbuttons[i].style.minHeight= this.heightRow+'px';
        }

        let textButton =['7','8','9','/','4','5','6','x','1','2','3','-','0','.','=','+','c'];
        
        this.newCalculate.appendChild(buttons);
        let l = 0;
        for (let i=0;i<textButton.length;i++) {
            let classButton = 'col-3';
            let classbtn = 'btn btn-primary btn-block';

            if (textButton[i]==='c') {
                classButton = 'col-12';
                classbtn = 'btn btn-danger btn-block';
            }
            let divbtn = document.createElement('div');
            divbtn.className = classButton;


            let btn = document.createElement('button');
            btn.className = classbtn;
            btn.innerHTML = textButton[i];
            
          
            
            divbtn.appendChild(btn)
            rowbuttons[l].appendChild(divbtn)
            buttonsNum.appendChild(rowbuttons[l])
            
            if ((i+1)%4===0) {
                l++;
            }
        }

        function calculate(btn) {
            let title = document.body.querySelector('#title');
            let t = title.textContent;
            let n = btn.toElement.innerHTML;
            let pto = 0;

            t = new String(t);

                      
            for (let i=0;i<t.length;i++){
                if (t[i]==='.') {
                    pto = pto + 1;
                }
                if (pto>1) {
                    return;
                }

            }


            
            
            if (t[0]==='0' && n==='.' && pto===0) {
                title.innerHTML = t + '.';
                return;
            }

            if (n==='1' || n==='2' || n==='3'
            || n==='4' || n==='5' || n==='6' || n==='7' || n==='8' || n==='9'
            ) {
            
                if (t[0]==='0' && t[1]===undefined) {
                    title.innerHTML ='';
                    title.innerHTML = n;
                } else {
                    title.innerHTML = t + n;
                }
            }

            if (n==='.' && pto===0) {
                title.innerHTML = t + n;
            }
            if (n==='c'){
                this.memoria1 = 0;
                this.memoria2 = 0;
                title.innerHTML ='0';
                return;
            }

            if (n==='+' || n==='-' || n==='/' || n==='x' || n==='=') {


                if (this.memoria1===0) {
                    this.memoria1 = parseFloat(t);
                    title.innerHTML = '0';
                    this.operator = n;
                    return;
                } 
                if (this.memoria1===0 && n==='=') {
                    title.innerHTML = this.memoria1;
                    return;
                }
                

                this.memoria2 = parseFloat(t);
                if (this.memoria1>0 && n==='=') {
                  
                    if (this.memoria2===0){
                        title.innerHTML = this.memoria1;
                        this.memoria2 = 0;
                        this.operator = '';
                        return;
                    } else {
                        title.innerHTML= this.memoria1;
                        n = this.operator;
                    }

                }
             

                

                title.innerHTML = '';

                if (n==='+') {
                    this.memoria1 = this.memoria1 + this.memoria2;
                    title.innerHTML = this.memoria1;
                }

                if (n==='-') {
                    this.memoria1 = this.memoria1 - this.memoria2;
                    title.innerHTML = this.memoria1;
                }
                if (n==='x') {
                    this.memoria1 = this.memoria1 * this.memoria2;
                    title.innerHTML = this.memoria1;
                }
                if (n==='/') {
                    let entero = this.memoria1 / this.memoria2;
                    let resto = this.memoria1 % this.memoria2;
                    this.memoria1 = entero + resto;
                    title.innerHTML = this.memoria1;
                }
                

                this.memoria2 = 0;
            }


            

        }

        

        buttons.appendChild(buttonsNum);
        
        buttonsNum.querySelectorAll('button').forEach( 
            item=>{
                item.addEventListener('click', calculate.bind(this));
              
            }
        )

    }



}


class Calculate extends Ventana {

    
    divCalculate = '1';


    constructor(w,h,t,l) {
        
        super(w,h,t,l)

        document.body.appendChild(this.newCalculate)


    }

    




}


