import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  isViewLogo: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.isViewLogo = true;
    }, 2000)
  }

}
