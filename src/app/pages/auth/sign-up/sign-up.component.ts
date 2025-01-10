import { Component } from '@angular/core';
import { Major } from '../../../models/major';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  passwordVisible = false;
  password?: string;
  selectedValue: Major | null = null;

  majors: Major[] = [
    { id: 1, name: 'Công nghệ thông tin' },
    { id: 2, name: 'Kỹ thuật phần mềm' },
    { id: 3, name: 'Khoa học máy tính' }
  ]

}
