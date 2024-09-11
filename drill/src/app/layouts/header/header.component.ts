import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'header-block',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerImages: Array<string> = [
    'header_1.svg',
    'header_2.svg',
    'header_3.svg',
  ]

  redirectToTelegram(): void {
    window.location.href = 'https://t.me/detkiprod';
  }
}
