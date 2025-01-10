import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../../models/subject';
import { Lecturer } from '../../../../models/lecturer';

export interface SubjectAverage{
  subjectId: string;
  subjectName: string;
  credit: number;
  averageScore: number;
}
@Component({
  selector: 'app-detai-lecturer',
  templateUrl: './detai-lecturer.component.html',
  styleUrl: './detai-lecturer.component.css'
})
export class DetaiLecturerComponent {
  listOfData: Lecturer[] = [];
  displayedData: SubjectAverage[] = [];
  filteredData: SubjectAverage[] = []; //search
  userRole: string | null = '';
  pageIndex: number = 1;
  pageSize: number = 5;

  ngOnInit(): void {
    this.loadLecturer();
    // this.userRole = localStorage.getItem('userRole'); 
    // console.log('User role:', this.userRole);
  }

  loadLecturer(): void {
    this.displayedData = [];
  }
   updateDisplayedData(): void {
      const startIndex = (this.pageIndex - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.displayedData = this.filteredData.slice(startIndex, endIndex);
    }
  
    onPageChange(page: number): void {
      this.pageIndex = page;
      this.updateDisplayedData();
    }
  
    compareLecturerName = (a:Lecturer, b:Lecturer) => {
      return a.lecturerName.localeCompare(b.lecturerName);
    }
  
    compareLecturerEmail = (a:Lecturer, b:Lecturer) => {
      return a.lecturerEmail.localeCompare(b.lecturerEmail);
    }
}
