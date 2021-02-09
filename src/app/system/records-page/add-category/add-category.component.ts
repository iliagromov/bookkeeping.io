import { Component, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.model';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/shared/models/message.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.less']
})
export class AddCategoryComponent implements OnInit, OnDestroy {

  sub1: Subscription;

  @Output() onCategoryAdd = new EventEmitter<Category>();

  message: Message;
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.message = new Message('', 'success');
  }
  onSubmit(form: NgForm) {
    let { name, capacity } = form.value;
    if (capacity < 0) {
      capacity *= -1;
    }

    const category = new Category(name, capacity);
    this.sub1 = this.categoriesService.addCategory(category)
      .subscribe((category: Category) => {
        form.reset();
        form.form.patchValue({ capacity: 1 });
        this.onCategoryAdd.emit(category);
        this.message.text = 'Категория успешно добавлена';
        window.setTimeout(() => this.message.text = '', 5000);
      });
  }
  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }
}
