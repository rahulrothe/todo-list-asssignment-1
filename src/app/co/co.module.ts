import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { provideRouter } from '@angular/router';
import { routes } from '../app.routes';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskFormComponent } from '../task-form/task-form.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    AppComponent,
    TaskListComponent,
    TaskFormComponent,
    
  ],
}).catch((err) => console.error(err));
