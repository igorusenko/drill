import {animate, state, style, transition, trigger} from "@angular/animations";

export const slideInUpAnimation = trigger('slideInUpAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }), // Начинаем ниже
    animate('0.7s ease-in-out', style({ transform: 'translateY(0)', opacity: 1 })) // Поднимаемся вверх
  ]),
  transition(':leave', [
    animate('0.7s ease-in-out', style({ transform: 'translateY(100%)', opacity: 0 })) // Уходим вниз
  ])
]);
