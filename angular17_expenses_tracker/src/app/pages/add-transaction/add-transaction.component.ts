import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Formularios
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.scss'
})
export class AddTransactionComponent implements OnInit {

  addTransactionForm!: FormGroup;


  // Se ejecuta en el montaje del componente en el DOM Tree
  ngOnInit(): void {
    // Inicializacion del formulario
    this.addTransactionForm = new FormGroup({
      amount: new FormControl(0),
      type: new FormControl('expense'),
      category: new FormControl(''),
      date: new FormControl(''),
    });
  }
  onSubmit() {
    console.log(this.addTransactionForm.value);

  }
}
