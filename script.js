        // getting all elements
        let amtEl = document.querySelector('#amt');
        let btnEl = document.querySelector('#addBtn');

        // starting from zero
        let totalExpense = 0;

        // making desired function(oncick add inputExpense to totalExpense)        
        function addExpenseToTotal() {
           //    reading value from input 
           const inputEl = document.querySelector('#inputExpense');  
           const inputText = inputEl.value;

           //convert it to number
           const expense = parseInt(inputText, 10); //why 10
           
           //add that value to totalExpense
           totalExpense = totalExpense + expense;    

            // setting the amount element to totalExpense
            amtEl.textContent = totalExpense;                }

        // listening click event
        btnEl.addEventListener('click', addExpenseToTotal, false); // why it is false
