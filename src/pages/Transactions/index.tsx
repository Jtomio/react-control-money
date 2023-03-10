import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { PriceHisghLight, TransactionContainer, TransactionTable } from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {

  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHisghLight variant={transaction.type}>
                      {transaction.price}
                    </PriceHisghLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}




          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}