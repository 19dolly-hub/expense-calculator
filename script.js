        // getting all elements
        let amtEl = document.querySelector('#amt');
        const spentEl = document.querySelector('#inputDesc');  
        const inputEl = document.querySelector('#inputExpense');
        let btnEl = document.querySelector('#addBtn');
        let tableEl = document.querySelector('.expenseTable');

        // starting from zero
        let totalExpense = 0;
        // listing the expenses
        const allExpenses = [];

        // making desired function(oncick add inputExpense to totalExpense)        
        
        function addExpenseToTotal() {
            // making object for expenses
            const expenseItems = {};

           //    reading value from input 
           const descText = inputDesc.value;
           const amtText = inputEl.value;

           //convert it to number
           const expense = parseInt(amtText, 10); //why 10

           //putting the info in the expenseItems object
           expenseItems.desc = descText;
           expenseItems.amt = amtText;
           
           // pushing the data in the allExpenses array
           allExpenses.push(expenseItems);
           
           //add that value to totalExpense
           totalExpense = totalExpense + expense;    

            // setting the amount element to totalExpense
            amtEl.textContent = totalExpense;
            
            // making table for only two list items
            const data1 = allExpenses[0];
            const data2 = allExpenses[1];

            const data1Text = `${data1.desc} : ${data1.amt}`;
            const data2Text = `${data2.desc} : ${data2.amt}`;
            
            const theTable = `
            <div>${data1Text}</div>
            <div>${data2Text}</div>
            `;
            tableEl.innerHTML = theTable;
        }

        // listening click event
        btnEl.addEventListener('click', addExpenseToTotal, false); // why it is false
