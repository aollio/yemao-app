import {Component} from '@angular/core';
import {IonicPage, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {DesignerTabsPage} from "./tabs/tabs";
import {RegisterPage} from "../common/register/register";

@IonicPage({
    segment: 'd'
})
@Component({
    templateUrl: 'designer.html'
})
export class DesignerModulePage {

    rootPage: any = DesignerTabsPage;

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                public navctrl: NavController) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

}
