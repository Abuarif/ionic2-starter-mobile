import { NgModule, ErrorHandler } from '@angular/core'
import { IonicStorageModule } from '@ionic/storage'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { App } from '../imports'

@NgModule({
  bootstrap: [ IonicApp ],
  declarations: [].concat(App.entry, App.extra),
  entryComponents: App.entry,
  imports: [
    IonicModule.forRoot(
      App.component,
      App.config,
      { links: App.routes }
    ),
    IonicStorageModule.forRoot()
  ],
  providers: [].concat(App.store, {
    provide: ErrorHandler,
    useClass: IonicErrorHandler
  })
})
export class AppModule {}
