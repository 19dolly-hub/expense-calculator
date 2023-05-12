        // getting all elements
        let amtEl = document.querySelector('#amt');
        const spentEl = document.querySelector('#inputDesc');  
        const inputEl = document.querySelector('#inputExpense');
        let btnEl = document.querySelector('#addBtn');
        let tableEl = document.querySelector('#expenseTable');

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
           expenseItems.moment = new Date();
           
           // pushing the data in the allExpenses array
           allExpenses.push(expenseItems);
           
           //add that value to totalExpense
           totalExpense = totalExpense + expense;    

            // setting the amount element to totalExpense
            amtEl.textContent = totalExpense;
            
            // calling map on the array
            const allExpensesHTML = allExpenses.map(expenseItems => addHTML(expenseItems));

            // joining allExpenseHTML [making array as string]
            let joinAllExpensesHTML = allExpensesHTML.join('');
            
            // showing on the app
            tableEl.innerHTML = joinAllExpensesHTML;
        };

        // listening click event
        btnEl.addEventListener('click', addExpenseToTotal, false); // why it is false

        // separating function for adding HTML 
        function addHTML({desc, amt, moment}){
            return `                
            <li class="list-group-item">
            <small id="date"> ${addDate(moment)} </small>
            <br>
            <div class="list-item">
            ${desc} : ${amt} 
            <button type="button" class="btn btn-outline-danger" id="removeBtn">Remove</button>
            </div>
            </li>
        `;
        };

        // separating function for adding Date to HTML
        function addDate(theDate){
            return theDate.toLocaleDateString('en-US', {year:'numeric', month:'long', day:'numeric'});
        }; // call by reference- pass by reference