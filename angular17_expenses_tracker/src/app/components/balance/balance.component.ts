import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.scss'
})
export class BalanceComponent {
  // Variable de tipo inplicito
  title = "This is the Balance component";
  // Variable de tipo explicito
  search: string = "iPhone 15 Pro Max";
}
