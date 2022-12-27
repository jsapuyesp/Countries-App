import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './country.service';

describe('Country Service', () => {
  let service: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CountryService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  })

  it('should be recieve information about Colombia', done => {
    service.buscarPais('Colombia')
      .subscribe(pais => {
        expect(pais[0].name.common).toBe('Colombia');
        done();
      });
  });

})