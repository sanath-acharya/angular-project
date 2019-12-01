import { Component, OnInit } from '@angular/core';
import { Associate } from 'src/app/model/associate';
import { Router } from '@angular/router';
import { AddAssociateService } from 'src/app/service/add-associate.service';


@Component({
  selector: 'app-add-associate',
  templateUrl: './add-associate.component.html',
  styleUrls: ['./add-associate.component.scss']
})
export class AddAssociateComponent   implements OnInit {
  load=0
  private Associateinfo: Associate[] ;
  private editModel:Associate=new Associate(0,"","","","",0,"","","","");
  searchText="searchvalue";
  searchby="associateFirstName";
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  deleteIndex:number;
  deleteAssociate:Associate=new Associate(0,"","","","",0,"","","","");

  constructor(
    private AssociateService:AddAssociateService,
    
    private router: Router
 
  ) { }

  
  ngOnInit() {
    // if(this.load==0){
      this.getdata();
      // this.load=1
    }
    


    
  


  

  getdata(){
    this.AssociateService.getAssociate().subscribe(
      response=>{
        
      // console.log(response);
      // if(response!=null){
         
         
        //  this.usersJson= Array.of(response);
        console.log(response)
        //  console.log( this.usersJson)
        //  console.log(this.usersJson[0][0])
        this.setassociateinfo(response);
        // this.Associateinfo=response;

      },(error)=>{
        console.log(error);
        alert("Authentication failed");
      }
    );
  }

  setassociateinfo(response){
    this.Associateinfo=response;
  }
  
  onEdit(event,index:number){

    this.editModel=this.Associateinfo[index];
    
  
    this.AssociateService.updateAssociate(this.editModel);
    


  } 
  // onRemove(event,index:number){
  //   this.deleteIndex=index;
  //   this.deleteAssociate.associateFirstName= this.Associateinfo[index].associateFirstName;
  //   this.deleteAssociate.associateLastName=this.Associateinfo[index].associateLastName;
  //   this.deleteAssociate.associateEmail=this.Associateinfo[index].associateEmail;
  //   this.deleteAssociate.associateMobile=this.Associateinfo[index].associateMobile;
    


  // }
  onRemoveconfirm(event,associateId:number){
    console.log("tis. is ts");
    console.log(associateId);
    this.AssociateService.deletebyid(associateId).subscribe((resoponse)=>{
      console.log( resoponse);
    },(error)=>{
      console.log(error);
    })
    // .subscribe((response)=>{
    //   // this.deleteAssociate.associateFirstName=null;
    //   // this.deleteAssociate.associateMobile=null;
    //   // this.deleteAssociate.associateLastName=null;
    //   // this.deleteAssociate.associateEmail=null;
    // },(error)=>{
    //   console.log(error);
    //   console.log("after service calls")
    // })
    console.log("tis. after is ts")
  }

  onSearchClick(){
    console.log("working1")
console.log(this.searchText)
console.log("working2")
console.log(this.searchby)
console.log("working 3" )
    if(this.searchby=="associateMobile"){
      this.AssociateService.searchbymobile(this.searchText).subscribe(
        (response)=>{
          console.log(response);
          console.log("this is inside onsearch funtion");
          this.Associateinfo=response;
  
          console.log(Array.of(response));
          this.router.navigateByUrl['/viewAssociate']
  
          // console.log(this.searchresult)
          // this.ngOnInit()
        },(error)=>{
          console.log(error);
        }
      );


    }else if(this.searchby=="associateFirstName"){
      this.AssociateService.searchbyfirstname(this.searchText).subscribe(
        (response)=>{
          console.log(response);
          console.log("this is inside onsearch funtion");
          this.Associateinfo=response;
  
          console.log(Array.of(response));
          this.router.navigateByUrl['/viewAssociate']
  
          // console.log(this.searchresult)
          
        },(error)=>{
          console.log(error);
        }
      );

    }else if(this.searchby=="associateLastName"){
      this.AssociateService.searchbylastname(this.searchText).subscribe(
        (response)=>{
          console.log(response);
          console.log("this is inside onsearch funtion");
          this.Associateinfo=response;
  
          console.log(Array.of(response));
          this.router.navigateByUrl['/viewAssociate']
  
          // console.log(this.searchresult)
          
        },(error)=>{
          console.log(error);
        }
      );

    }else if(this.searchby=="associateEmail"){
      this.AssociateService.searchbyemail(this.searchText).subscribe(
        (response)=>{
          console.log(response);
          console.log("this is inside onsearch funtion");
          this.Associateinfo=response;
  
          console.log(Array.of(response));
          this.router.navigateByUrl['/viewAssociate']
  
          // console.log(this.searchresult)
          
        },(error)=>{
          console.log(error);
        }
      );

    }
   
  
  }



}












