import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from '../../../model/game';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'cards-zone',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cards-zone.component.html',
  styleUrl: './cards-zone.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsZoneComponent {

    cards: Card[] = [];

    onCardOpened(car: Card): void {

    }
}
