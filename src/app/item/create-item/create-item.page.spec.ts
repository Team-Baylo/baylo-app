import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateItemPage } from './create-item.page';

describe('CreateItemPage', () => {
  let component: CreateItemPage;
  let fixture: ComponentFixture<CreateItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
