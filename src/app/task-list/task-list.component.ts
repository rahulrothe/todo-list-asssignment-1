import { CommonModule } from '@angular/common';
import { Task, TaskService } from '../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css' ],
  standalone: true,
  imports: [CommonModule],  
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onDeleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks();
  }
}
