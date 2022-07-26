export function calculateRewardsPoints(transactions) {
   return transactions.map(t => {
     const amount = parseInt(t.amount);
     let reward = amount > 100 ? (amount - 100) * 2 : 0;
     const amountLimited = Math.min(amount, 100);
     reward += amountLimited > 50 ? amountLimited - 50 : 0;
     return { ...t, reward };
   });
 }
 
export function groupTransactionsByUser(transactions) {
   const transactionsByUser = {};
   transactions.forEach(t => {
     if (!transactionsByUser[t.customer_id]) {
       transactionsByUser[t.customer_id] = { transactions: [t] }
     } else {
       transactionsByUser[t.customer_id].transactions.push(t);
     }
   });
   return transactionsByUser;
 }
 
export function calculateTotals(transactionsByUser) {
   const transactionsWithTotals = {...transactionsByUser};
   Object.keys(transactionsByUser).forEach(user => {
     const usersTransactions = transactionsByUser[user].transactions || [];
     const monthlyTotals = {};
     let total = 0;
     usersTransactions.forEach(t => {
       const month = t.date.substring(0, t.date.indexOf('/'));
       const year = t.date.substring(t.date.indexOf('/', t.date.indexOf('/') + 1) + 1);
       const monthYear = `${month}${year}`;
       const rewardAmount = t.reward;

       if (monthlyTotals[monthYear]) {
         monthlyTotals[monthYear] += rewardAmount;
       } else {
         monthlyTotals[monthYear] = rewardAmount;
       }
       total += rewardAmount;
     }, {});
     transactionsWithTotals[user].monthlyTotals = monthlyTotals;
     transactionsWithTotals[user].total = total;
   });
   return transactionsWithTotals;
 }