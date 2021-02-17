import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newplan',
  templateUrl: './newplan.component.html',
  styleUrls: ['./newplan.component.css']
})
export class NewplanComponent implements OnInit {

  
  public allergies: string[] = [
    "Corn", "Egg", "Fish", "Meat", "Milk", "Peanut", "Shellfish", "Soy", "TreeNut", "Wheat", "FPIES"
  ]
  public cuisines: string[] = [
    "-- Options --", "Chinese", "Mexican", "Italian", "Japanese", "Greek", "French", "Thai", "Spanish", "Indian", "Mediterranean"
  ]
  public features: string[] = [
    "-- Options --", "MeatLover", "Vegetarian", "LowCarb", "Vegan"
  ]
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
