import { TestBed } from '@angular/core/testing';

import { DealersService } from './dealers.service';
import { HttpClientModule } from '@angular/common/http';

describe('DealersService', () => {
  let service: DealersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(DealersService);
    // service = TestBed.get(DealersService); get wasn't type safe always retuned any - error prone
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('dependency injection to get 4 dealers', () => {
    let dealers = service.getDealers();
    expect(dealers.length).toBe(4);
  });

  it('test if the first Dealer is North Auto', () => {
    let dealers = service.getDealers();
    expect(dealers[0].name).toBe('North Auto');
  });

  it('test if the dealer returned from object is World Auto', () => {
    let dealerObj = service.getDealerObj();
    expect(dealerObj.name).toBe('Auto');
  });

  it('should subscribe the data remotely', () => {
    service.getRemoteDealers().subscribe(
      result => {
        expect(result).toContain({
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
              "lat": "-71.4197",
              "lng": "71.7478"
            }
          },
          "phone": "1-477-935-8478 x6430",
          "website": "ola.org",
          "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
          }
        });
      }
    );
  })

});
