import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs'; 
import 'rxjs/Rx';
import { from, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  secondes: number;
  counterSubscription: Subscription; 

  constructor() { }

  ngOnInit(){
    const counter = Observable.interval(1000);
    // const counter = interval(1000);
    // counter.subscribe(
    //   (value: number)=>{
    //     this.secondes = value;
    //   },
    //   (error: any)=>{
    //     console.log('Une erreur a étérencontrée ! ');
    //   },
    //   ()=>{
    //     console.log('Observable complétée');
    //   }
    // );
    this.counterSubscription = counter.subscribe(
      (value: number)=>{
        this.secondes = value;
      }
    );
  }

  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }
} 
