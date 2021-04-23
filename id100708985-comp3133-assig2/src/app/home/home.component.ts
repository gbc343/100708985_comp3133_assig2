import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import {Apollo, gql } from "apollo-angular";
//import gql from "graphql-tag";
import {Observable} from 'rxjs';


const search_Hotel = gql`
query getBookings {
  getBookings{
hotel_id  
booking_date
booking_start
user_id
}
}
`;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookings: any[];
  loading = true;

  constructor(private router: Router,private apollo: Apollo) { }

  getBookings(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query:search_Hotel,
    }).valueChanges;
  }


  ngOnInit(): void {


    this.getBookings().subscribe((data) => {
      this.bookings = data.data.getBookings;
      console.log(this.bookings)
      console.log(data)
    })
  }



  

}
