function UserCardComp({ data, id }) {
   return <div>
      <div>{`User: ${id}`}</div>
      <div>{`Total: ${data.total}`}</div>
      <ul>
         {Object.keys(data.monthlyTotals).map(t => <li key={`${id}-${t}`}>{`${t}: ${data.monthlyTotals[t]}`}</li>)}
      </ul>
   </div>
}

export default UserCardComp;