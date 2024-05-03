// script.js
function createMatrixInput(rows, cols, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `${containerId}-row-${i}-col-${j}`;
            container.appendChild(input);
        }
        container.appendChild(document.createElement('br'));
    }
}

function getMatrixData(rows, cols, containerId) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const input = document.getElementById(`${containerId}-row-${i}-col-${j}`);
            row.push(parseFloat(input.value));
        }
        matrix.push(row);
    }
    return matrix;
}

function calculate() {
    const rowsA = parseInt(document.getElementById('rowsA').value);
    const colsA = parseInt(document.getElementById('colsA').value);
    const rowsB = parseInt(document.getElementById('rowsB').value);
    const colsB = parseInt(document.getElementById('colsB').value);
    const matrixA = getMatrixData(rowsA, colsA, 'matrixA');
    const matrixB = getMatrixData(rowsB, colsB, 'matrixB');

    if (colsA !== rowsB) {
        alert('The number of columns in Matrix A must be equal to the number of rows in Matrix B for multiplication.');
        return;
    }

    const result = matrixMultiply(matrixA, matrixB);
    displayResult(result);
}

function displayResult(result) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '<h2>Result Matrix</h2>';
    const table = document.createElement('table');
    result.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    resultContainer.appendChild(table);
}

window.onload = function () {
    document.getElementById('rowsA').addEventListener('change', function () {
        const rowsA = parseInt(this.value);
        const colsA = parseInt(document.getElementById('colsA').value);
        createMatrixInput(rowsA, colsA, 'matrixA');
    });

    document.getElementById('colsA').addEventListener('change', function () {
        const rowsA = parseInt(document.getElementById('rowsA').value);
        const colsA = parseInt(this.value);
        createMatrixInput(rowsA, colsA, 'matrixA');
    });

    document.getElementById('rowsB').addEventListener('change', function () {
        const rowsB = parseInt(this.value);
        const colsB = parseInt(document.getElementById('colsB').value);
        createMatrixInput(rowsB, colsB, 'matrixB');
    });

    document.getElementById('colsB').addEventListener('change', function () {
        const rowsB = parseInt(document.getElementById('rowsB').value);
        const colsB = parseInt(this.value);
        createMatrixInput(rowsB, colsB, 'matrixB');
    });
};
