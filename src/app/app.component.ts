import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,AddTaskComponent,AllTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-task-tracker';
}
