let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

window.prompt(weeklyExpenseQuestions[0])
let answer = window.prompt(weeklyExpenseQuestions[0])
console.log(answer)

answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
console.log(answer)
weeklyExpenses = weeklyExpenses + answer

// Your Code Here