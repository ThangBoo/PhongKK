import { Component, OnInit } from '@angular/core';
import { Score } from '../../../../models/score';

@Component({
  selector: 'app-user-score',
  templateUrl: './user-score.component.html',
  styleUrl: './user-score.component.css'
})
export class UserScoreComponent implements OnInit {
  listOfData: Score[] = [];
  displayedData: Score[] = [];
  filteredData: Score[] = []; //search
  userRole: string | null = '';
  pageIndex: number = 1;
  pageSize: number = 5;

  ngOnInit(): void {
    this.loadScore();
    // this.userRole = localStorage.getItem('userRole'); 
    // console.log('User role:', this.userRole);
  }

  loadScore(): void {
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

  compareSubjectName = (a:Score, b:Score) => {
    return a.subjectName.localeCompare(b.subjectName);
  }

  compareCredit = (a:Score, b:Score) => {
    return a.credit - b.credit;
  }
  compareGradeABC = (a:Score, b:Score) => {
    return a.gradeABC.localeCompare(b.gradeABC);
  }
  compareGradeFor = (a:Score, b:Score) => {
    return a.gradeFor - b.gradeFor;
  }
  compareSemester = (a:Score, b:Score) => {
    return a.semesterName - b.semesterName;
  }
}
