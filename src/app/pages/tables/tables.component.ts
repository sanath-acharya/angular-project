import { Associates } from './../../associates';
import { AssociateService } from './../../service/associate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(private AssociateService:AssociateService) { }
  allAssociates:any[];
  ngOnInit() {
    this.AssociateService.getAllAssociates().subscribe(
      (response:Associates[])=>{
        this.allAssociates=response;
      },
      (error)=>{
        console.log(error);
        alert(error+ "this. is error");

      }    )
  }
  

   
   
  

}
