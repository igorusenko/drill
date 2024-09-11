import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'footer-block',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerImages: Array<string> = [
    'footer_2.svg',
    'footer_3.svg',
    'footer_4.svg',
    'footer_5.svg',
    'footer_6.svg',
  ]
}
