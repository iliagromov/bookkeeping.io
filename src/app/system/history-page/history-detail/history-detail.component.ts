import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventsService } from '../../shared/services/events.service';
import { CategoriesService } from '../../shared/services/categories.service';
import { AppEvent } from '../../shared/models/event.model';
import { mergeMap } from 'rxjs/operators';
import { Category } from '../../shared/models/category.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.less']
})
export class HistoryDetailComponent implements OnInit, OnDestroy {

  s1: Subscription;
  event: AppEvent;
  category: Category;
  isLoaded = false;
  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private categoriesSerice: CategoriesService
  ) { }

  ngOnInit() {
    this.s1 = this.route.params.pipe(
      mergeMap((params: Params) => this.eventService.getEventById(params['id'])),
      mergeMap((event: AppEvent) => {
          this.event = event;
          return this.categoriesSerice.getCategoryById(event.category);
        }
        )
    ).subscribe((category: Category) => {
      this.category = category;
      this.isLoaded = true;
    });
  }
  ngOnDestroy(): void {
    if (this.s1) {
      this.s1.unsubscribe();
    }
  }

}
