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
  sugerenciasList: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: CountryService) { }

  buscar(termino: string) {

    this.isError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.paisService.buscarPais(termino)
      .subscribe(countries => {
        this.countries = countries;
      }, err => {
        this.isError = true;
        this.countries = []
      })
  }

  sugerencias(termino: string) {
    this.isError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
      .subscribe(paises => this.sugerenciasList = paises.splice(0, 5),
        err => this.sugerenciasList = []);
    this.mostrarSugerencias = true;

  }

  buscarSugerido(termino: string) {
    this.buscar(termino);

  }

}
