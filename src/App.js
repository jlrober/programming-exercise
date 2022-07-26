import { useEffect, useState } from 'react';
import getTransactions from './transactions';
import UserCardComp from './UserCardComp';
import { calculateRewardsPoints, groupTransactionsByUser, calculateTotals } from './formatData';


function App() {
  const [transactionData, setTransactionData] = useState([]);
  const [totalData, setTotalData] = useState({});

  useEffect(() => {
    getTransactions().then(res => {
      setTransactionData(res);
    });
  }, []);

  useEffect(() => {
    if (transactionData.length) {
      const transactionsWithRewards = calculateRewardsPoints(transactionData);
      const transactionsByUser = groupTransactionsByUser(transactionsWithRewards);
      const transactionsWithTotals = calculateTotals(transactionsByUser);
      setTotalData(transactionsWithTotals);
    }
  }, [transactionData]);

  const userCards = Object.keys(totalData).map(d => <UserCardComp data={totalData[d]} id={d} key={d} />);

  return (
    <div className="App">
      {userCards.length ? userCards : 'Loading'}
    </div>
  );
}

export default App;
