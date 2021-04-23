import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import {Apollo, gql } from "apollo-angular";
//import gql from "graphql-tag";
import {Observable} from 'rxjs';


const search_Hotel = gql`
query getHotel {
  getHotel{
hotel_id  
hotel_name
street
city
price
email
}
}
`;

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  //hotels  = [];
  hotels: any[];
  loading = true;
  constructor(private router: Router,private apollo: Apollo) { }


  getHotels(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query:search_Hotel,
    }).valueChanges;
  }

  ngOnInit(): void {

    this.getHotels().subscribe((data) => {
      this.hotels = data.data.getHotel;
      console.log(this.hotels)
      console.log(data)
    })




  // this.apollo
  // .query<any>({
  //  query: search_Hotel,
  //  variables:{
  //  }
  // })
  // .subscribe(({data, loading}) => {
  //     this.hotels =  data && data.hotels;
  //     this.loading = loading;
  //     console.log(this.hotels)
    
  // }
  // );


  }

}
