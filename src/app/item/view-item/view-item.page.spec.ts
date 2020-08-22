import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewItemPage } from './view-item.page';

describe('ViewItemPage', () => {
  let component: ViewItemPage;
  let fixture: ComponentFixture<ViewItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
