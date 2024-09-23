import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SearchPipe } from '@pipes/search.pipe';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
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
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  public id = input<string>();
  private UsersService = inject(UsersService);
  public users$ = this.UsersService.getUsers();
  public search = signal('');
}
