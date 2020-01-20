import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarNotasPage } from './editar-notas.page';

describe('EditarNotasPage', () => {
  let component: EditarNotasPage;
  let fixture: ComponentFixture<EditarNotasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarNotasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarNotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
