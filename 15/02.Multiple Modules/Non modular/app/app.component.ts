import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { AdminComponent } from './admin/admin.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,StaffComponent,AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NonModular';
}
