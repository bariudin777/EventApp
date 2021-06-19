import { Component, Input, OnInit, SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-organize-trip-form',
  templateUrl: './organize-trip-form.component.html',
  styleUrls: ['./organize-trip-form.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useFactory: (container: ControlContainer) => container,
    deps: [[new SkipSelf(), ControlContainer]],
  }]
})
export class OrganizeTripFormComponent implements OnInit {
  @Input() modelGroupName: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
