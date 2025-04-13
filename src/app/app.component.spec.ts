import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SingleSpaProps, SINGLE_SPA_PROPS } from './single-spa-props'
import * as singleSpa from 'single-spa';

describe('AppComponent', () => {
  beforeEach(async () => {
    const props: SingleSpaProps = {
      favoriteDog: "Franklin",
      mountParcel: singleSpa.mountRootParcel,
      name: "angular-mfe-rate-doggos",
      singleSpa
    }

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideExperimentalZonelessChangeDetection(), {
        provide: SINGLE_SPA_PROPS,
        useFactory: () => props
      }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-mfe-rate-doggos' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-mfe-rate-doggos');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Rate doggos Franklin');
  });
});
