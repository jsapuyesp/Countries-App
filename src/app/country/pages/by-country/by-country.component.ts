import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../country/services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  termino: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: CountryService) { }

  buscar() {

    this.isError = false
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
      .subscribe(countries => {
        this.countries = countries;
      }, err => {
        this.isError = true;
        this.countries = []
      })
  }

}
