import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { UserAccountComponent } from './pages/user/user-account/user-account.component';
import { UserScoreComponent } from './pages/user/score/user-score/user-score.component';
import { UpdateUserScoreComponent } from './pages/user/score/update-user-score/update-user-score.component';
import { MyCourseComponent } from './pages/user/courses/my-course/my-course.component';
import { DetailSubjectComponent } from './pages/user/subject/detail-subject/detail-subject.component';
import { DetaiLecturerComponent } from './pages/user/lecturer/detai-lecturer/detai-lecturer.component';
import { HomeComponent } from './pages/user/home/home.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signin',
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'main-layout',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'user-account',
        component: UserAccountComponent
      },
      {
        path: 'user-score',
        component: UserScoreComponent
      },
      {
        path: 'update-user-score',
        component: UpdateUserScoreComponent
      },
      {
        path: 'my-course',
        component: MyCourseComponent
      },
      {
        path: 'detail-subject',
        component: DetailSubjectComponent
      },
      {
        path: 'detail-lecturer',
        component: DetaiLecturerComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
