import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateItemFormPage } from './create-item-form.page';

describe('CreateItemFormPage', () => {
  let component: CreateItemFormPage;
  let fixture: ComponentFixture<CreateItemFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateItemFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateItemFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
