import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Task, TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class TaskFormComponent {
  task = {
    id:0 ,
    assignedTo: '',
    dueDate: '',
    status: '',
    priority: '',
    comments: '',
  };
  constructor(private taskService: TaskService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.taskService.addTask(this.task);
      form.reset();
      console.log("Task Submitted:", this.task);
      this.router.navigate(['/task-list'])
    }
  }
}
