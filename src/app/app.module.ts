import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { CaretDownOutline, FacebookOutline, } from '@ant-design/icons-angular/icons';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { NzTableModule } from 'ng-zorro-antd/table';

import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserAccountComponent } from './pages/user/user-account/user-account.component';
import { UserScoreComponent } from './pages/user/score/user-score/user-score.component';
import { UpdateUserScoreComponent } from './pages/user/score/update-user-score/update-user-score.component';
import { MyCourseComponent } from './pages/user/courses/my-course/my-course.component';
import { DetailSubjectComponent } from './pages/user/subject/detail-subject/detail-subject.component';
import { DetaiLecturerComponent } from './pages/user/lecturer/detai-lecturer/detai-lecturer.component';
import { HomeComponent } from './pages/user/home/home.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UserAccountComponent,
    UserScoreComponent,
    UpdateUserScoreComponent,
    MyCourseComponent,
    DetailSubjectComponent,
    DetaiLecturerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    NzLayoutModule,
    NzInputModule,
    NzButtonModule,
    NzFormModule,
    NzIconModule.forRoot([ FacebookOutline, CaretDownOutline ]),
    NzGridModule,
    NzSelectModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzUploadModule,
    NzModalModule, 
    NzTableModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
