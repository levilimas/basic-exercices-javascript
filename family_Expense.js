let familyExpense = {
  incomes: [2500, 3200, 250.43, 360.45],
  expenses: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array) {
  let total = 0
  for (let value of array) {
    total += value
  }

  return total
}

function familyFinanceBalance() {
  const calculateIncomes = sum(familyExpense.incomes)
  const calculateExpenses = sum(familyExpense.expenses)

  const total = calculateIncomes - calculateExpenses

  const itsOk = total >=0

  let balanceText = 'negativo'
  if (itsOk) {
    balanceText = "positivo"
  }

  console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}


familyFinanceBalance()