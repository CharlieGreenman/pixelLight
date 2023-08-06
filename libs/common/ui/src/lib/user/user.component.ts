import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'pixelLight-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

}
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent],
  exports: [UserComponent],
})
export class UserModule {}