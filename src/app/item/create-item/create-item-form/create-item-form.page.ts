import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoService } from 'src/app/services/photo.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-create-item-form',
  templateUrl: './create-item-form.page.html',
  styleUrls: ['./create-item-form.page.scss'],
})
export class CreateItemFormPage implements OnInit {

  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController, public camera: Camera) {}

  ngOnInit() {
    this.photoService.loadSaved();
  }

  public async showActionSheet(photo, position) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }

  captureImage() {
    const options: CameraOptions = {
      quality: 100,
      correctOrientation: true,
      cameraDirection: 1,
    }
    
    this.camera.getPicture(options).then((imageData) => {
      console.log("IMAGE DATA IS", imageData);
    }).catch(e => {
      console.log("Error while picking from camera", e)
    })
  }
  
  uploadFromGallery() {
    var options = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
    };
    this.camera.getPicture(options).then((imageData) => {
      console.log("IMAGE DATA IS", imageData);
    }).catch(e => {
      console.log("Error while picking from gallery", e)
    });
  }

}
