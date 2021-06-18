import { Component, Input, OnInit, SkipSelf } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
@Component({
  selector: 'app-picnic-form',
  templateUrl: './picnic-form.component.html',
  styleUrls: ['./picnic-form.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useFactory: (container: ControlContainer) => container,
    deps: [[new SkipSelf(), ControlContainer]],
  }]
})
export class PicnicFormComponent implements OnInit {
  @Input() modelGroupName: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
