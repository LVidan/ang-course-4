import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {

  constructor() { }

  inputData: string;

  ngOnInit(): void { }

  alertContent(data: string): void {
    alert(`Bravo! Uneli ste: ${data}`);
  }
}
