
import { Component, OnInit } from '@angular/core';
import { Associate } from 'src/app/model/associate';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private searchText:string='';
  associate:any;
  constructor() { 
   this.associate = [

    { "associateFirstName":"ben","associateLastName":"skdsjf","associateEmail":"jejl@gmal.com","password":"pass","associateMobile":341341234,"dob":"22/22/2345","gender":"male","location":"22/22/2345","country":"male"},
    { "associateFirstName":"ben","associateLastName":"skdsjf","associateEmail":"jejl@gmal.com","password":"pass","associateMobile":341341234,"dob":"22/22/2345","gender":"male","location":"22/22/2345","country":"male"},
    { "associateFirstName":"ben","associateLastName":"skdsjf","associateEmail":"jejl@gmal.com","password":"pass","associateMobile":341341234,"dob":"22/22/2345","gender":"male","location":"22/22/2345","country":"male"}
  //     { "
      
      // associateFirstName:'ben',
      // associateLastName:'skdsjf',
      // associateEmail:'jejl@gmal.com',
      // password:'pass',
      // associateMobile:341341234,
      // dob:'22/22/2345',
      // gender:'male',
      // location:'22/22/2345',
      // country:'male'
   ];


   
  }
  
  // search(){
  //   if(this.searchText!=""){

  //   }else if(this.searchText==""){

  //   }
  //    this.associate=this.associate.filter(res=>{
  //       return res.searchText.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
  //    });
  // }
  

  ngOnInit() {
  //  let associate=[
  //     { "associateFirstName":"ben","associateLastName":"skdsjf","associateEmail":"jejl@gmal.com","password":"pass","associateMobile":341341234,"dob":"22/22/2345","gender":"male","location":"22/22/2345","country":"male"},
  //     { "associateFirstName":"ben","associateLastName":"skdsjf","associateEmail":"jejl@gmal.com","password":"pass","associateMobile":341341234,"dob":"22/22/2345","gender":"male","location":"22/22/2345","country":"male"}
  //   ];
}
}