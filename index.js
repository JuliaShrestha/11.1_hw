// Вивести таблицю Піфагора (10×10), проте цього разу таблиця повинна бути створена динамічно
// ЗАДЕПЛОИТЬ СТРАНИЧКУ!! В ДЗ СДАТЬ И СССЫЛКУ НА ГИТ И ССЫЛКУ НА СТРАНИЦУ


function createTable (size) {
const table = document.createElement('table');

for(let i = 1; i <= size; i++) {
    const row = document.createElement('tr');

    for(let j = 1; j <= size; j++) {
        const cell = document.createElement('td');
        cell.textContent = i * j;
        row.appendChild(cell);
    };

    table.appendChild(row);
};

document.body.appendChild(table);

return table;
};

console.log(createTable(10));