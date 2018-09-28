import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).foundation();
  }
}
