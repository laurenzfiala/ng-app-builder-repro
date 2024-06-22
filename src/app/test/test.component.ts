import {Component, input} from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html'
})
export class TestComponent {
  id = input.required<string>();
}
