import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostarTemaComponent } from './postar-tema.component';

describe('PostarTemaComponent', () => {
  let component: PostarTemaComponent;
  let fixture: ComponentFixture<PostarTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostarTemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostarTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});