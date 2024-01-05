import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

// Models
import { Balance } from '../../models/balance.model';
import { Transaction } from '../../models/transaction.model';

// Components
import { BalanceComponent } from '../../components/balance/balance.component';
import { TransactionsComponent } from '../../components/transactions/transactions.component';

// Services
import { TransactionsService } from '../../services/transactions.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BalanceComponent, TransactionsComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  transactions!: Transaction[]
  balance: Balance = {
    amount: 55_000,
    income: 100_000,
    expenses: 45_000,
  };

  // Provee el servicio al componente usando Denpendency Injection
  constructor(private transactionService: TransactionsService) { }

  ngOnInit(): void {
    this.transactionService.get().subscribe((response: Transaction[]) => {
      this.transactions = response
    })
  }

  removeTransaction(id: string) {

    // Elimina la trnasaccion del backend
    this.transactionService.remove(id).subscribe((response: Transaction) => {
      console.log(response);
      // Elimina la transaccion del arreglo
      this.transactions = this.transactions.filter(
        transaction => transaction.id !== id
      );
    })



  }
}
