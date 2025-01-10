import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.css'
})
export class UserAccountComponent {
  fileList: NzUploadFile[] = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];

  previewImage: string | undefined = '';
  previewVisible = false;
  
  userForm: FormGroup;
  userRole: string | null = null;

  constructor(
    private fb: FormBuilder,
  ) {
    // Khởi tạo form ngay trong constructor
    this.userForm = this.fb.group({

    });
  }
  onSubmit(): void {
    if (this.userForm.valid) {


      const updatePayload = {
      };
    }
  }
  // handlePreview = async (file: NzUploadFile): Promise<void> => {
  //   if (!file.url && !file.preview) {
  //     file.preview = await getBase64(file.originFileObj!);
  //   }
  //   this.previewImage = file.url || file.preview;
  //   this.previewVisible = true;
  // };
}
