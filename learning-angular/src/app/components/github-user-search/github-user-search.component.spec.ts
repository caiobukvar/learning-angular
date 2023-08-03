import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserSearchComponent } from './github-user-search.component';

describe('GithubUserSearchComponent', () => {
  let component: GithubUserSearchComponent;
  let fixture: ComponentFixture<GithubUserSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubUserSearchComponent]
    });
    fixture = TestBed.createComponent(GithubUserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
