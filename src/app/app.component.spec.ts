import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import{ AppSettings} from './app.config';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async ()=>{
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    });

  it('should create the component', () => {
    expect(app).toBeTruthy();
  });
  it(`should have as title 'My Calculator App'`,()=>{
    expect(app.appTitle).toEqual(AppSettings.appTitle);
  } );
  it('should render title in the DOM',()=>{
    fixture.detectChanges();
    const compiled=fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain(AppSettings.appTitle);
  });
  });
