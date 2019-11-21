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
  
 Associates = [
    {'name': "sanath",
    'email':"sanath@gmail.com",

    'phone' :2343245,
    'skills1':['angular','c++','spring']
    },
    {'name': "KINI",
    'email':"sanath@gmail.com",

    'phone' :2343245,
    'skills2':['angular','c','spring-boot']
  }
    
];
   
   
  

}
