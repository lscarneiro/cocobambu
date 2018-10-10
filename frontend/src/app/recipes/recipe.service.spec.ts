import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipe.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('RecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: RecipeService = TestBed.get(RecipeService);
    expect(service).toBeTruthy();
  });
});
