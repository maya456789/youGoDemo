import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryapiService } from '../countryapi.service';
import {obj} from '../filter.pipe'
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent implements OnInit {

  countryList:any;
  searchBoxTxt: string = '';
  selectedOption: any;
  options:any;
  optdata:any[]=[];
  _filterText:string='';

constructor(private country:CountryapiService,private fb:FormBuilder,private route:Router){
this.fb.group({
  
})}

  ngOnInit(): void {
    this.countryList=this.country.getCountry();
    this.options=this.country.getCountry();
    console.log("Country are",this.countryList);
    
  }

  get filterText(){
    return this._filterText;
  }

  set filterText(value:string){
    this._filterText=value;
    
    this.countryList=this.filterCountryByRegion(value);
  }

  filterCountryByRegion(filterTerm:string){
     if(this.countryList.length === 0 || this._filterText === ''){
      return this.countryList;
     }else{
       return this.countryList.filter((country:any)=>
       {
        return country.region.toLowerCase() === filterTerm.toLowerCase()
       })
     }
  }


  countryRegion(reg:any){
   // this.searchBoxTxt=this.selectedOption;
    console.log("reg is:",reg.value);
   // this._filterText=reg.value;
   this.selectedOption=reg.region;
    this.optdata.push([{'region':reg.value}]);
  // obj.transform(this.countryList,this.selectedOption);
    
  }
  

  countryCode(getCode:any){
    console.log(getCode);
    this.route.navigate([`country-detail/${getCode}`])
  }

}
