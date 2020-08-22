import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewMatchPage } from './view-match.page';

describe('ViewMatchPage', () => {
  let component: ViewMatchPage;
  let fixture: ComponentFixture<ViewMatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMatchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
