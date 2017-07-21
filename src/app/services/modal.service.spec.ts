import { TestBed, inject } from '@angular/core/testing';

import { ModalService } from './modal.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('ModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [ModalService]
    });
  });

  it('should be created', inject([ModalService], (service: ModalService) => {
    expect(service).toBeTruthy();
  }));
});
