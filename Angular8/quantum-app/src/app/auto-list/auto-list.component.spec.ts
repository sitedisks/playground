import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AutoListComponent } from './auto-list.component';
import { AppComponent } from '../app.component';
import { compileComponentFromMetadata } from '@angular/compiler';
import { HttpClientModule } from '@angular/common/http';
import { DealersService } from '../services/dealers.service';

describe('AutoListComponent', () => {
  let component: AutoListComponent;
  let fixture: ComponentFixture<AutoListComponent>;
  let service: DealersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AutoListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(DealersService);
  });

  function dd() { }
  const d = function () { };

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 Brands coming from ngFor directive', () => {
    const el = fixture.debugElement.queryAll(By.css('.cars-list>li'));
    console.log(el);
    const complied = fixture.debugElement.nativeElement;
    const e = complied.querySelector('.cars-list');
    console.log(e);
    expect(el.length).toBe(3);
  });

  it('ngIf directive in component', () => {
    const compiled = fixture.debugElement.nativeElement;
    const el = compiled.querySelector('#carLength');
    expect(el.textContent).toContain('vehicles', 'vehicles');
  });

  it('test ngSwitch directive in component', function () {
    const complied = fixture.nativeElement;
    const el = complied.querySelector('.data-tab>div');
    expect(el.textContent).toContain('Case 1');
  });

  it('should test the custom directive', () => {
    spyOn(component, 'findAuto').and.returnValue('find me');
    let se = component.findAuto();
    console.log('>> ' + se);
    // expect(component.findAuto).toHaveBeenCalled();
    expect(se).toEqual('find me');
  });

  it('should click a button and call method findDealers', async(
    () => {
      spyOn(component, 'findDealers').and.callThrough();
      let d = component.findDealers();
     
      console.log(d);
      expect(d.length).toEqual(4);
    })
  ) 

});
