import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-find-mates',
  templateUrl: './find-mates.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FindMatesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
