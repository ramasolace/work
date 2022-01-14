import { Injectable, Type } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class ModalService {

  constructor(private ngbModal: NgbModal) { }

//   confirm(message = 'Really?', title = 'Confirm'): Observable<boolean> {
//     const modal = this.ngbModal.open(
//       ConfirmDialogComponent,
//       { backdrop: 'static' });

//     modal.componentInstance.message = message;
//     modal.componentInstance.title = title;

//     return from(modal.result);
//   }

  custom(content: any, config?: { [index: string]: any; }, options?: NgbModalOptions): Observable<any> {
    const modal = this.ngbModal.open(content, { backdrop: 'static', ...options });

    Object.assign(modal.componentInstance, config);

    return from(modal.result).pipe(
      catchError(error => {
        console.warn(error);
        return of(undefined);
      })
    );
  }
}
