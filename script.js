// Retrieve expense form and expense list elements
var expenseForm = document.getElementById("expenseForm");
var expenseList = document.getElementById("expenses");
var totalExpense = document.getElementById("totalExpense");

// Add event listener to expense form
expenseForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve expense description and amount
  var expenseDesc = document.getElementById("expenseDesc").value;
  var expenseAmount = parseFloat(document.getElementById("expenseAmount").value);

  // Create new expense item
  var expenseItem = document.createElement("li");
  expenseItem.textContent = expenseDesc + " - $" + expenseAmount.toFixed(2);
  
  // Append expense item to expense list
  expenseList.appendChild(expenseItem);

  // Calculate and display total expense
  var total = parseFloat(totalExpense.textContent.split("$")[1]);
  total += expenseAmount;
  totalExpense.textContent = "Total Expense: $" + total.toFixed(2);

  // Clear input fields
  document.getElementById("expenseDesc").value = "";
  document.getElementById("expenseAmount").value = "";
});
