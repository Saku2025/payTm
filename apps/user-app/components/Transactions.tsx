

export default async function  Transactions(){
    const p2pHistory = await P2p();
  const transactions = await getOnRampTrans();
  return (
    <div className="w-full pr-4">
      <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
        Transactions
      </div>
      <div className="flex gap-4">
        <OnrampCard transactions={transactions} />
        <P2pTransactionCard p2p={p2pHistory} />
      </div>
    </div>
  )
}

