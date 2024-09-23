import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SearchPipe } from '@pipes/search.pipe';
import { CardsService } from '@services/cards.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    AsyncPipe,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    SearchPipe,
    MatCardModule,
    JsonPipe,
    CommonModule,
    MatGridListModule,
    MatIconModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent {
  public id = input<string>();
  private CardsService = inject(CardsService);
  public cards$ = this.CardsService.getCards();
  public search = signal('');
  public equal(Gender: string, Status: string) {
    const request = [
      [
        {
          option: 'Male',
          icon: 'man',
          color: 'blue'
        },
        {
          option: 'Female',
          icon: 'woman',
          color: 'pink'
        },
        {
          option: 'unknown',
          icon: 'qr_code_2',
          color: 'white'
        }], [
        {
          option: 'Alive',
          icon: 'person',
          color: 'green'
        },
        {
          option: 'Dead',
          icon: 'person_off',
          color: 'red'
        },
        {
          option: 'unknown',
          icon: 'question_mark',
          color: 'white'
        }
      ]
    ]
    let response: any[] = [];
    response.push(!(request[0].find((item) => item.option === Gender)) ?
      ({ option: '', icon: '', color: '' }) :
      (request[0].find((item) => item.option === Gender)));
    response.push(!(request[1].find((item) => item.option === Status)) ?
      ({ option: '', icon: '', color: '' }) :
      (request[1].find((item) => item.option === Status)));
    return response;
  }
}
