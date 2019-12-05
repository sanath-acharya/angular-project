
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  p:number=1;

  constructor(private router: Router) {}

  ngOnInit() {}
  search(term: string) {
    console.log(term);
    this.router.navigate(["search", term]);
  }

}