import { Header } from "../../components/Header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHisghLight, TransactionContainer, TransactionTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHisghLight variant="income">
                  R$ 12,000,00
                </PriceHisghLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hospedagem</td>
              <td><PriceHisghLight variant="outcome">
                -R$ 2.000,00
              </PriceHisghLight></td>
              <td>férias</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td><PriceHisghLight variant="income">
                R$ 1,000,00
              </PriceHisghLight></td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}