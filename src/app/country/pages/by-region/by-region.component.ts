import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {

  regiones: string[] = ['EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];




  constructor(private paisService: CountryService) { }

  getCss(region: string): string {
    return (region === this.regionActiva)
      ? 'btn btn-primary m-1'
      : 'btn btn-outline-primary m-1';
  }

  activarRegion(region: string) {

    if (region === this.regionActiva) { return; }

    this.regionActiva = region;
    this.paises = []


    this.paisService.buscarRegion(region)
      .subscribe(countries => { this.paises = countries });
  }
}
