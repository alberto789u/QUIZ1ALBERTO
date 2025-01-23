import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  event = new FormControl('', Validators.required);
  date1 = new FormControl('', Validators.required);
  date2 = new FormControl('', Validators.required);
  loc = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  tel = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);

  lol: {event: string | null, date1: string | null, date2: string | null, loc: string | null, name: string | null, tel: string | null}[] = [];

  constructor() {}

  up() {
    this.event.markAsTouched();
    this.date1.markAsTouched();
    this.date2.markAsTouched();
    this.loc.markAsTouched();
    this.name.markAsTouched();
    this.tel.markAsTouched();

    if (1) {
      const evento = {
        event: this.event.value,
        date1: this.date1.value,
        date2: this.date2.value,
        loc: this.loc.value,
        name: this.name.value,
        tel: this.tel.value
      };
      this.lol.push(evento);
    } else {
      console.log('Formulario inválido');
      console.log({
        event: this.event.errors,
        date1: this.date1.errors,
        date2: this.date2.errors,
        loc: this.loc.errors,
        name: this.name.errors,
        tel: this.tel.errors
      });
    }
  }
}
