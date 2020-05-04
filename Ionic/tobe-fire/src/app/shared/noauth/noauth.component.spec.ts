import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoauthComponent } from './noauth.component';

describe('NoauthComponent', () => {
  let component: NoauthComponent;
  let fixture: ComponentFixture<NoauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoauthComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
