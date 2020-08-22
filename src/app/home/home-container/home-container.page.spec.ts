import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeContainerPage } from './home-container.page';

describe('HomeContainerPage', () => {
  let component: HomeContainerPage;
  let fixture: ComponentFixture<HomeContainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeContainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
