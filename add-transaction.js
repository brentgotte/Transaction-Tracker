import Transaction from './transaction.js';

const memory = JSON.parse(localStorage.getItem('transactions'));

memory.forEach(obj => {
    const transaction = new Transaction(obj.bedrag, obj.zender, obj.ontvanger);
    transaction.print();
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const transaction = new Transaction(formData.get('bedrag'), formData.get('zender'), formData.get('ontvanger'));

    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    form.reset();
});
function showTransactions() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const table = document.querySelector('table');
    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.zender}</td>
            <td>${transaction.bedrag}</td>
            <td>${transaction.ontvanger}</td>
        `;
        table.appendChild(row);
    });
}



showTransactions();
