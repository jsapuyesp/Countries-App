import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ByCountryComponent } from './by-country.component';
import { CountryService } from '../../services/country.service';
import { AppModule } from '../../../app.module';



describe('ByCountry Page', () => {
  let fixture: ComponentFixture<ByCountryComponent>
  let byCountryComponent: ByCountryComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [
        ByCountryComponent
      ],
      providers: [CountryService]
    }).compileComponents();

  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(ByCountryComponent);
    byCountryComponent = fixture.componentInstance;
  })

  it('should create the component', () => {
    expect(byCountryComponent).toBeTruthy();
  });

  it('should have variable called "countries" with value [] as default', () => {
    expect(byCountryComponent.countries).toBeTruthy();
    expect(byCountryComponent.countries).toEqual([]);
  });

  it('should have variable called "isError" with value false as default', () => {
    expect(byCountryComponent.isError).toBeFalsy();
    expect(byCountryComponent.isError).toEqual(false);
  });

  it('should have a value in the variable "termino" after call the function "buscar"', () => {
    const term = 'Col';
    byCountryComponent.buscar('Col');
    expect(byCountryComponent.termino).toEqual(term);
    expect(byCountryComponent.isError).toEqual(false);
  });

});