
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
console.log (choiceGrid);


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
        for (let i = 0; i < 16; i++) {
        do {

            rndNumber = getRndInteger(1, cellsNumber);

        } while (bombes.includes(rndNumber));

            bombes.push(rndNumber);
        }
        
        console.log(bombes);
        
        const moves = cellsNumber - bombes.length;
        console.log(moves);
        
        for (let i = 0; i < cellsNumber; i++){
            const cell = document.createElement('div');
            cell.classList.add('grid-' + cellsNumber, 'col');
            cell.innerHTML += (i + 1);
            console.log(cell);
            grid.append(cell);

            

            cell.addEventListener('click',count,true);
            
            cell.addEventListener('click',
            function (){

            
             for ( let i = 0; i < bombes.length; i ++){   
                 

                if( bombes[i] == cell.innerText){

                    
                    alert('punteggio ottenuto:' + '' + (contatore - 1));
                    alert('Hai perso, hai preso una bomba nella cella :' + ''+  'n.'+ '' + cell.innerText);
                    cell.classList.add('bomb-click');
                    setTimeout("location.reload(true);", 3000);
                }
                
                else if (contatore == moves){
                        
                    setTimeout("location.reload(true);", 3000);
                        

                    }

                else {

                   cell.classList.add('active');
                    

                   

                    }
                }

                
                    
                    
                    
                
                
                
                
               
            
                
             
            }
        );
        }
        
    }
    
); 


//funzioni
let contatore=0;
function count()
{
    contatore = contatore + 1;
    

    
}

function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
   

