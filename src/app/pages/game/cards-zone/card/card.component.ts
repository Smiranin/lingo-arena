import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Card, CardStatus } from '../../../../model/game';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input({required: true}) card!: Card;

  @Output() openedCard: EventEmitter<Card> = new EventEmitter();

  readonly CardStatus = CardStatus;

  handleClick(): void {
    if (this.card.status !== CardStatus.closed) return;
    this.openedCard.emit(this.card);
  }
}
