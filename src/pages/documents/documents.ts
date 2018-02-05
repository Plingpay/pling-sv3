import {Component, ElementRef} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {DocumentsProvider} from "../../providers/documents";
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Generated class for the DocumentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-documents',
  templateUrl: 'documents.html',
})
export class DocumentsPage {
  public documents: Array<any> = [];
  public baseURL: String;
  public itemHeight: number;

  constructor(public navCtrl: NavController,
              public docsProvider: DocumentsProvider,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              private sanitizer: DomSanitizer,
              public elementRef: ElementRef,
              public navParams: NavParams) {
    this.baseURL = this.docsProvider.envVars.API;
  }

  ionViewDidLoad() {
    this.docsProvider.documentsList().then(data => {
      this.documents = data;
      this.itemHeight = 100/data.length;
    }, err => {});
  }

  skip() {
    this.navCtrl.popToRoot();
  }

  selectPhoto(document, files) {
    if (files[0]) {
      let loading = this.loadingCtrl.create({
        content: 'Loading...'
      });
      loading.present();
      document.image = files[0];
      let reader = new FileReader();
      reader.readAsDataURL(document.image);
      reader.onload = () => {
        document.tmpImage = this.sanitizer.bypassSecurityTrustUrl(reader.result);
        loading.dismiss();
        this.elementRef.nativeElement.querySelector('#photo_' + document.field_name).value = '';
      };
      reader.onerror = (error) => {
        console.log('Error: ', error);
        loading.dismiss();
        this.elementRef.nativeElement.querySelector('#photo_' + document.field_name).value = '';
      };
    }
  }

  removePhoto(document) {
    document.image = undefined;
    document.tmpImage = undefined;
  }

  submitEnabled() {
    let allowed = true;
    this.documents.forEach(document => {
      if (!document.image) {
        allowed = false;
      }
    });
    return allowed;
  }

  sendDocuments() {
    this.docsProvider.saveDocuments(this.documents).then((res) => {
      this.navCtrl.popToRoot();
    }, err => {});
  }

}
