        // getting all elements
        let amtEl = document.querySelector('#amt');
        const inputEl = document.querySelector('#inputExpense');
        const spentEl = document.querySelector('#inputDesc');  
        let btnEl = document.querySelector('#addBtn');

        // starting from zero
        let totalExpense = 0;

        // making desired function(oncick add inputExpense to totalExpense)        
        function addExpenseToTotal() {
           //    reading value from input 
           const descText = inputDesc.value;
           const amtText = inputEl.value;
        //    console.log( {amtText, descText});

           //convert it to number
           const expense = parseInt(amtText, 10); //why 10
           
           //add that value to totalExpense
           totalExpense = totalExpense + expense;    

            // setting the amount element to totalExpense
            amtEl.textContent = totalExpense;                }

        // listening click event
        btnEl.addEventListener('click', addExpenseToTotal, false); // why it is false
