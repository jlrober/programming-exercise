const transactions = [
   {
      id: 0,
      amount: '50.00',
      date: '05/01/2022',
      customer_id: 0
   },
   {
      id: 1,
      amount: '51.00',
      date: '05/02/2022',
      customer_id: 1
   },
   {
      id: 2,
      amount: '100.00',
      date: '04/01/2022',
      customer_id: 0
   },
   {
      id: 3,
      amount: '101.00',
      date: '04/02/2022',
      customer_id: 1
   },
   {
      id: 4,
      amount: '120.00',
      date: '04/05/2022',
      customer_id: 0
   },
   {
      id: 5,
      amount: '150.00',
      date: '04/21/2022',
      customer_id: 1
   },
   {
      id: 6,
      amount: '120.50',
      date: '04/25/2022',
      customer_id: 1
   },
]

async function getTransactions() {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve(transactions);
      }, 2000);
   });
}

export default getTransactions;