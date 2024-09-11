import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./layouts/footer/footer.component";
import {HeaderComponent} from "./layouts/header/header.component";
import {slideInDownAnimation} from "./animations/side-down";
import {NgIf} from "@angular/common";
import {slideInUpAnimation} from "./animations/side-up";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, NgIf,  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInDownAnimation, slideInUpAnimation],
})
export class AppComponent implements OnInit{
  title = 'Detki_Production';

  isView: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.isView = true;
    },1000)
  }
}
