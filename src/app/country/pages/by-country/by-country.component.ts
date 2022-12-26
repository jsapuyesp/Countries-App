import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../country/services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class ByCountryComponent {

  termino: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: CountryService) { }

  buscar(termino: string) {

    this.isError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
      .subscribe(countries => {
        this.countries = countries;
      }, err => {
        this.isError = true;
        this.countries = []
      })
  }
}
