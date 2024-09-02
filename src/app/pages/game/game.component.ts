import { Component } from '@angular/core';
import { GamePanelComponent } from "./game-panel/game-panel.component";
import { CardsZoneComponent } from "./cards-zone/cards-zone.component";

@Component({
  selector: 'game',
  standalone: true,
  imports: [GamePanelComponent, CardsZoneComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

}
