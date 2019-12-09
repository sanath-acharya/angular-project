import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
type=""
  ngOnInit() {
    this.type=sessionStorage.getItem('type')
  }

  title = 'argon-dashboard-angular';
}
