import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeworkService } from '../services/homework.service';

@Component({
  selector: 'app-homework-submit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './homework-submit.component.html',
  styleUrls: ['./homework-submit.component.css']
})
export class HomeworkSubmitComponent {

  homeworkForm: FormGroup;
  selectedFile: File | null = null;
  successMessage = '';
  selectedFileName: string="";

  constructor(
    private fb: FormBuilder,
    private homeworkService: HomeworkService
  ) 
  {
    this.homeworkForm = this.fb.group({
      FirstName: ['', Validators.required],
      Seminar: ['', Validators.required],
      ClassName: ['', Validators.required],
      Subject: ['', Validators.required],
      LessonNumber: ['', Validators.required],
      Message: ['']
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
      this.selectedFileName= event.target.files[0].name;

  }



  onSubmit() {
    const formData = new FormData();

    formData.append('FirstName', this.homeworkForm.value.FirstName);
    formData.append('Seminar', this.homeworkForm.value.Seminar);
    formData.append('ClassName', this.homeworkForm.value.ClassName); // חשוב!
    formData.append('Subject', this.homeworkForm.value.Ssubject);
    formData.append('LessonNumber', this.homeworkForm.value.LessonNumber);
    formData.append('Message', this.homeworkForm.value.Message);

    if (this.selectedFile) {
      formData.append('File', this.selectedFile); 
    }

    this.homeworkService.sendHomework(formData).subscribe({
      next: () => {
        this.successMessage = 'השיעורים נשלחו בהצלחה!';
        this.homeworkForm.reset();
      },
      error: (err) => {
        console.error(err);
        alert('אירעה שגיאה בשליחה');
      }
    });

  }




}
