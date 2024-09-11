import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryapiService } from '../countryapi.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.css'
})
export class CountryDetailComponent implements OnInit {

  countryDetails:any;
  currency:any=[];
  CC:any;
  lang:any;
  border:any;

  constructor(private aroute: ActivatedRoute,private country:CountryapiService){}

  ngOnInit(): void {
    const id = this.aroute.snapshot.paramMap.get('code');
    
    console.log("Id for Update is:-",id);

    this.countryDetails=this.country.getCountry().filter( (user) =>{
      return user.numericCode === id;
  }).map(function (user) {
      return user;
  })
  
  console.log("got details:",this.countryDetails);
  
  this.currency=this.country.getCountry().filter( (user) =>{
    return user.numericCode === id;
}).map(function (user) {
    return user.currencies;
})
    
  console.log("curr is:",this.currency);
  

  console.log("CC is:",this.CC);

  this.countryDetails.forEach((outer:any) => {
    console.log("Outer object ID:", outer.id);
    outer.currencies.forEach((inner:any) => {
      console.log("Inner object:", inner.code);
      this.CC=inner.code;
      this.lang=inner.name;
    });

    outer.languages.forEach((inner:any) => {
      console.log("Inner object:", inner.name);
  
      this.lang=inner.name;
    });

    outer.borders.forEach((inner:any) => {
      console.log("Inner object:", inner.name);
  
      this.border=inner;
    });
  });
  }

}
