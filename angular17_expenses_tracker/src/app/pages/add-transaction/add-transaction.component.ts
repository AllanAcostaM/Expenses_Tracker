import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Formularios
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


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
      console.log("Formulario valido");
    } else {
      console.error("No validos");
    }

    // const data = {
    //   ...this.addTransactionForm.value,
    //   amount: parseInt(this.addTransactionForm.controls
    //   ["amount"].value),
    // };


    console.log(this.addTransactionForm);
    console.log(this.addTransactionForm.value);

  }
}
