import { TestBed } from '@angular/core/testing';
import { DealersService } from './dealers.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Post } from '../model/post.model';

describe('DealersService', () => {
  let service: DealersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(DealersService);
    httpMock = TestBed.get(HttpTestingController);
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
        console.log('**** this function executed');
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
  });

  it('should subscribe the dealer by id remotely', function () {
    service.getRemoteDealerById().subscribe(
      result => {
        expect(result).toContain({
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        });
      }
    );
  });

  afterEach(()=>{
    // httpMock.verify();
  });

  it('should retrieve posts from the API via GET', function () {
    const dummyPosts: Post[] = [
      { userId: '1', id: 1, body: 'Hello World', title: 'Testing Angular' },
      { userId: '1', id: 2, body: 'Hello World 2', title: 'Testing Angular 2' }
    ];

    service.getRemotePosts().subscribe(
      result => {
        console.log('http mock << ');
        console.log(result);
        console.log('http mock >> ');
        expect(result.length).toBe(2);
        expect(result).toEqual(dummyPosts);
      }
    );

    const request = httpMock.expectOne(service.REST_ENDPOINT + 'posts');
    // expect(request.request.method).toBe('GET');

    request.flush(dummyPosts);
  });

});
