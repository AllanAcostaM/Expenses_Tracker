import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

// Formularios
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

// Models
import { Transaction } from '../../models/transaction.model';

// Services
import { TransactionsService } from '../../services/transactions.service';


@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.scss'
})
export class AddTransactionComponent implements OnInit {


  constructor(private transactionsService: TransactionsService, private router: Router) { }

  addTransactionForm!: FormGroup;


  // Se ejecuta en el montaje del componente en el DOM Tree
  ngOnInit(): void {
    // Inicializacion del formulario
    this.addTransactionForm = new FormGroup({
      amount: new FormControl(0, [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
      type: new FormControl('expense', Validators.required),
      category: new FormControl('', Validators.required),
      date: new FormControl('2024-01-01', Validators.required),
    });
  }
  onSubmit() {
    // Verifica si el formulario es valido
    if (this.addTransactionForm.valid) {
      console.log(this.addTransactionForm.value);
      console.log("Formulario valido");
      // Obtiene el objeto del formulario con los datos de la transaccion;
      const transaction = this.addTransactionForm.value;

      // Accede al servicio del backend para crear una transaccion
      this.transactionsService
        .create(transaction)
        .subscribe((response: Transaction) => {
          this.router.navigate(['/'])
          // Navega al home de la aplicacion
        })
    }
  }
}
