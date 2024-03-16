import { Component } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.css'
})
export class AllTasksComponent {

}
