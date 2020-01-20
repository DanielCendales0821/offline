import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {NotasSQLiteService} from './notas-sqlite.service';
import { SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sqlite: SQLite,
    private notasSQLiteService: NotasSQLiteService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.crearBaseDatos();
    });
  }

  crearBaseDatos() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db) => {
        this.notasSQLiteService.setDatabase(db);
        return this.notasSQLiteService.createTables();
      })
      .catch(e => console.log(e));
  }
}
