var form = document.getElementById('form')
form.addEventListener('submit', function(e) {
    // impede o envio do form
    e.preventDefault()
});


function getInput() {
    var entrada = document.getElementById('array').value
    var inputArray = entrada.split(',') // Removendo todas as vírgulas da entrada e adicionando os elementos em um array
    
    console.clear();
    // Verificando se é um array de alfabético ou numérico
    if (isNaN(inputArray[0]) == false) {
        for(let i=0; i<inputArray.length; i++)
        inputArray[i] = Number(inputArray[i])
    }
    console.log("Entrada: " + inputArray)

    return inputArray
}


function ordenar() {
    const inputArray = getInput()

    var startTime = 0;
    var endTime = 0;

/*  --------------------- INSERTION SORT --------------------- */
    startTime = performance.now()
    const insertionSortArray = insertionSort(inputArray) // Ordenando o array
    endTime = performance.now()
    var insertionSortTime = (endTime - startTime)

    console.log("Ordenado by Insertion Sort: " + insertionSortArray)
    console.log("Inicio: " + startTime + " | Fim: " + endTime + " | Tempo: " + insertionSortTime.toFixed(4) + "ms")
    console.log("---------------------------")
/*  --------------------------------------------------------------- */

/*  --------------------- MERGE SORT --------------------- */
    startTime = performance.now()
    const mergeSortArray = mergeSort(inputArray) // Ordenando o array
    endTime = performance.now()
    var mergeSortTime = (endTime - startTime)

    console.log("Ordenado by Merge Sort: " + mergeSortArray)
    console.log("Inicio: " + startTime + " | Fim: " + endTime + " | Tempo: " + mergeSortTime.toFixed(4) + "ms")
    console.log("---------------------------")
/* --------------------------------------------------------------- */

/*  --------------------- BUBBLE SORT --------------------- */
    startTime = performance.now()
    const bubbleSortArray = bubbleSort(inputArray) // Ordenando o array
    endTime = performance.now()
    var bubbleSortTime = (endTime - startTime)

    console.log("Ordenado by Bubble Sort: " + bubbleSortArray)
    console.log("Inicio: " + startTime + " | Fim: " + endTime + " | Tempo: " + bubbleSortTime.toFixed(4) + "ms")
    console.log("---------------------------")
/* --------------------------------------------------------------- */

/*  --------------------- COUNTING SORT --------------------- */
    var min = Math.min.apply(null, inputArray) // Obtendo o menor valor do array
    var max = Math.max.apply(null, inputArray) // Obtendo o maior valor do array

    startTime = performance.now()
    const countingSortArray = countingSort(inputArray, min, max) // Ordenando o array
    endTime = performance.now()
    var countingSortTime = (endTime - startTime)

    console.log("Ordenado by Counting Sort: " + countingSortArray)
    console.log("Inicio: " + startTime + " | Fim: " + endTime + " | Tempo: " + countingSortTime.toFixed(4) + "ms")
    console.log("---------------------------")
/* --------------------------------------------------------------- */

    // Calculando o melhor e pior tempo de execução
    var times = [insertionSortTime, mergeSortTime, bubbleSortTime, countingSortTime]
    let melhorTempo = Math.min.apply(null, times)
    let piorTempo = Math.max.apply(null, times)
    console.log("Melhor tempo: " + melhorTempo.toFixed(4) + "ms") 
    console.log("Pior tempo: " + piorTempo.toFixed(4) + "ms")
    

    showHTMLElements(inputArray, insertionSortArray, insertionSortTime, mergeSortTime, bubbleSortTime, countingSortTime, melhorTempo, piorTempo)
}




// Função que seta os elementos visuais antes e depois do processo de ordenação
function showHTMLElements(inputArray, outputArray, insertionSortTime, mergeSortTime, bubbleSortTime, countingSortTime, melhorTempo, piorTempo) {
    const resultadoDiv = document.getElementById('resultado')
    const myNode = document.getElementById("resultado");
    myNode.textContent = ''

    // Retornando o array de entrada antes da ordenação
    const entradaHTML = `
        <div class="container" id="entrada">
            <p>Entrada <i class="fa fa-sign-in"></i></p>
            <h1>${inputArray}</h1>
        </div>
    `

    // Retornando o array de entrada depois da ordenação
    const saidaHTML = `
        <div class="container" id="saida">
            <p>Saída <i class="fa fa-sign-out"></i></p>
            <h1>${outputArray}</h1>
        </div>
    `

    // Retornando o nome do algoritmo de ordenação e o tempo de execução
    const sortHTML = `
        <div class="sortType" id="insertion-sort">
            <p><i class="fa fa-check"></i> Ordenado com Insertion Sort </p>
            <p class="time"><i class="fa fa-clock-o"></i> <span>${insertionSortTime.toFixed(4)}ms</span></p>
        </div>
        <div class="sortType" id="merge-sort">
            <p><i class="fa fa-check"></i> Ordenado com Merge Sort </p>
            <p class="time"><i class="fa fa-clock-o"></i> <span>${mergeSortTime.toFixed(4)}ms</span></p>
        </div>
        <div class="sortType" id="bubble-sort">
            <p><i class="fa fa-check"></i> Ordenado com Bubble Sort </p>
            <p class="time"><i class="fa fa-clock-o"></i> <span>${bubbleSortTime.toFixed(4)}ms</span></p>
        </div>
        <div class="sortType" id="counting-sort">
            <p><i class="fa fa-check"></i> Ordenado com Counting Sort </p>
            <p class="time"><i class="fa fa-clock-o"></i> <span>${countingSortTime.toFixed(4)}ms</span></p>
        </div>
        <div class="sortType" id="times">
            <p id="melhor"><i class="fa fa-thumbs-up"></i> Melhor Tempo: ${melhorTempo.toFixed(4)}ms</p>
            <p id="pior" class="time"><i class="fa fa-thumbs-down"></i> Pior Tempo: <span>${piorTempo.toFixed(4)}ms</span></p>
        </div>
    `

    resultadoDiv.insertAdjacentHTML('beforeend', sortHTML)
    resultadoDiv.insertAdjacentHTML('beforeend', entradaHTML)
    resultadoDiv.insertAdjacentHTML('beforeend', saidaHTML)
}