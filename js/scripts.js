
/*
step

1. creare una array bombe che contenga 16 numeri casuali 
    - i numeri creati non si devono ripetere
2. quando l'utente clicca su una cella 
    - se nella cella il numero è presente nell' array bombe la casella si colora di rosso e la partita termina
    - altrimenti si colora di azzurro e continua il gioco
3. al termina della partita comunico il puntaggio  
*/ 

const createGrid = document.getElementById('btn-grid-create');
const grid = document.getElementById('grid-container');

const choiceGrid = document.getElementById('select-choice');



createGrid.addEventListener('click',
    function  (){
        grid.innerHTML = '';
        let cellsNumber = 0;
        if(choiceGrid.selectedIndex == 0){
            cellsNumber = 100;
        }
        else if (choiceGrid.selectedIndex == 1) {
            cellsNumber= 81;
        }
        else if (choiceGrid.selectedIndex == 2){

            cellsNumber = 49;
        }

        const bombes = [];
        while (bombes.length < 16) {
        rndNumber = getRndInteger(1, cellsNumber);
        
            if (!bombes.includes(rndNumber)) {

            bombes.push(rndNumber);

        } 

            
        }
        
        console.log(bombes);
        const moves = cellsNumber - bombes.length;
        console.log(moves);
        
        for (let i = 0; i < cellsNumber; i++){
            const cell = document.createElement('div');
            cell.classList.add('grid-' + cellsNumber, 'col');
            cell.innerHTML += (i + 1);
            
            grid.append(cell);

            
            
            

                       
            cell.addEventListener('click',
            function (){

            const cellBomb  = document.querySelectorAll('.bomb-click');
            const cellNotBomb = document.querySelectorAll('.active');

                
              if (
                cellBomb.length == 0 
                && 
                cellNotBomb.length < moves){
                const numCell = parseInt(cell.innerText);
                console.log ('hai cliccato la cella n :', '' ,numCell);
                
                if( bombes.includes(numCell)){

                    cell.classList.add('bomb-click');
                    alert('il tuo punteggio è:' + '' + cellNotBomb.length);
                    alert('Hai perso, hai preso una bomba nella cella :' + ''+  'n.'+ '' + numCell);
                    
                    
                }

                

                else {

                    cell.classList.add('active');
                    if((cellNotBomb.length + 1 ) == moves ){

                        alert('hai cliccato su tutte le celle non bomba hai vinto!');
                    }
                    
                }
              }

              else {
                alert('il gioco è terminato');
              }
                
                

                
            }
        );
        }
        
    }
    
); 


//funzioni


function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
   

