import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'fc-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public errorMessage: string) { }

  ngOnInit(): void {

  }

}