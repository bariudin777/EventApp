import { Component, OnInit, Input, SkipSelf } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';



@Component({
  selector: 'app-birthday-form',
  templateUrl: './birthday-form.component.html',
  styleUrls: ['./birthday-form.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useFactory: (container: ControlContainer) => container,
    deps: [[new SkipSelf(), ControlContainer]],
  }]
})
export class BirthdayFormComponent implements OnInit {

  @Input() modelGroupName: string | undefined;
  constructor() { }
  ngOnInit(): void {
  }

}
