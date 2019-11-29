export  class Associate {
   associateFirstName: string;
   associateLastName: string;

   associateEmail: string;
   password: string;
   associateMobile: number;
   dob: string;
   gender: string;
   location: string;
   country: string;
 
 

  constructor(

    associateFirstName: string,
    associateLastName: string,

    associateEmail: string,
    password: string,
    associateMobile: number,
    dob: string,
    gender: string,
    location: string,
    country: string) {

    this.associateFirstName = associateFirstName;
    this.associateLastName = associateLastName;
    this.associateEmail = associateEmail;
    this.associateMobile = associateMobile;
    this.dob = dob;
    this.gender = gender;
    this.country = country;
    this.location = location;

  }
}

