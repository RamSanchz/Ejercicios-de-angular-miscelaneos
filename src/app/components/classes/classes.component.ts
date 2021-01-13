import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
})
export class ClassesComponent implements OnInit {
  alerta: string = 'alert-danger';

  propiedades: Object = {
    danger: false,
  };

  loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ejecutar() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
