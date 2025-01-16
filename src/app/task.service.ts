import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  assignedTo: string;
  dueDate: string;
  status: string;
  priority: string;
  comments: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: any[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push({ ...task, id: this.tasks.length + 1 });
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
