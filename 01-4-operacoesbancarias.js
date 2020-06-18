const user = {
    name: "Cherry",
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type == 'credit'){
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

// relatórios 
function getHigherTransactionByType(type) {
    let HigherTransaction = { type: type, value: 0}

    for (let transaction of user.transactions){
        if (transaction.type == type && transaction.value > HigherTransaction.value) {
            HigherTransaction = transaction
        }
    }
    console.log(HigherTransaction)
}

function getAverageTransactionValue(){
    let sum = 0

    for(let transaction of user.transactions) {
        sum = sum + transaction.value
    }
    
    console.log(`Average transaction value: ${sum / user.transactions.length}`)
}

function getTransactionsCount() {
    count = { credit: 0, debit: 0 }
    for(let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            count.credit ++
        } else {
            count.debit ++
        }
    }

    console.log(count)
}

createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });


console.log(`User balance: ${user.balance}`)

getHigherTransactionByType("credit")
getHigherTransactionByType("debit")

getAverageTransactionValue()

getTransactionsCount()
