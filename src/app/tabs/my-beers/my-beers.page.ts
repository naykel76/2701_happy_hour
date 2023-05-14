import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-my-beers',
  templateUrl: './my-beers.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MyBeersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
