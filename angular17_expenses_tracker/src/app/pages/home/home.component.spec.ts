import { ComponentFixture, TestBed } from '@angular/core/testing';


// Components
import { HomeComponent } from './home.component';
import { BalanceComponent } from '../../components/balance/balance.component';
import { TransactionsComponent } from '../../components/transactions/transactions.component';

// Routing
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

// Services
import { TransactionsService } from '../../services/transactions.service';
import { HttpClientModule } from '@angular/common/http';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        BalanceComponent,
        HttpClientModule,
        RouterTestingModule,
        TransactionsComponent,
      ],
      providers: [
        TransactionsService,
        {
          provide: ActivatedRoute,
          useValue: {}
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have in element with css class main', () => {
    const div = compiled.querySelector('.main');
    expect(div).toBeTruthy();
  });

  it('should calculate balance', () => {

    const dummyTransactions = [
      { id: '1', type: 'income', amount: 100, category: 'payroll', date: new Date() },
      { id: '2', type: 'expense', amount: 25, category: 'food', date: new Date() },
      { id: '3', type: 'expense', amount: 10, category: 'entertaiment', date: new Date() },
    ];

    // Asigna las transacciones al componete
    component.transactions = dummyTransactions;
    // Recalcula el balance
    component.calculateBalance();
    // Verifica las cantidades
    expect(component.balance.amount).toBe(65)
    expect(component.balance.expenses).toBe(35)
    expect(component.balance.income).toBe(100)
  })
});
