import { Component, Inject } from '@angular/core';
import { SINGLE_SPA_PROPS, SingleSpaProps } from './single-spa-props';

@Component({
  selector: 'rate-doggos-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-mfe-rate-doggos';
  protected singleSpaProps: SingleSpaProps;
  constructor(@Inject(SINGLE_SPA_PROPS) singleSpaProps: SingleSpaProps) {
    this.singleSpaProps = singleSpaProps;
  }
}
