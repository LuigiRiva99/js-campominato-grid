//l'utente clicca sul bottone play che genererà la griglia del gioco
    //genero ciclo for per aggiungere la griglia nell'html
//ogni cella ha un numero progressivo da 1 a 100



//seleziono il button dal dom
const playButton = document.getElementById('playbtn')

//aggiungo event per il click del btn
playButton.addEventListener('click', function(){
    //genero ciclo for per aggiungere la griglia nell'html
    //seleziono il container nel quale aggiungo la griglia
    const gridContainer = document.querySelector('.grid');
    
    //genero ciclo for
    for (let i = 0; i < 100; i++) {
        //creo il div della cell con .createElement
        const cellElement = document.createElement('div');
        //aggiungo la classe al div
        cellElement.className = 'cell';
        //uso .append per mettere la cell nell'apposito container
        gridContainer.append(cellElement)
        
        //inserisco il numero all'interno della cell
        const cellNum = i + 1
        cellElement.innerHTML =+ cellNum
    
        //aggiungo event per il click sulla cell
        cellElement.addEventListener('click', function(){
            //quando l'utente clicca su una cella, quest'ultima cambierà colore 
            cellElement.classList.toggle('cell_dark');
            //e stamperà un messaggio in console con il num della cella cliccata
            console.log(cellNum);
        })
    }
})




