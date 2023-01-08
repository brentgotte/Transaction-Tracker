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