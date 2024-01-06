import { ComponentFixture, TestBed } from '@angular/core/testing';

// Objetos de pruebas para routing
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";

import { TransactionsComponent } from './transactions.component';
import { TransactionComponent } from '../transaction/transaction.component';


describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsComponent, TransactionComponent, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {}
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // Obtiene el HTML del componente
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should display all transactions", () => {

    const dummyTransactions = [
      { id: "1", type: "income", amount: 200, category: "payroll", date: new Date() },
      { id: "2", type: "expense", amount: 50, category: "food", date: new Date() },
      { id: "3", type: "expense", amount: 100, category: "entertaiment", date: new Date() }
    ]

    // Modifica los datos del componente
    component.transactions = dummyTransactions;
    // Forza la deteccion de cambios del componente
    fixture.detectChanges();

    // Verofica la cantidad de elementos
    const appTrasactionElements = compiled.getElementsByTagName('app-transaction');
    expect(appTrasactionElements.length)
      .toBe(dummyTransactions.length);

    const icons = compiled.querySelectorAll(
      'app-transaction .transaction .transaction__icon'
    );
    // Veirica la clase CSS de los elementos generados
    expect(icons[0]).toHaveClass('transaction__icon-income')
    expect(icons[1]).toHaveClass('transaction__icon-expense')
    expect(icons[2]).toHaveClass('transaction__icon-expense')
  })
});
