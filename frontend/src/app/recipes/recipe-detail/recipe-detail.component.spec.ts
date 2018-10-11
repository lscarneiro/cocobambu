import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RecipeDetailComponent} from './recipe-detail.component';
import {RouterTestingModule} from "@angular/router/testing";
import {TickComponent} from "./tick/tick.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('RecipeDetailComponent', () => {
  let component: RecipeDetailComponent;
  let fixture: ComponentFixture<RecipeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDetailComponent, TickComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
