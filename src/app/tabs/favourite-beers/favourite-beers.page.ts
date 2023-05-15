import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-favourite-beers',
  templateUrl: './favourite-beers.page.html',
  styleUrls: ['./favourite-beers.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FavouriteBeersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
