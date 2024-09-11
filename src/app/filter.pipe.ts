// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(data: Array<any>, searchTxt: string ): Array<any> {
    console.log("Data is:-",data);
    console.log("SearchTxt is:-",searchTxt);
    return data.filter(getData);
        function getData(value:any, index:any){
           // console.log("Value is:-",value.name);
            if(value.name.toUpperCase().indexOf(searchTxt.toUpperCase()) > -1 ) {
                return data[index];
              }else if(value.region.toUpperCase().indexOf(searchTxt.toUpperCase()) > -1 ){
                return data[index];
              }
               
        };
  };
  
  }

export let obj:SearchBoxPipe = new SearchBoxPipe(); 