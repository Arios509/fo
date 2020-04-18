import { NgModule } from '@angular/core';
import { StatusPipe } from './core/_pipes/status.pipe';


@NgModule({
    imports: [],
    declarations: [
      StatusPipe
    ],
    exports: [StatusPipe],
})

export class PipeModule {
}
