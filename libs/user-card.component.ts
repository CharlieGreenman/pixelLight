import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'pixelLight-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

}
@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [UserCardComponent],
  exports: [UserCardComponent],
})
export class UserCardComponentModule {}