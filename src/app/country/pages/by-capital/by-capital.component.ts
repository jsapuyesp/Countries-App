import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  termino: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: CountryService) { }

  buscar(termino: string) {

    this.isError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
      .subscribe(countries => {
        this.countries = countries;
      }, err => {
        this.isError = true;
        this.countries = []
      })
  }

}
