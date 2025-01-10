import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../../models/subject';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrl: './my-course.component.css'
})
export class MyCourseComponent implements OnInit {
  listOfData: Subject[] = [];
  displayedData: Subject[] = [];
  filteredData: Subject[] = []; //search
  userRole: string | null = '';
  pageIndex: number = 1;
  pageSize: number = 5;

  ngOnInit(): void {
    this.loadSubject();
    // this.userRole = localStorage.getItem('userRole'); 
    // console.log('User role:', this.userRole);
  }

  loadSubject(): void {
    this.displayedData = [
     
      
    ];
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
  
    compareSubjectName = (a:Subject, b:Subject) => {
      return a.subjectName.localeCompare(b.subjectName);
    }
  
    compareCredit = (a:Subject, b:Subject) => {
      return a.credit - b.credit;
    }

}

