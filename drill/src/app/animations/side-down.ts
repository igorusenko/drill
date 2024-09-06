import { trigger, transition, style, animate } from '@angular/animations';

export const slideInDownAnimation = trigger('slideInDownAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)', opacity: 0 }),
    animate('0.7s ease-in-out', style({ transform: 'translateY(0)', opacity: 1 })),
  ]),
  transition(':leave', [
    animate('0.7s ease-in-out', style({ transform: 'translateY(-100%)', opacity: 0 })),
  ]),
]);
