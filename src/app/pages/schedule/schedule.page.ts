import { Component, OnInit } from '@angular/core';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { LocalNotifications, ELocalNotificationTriggerUnit, ILocalNotificationActionType, ILocalNotification } from '@ionic-native/local-notifications/ngx';
import { Router } from '@angular/router';



@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})


export class SchedulePage {
  scheduled = [];
  data={abc:'',xyz:''}
  constructor(private plt: Platform, private localNotifications: LocalNotifications, private alertCtrl: AlertController,private router:Router) {
    this.plt.ready().then(() => {
      this.localNotifications.on('click').subscribe(res => {
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);
      });

      this.localNotifications.on('trigger').subscribe(res => {
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);
      });
    });
  }

  scheduleNotification() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Attention',
      text: 'Simons Notification',
      data: { mydata: 'My hidden message this is' },
      trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND },
      foreground: true // Show the notification while app is open
    });

  }

  demoNotification() {
    alert('Nhắc nhở đã được tạo, thông báo sẽ hiện mỗi phút')
    this.localNotifications.schedule({
      id: 22,
      title: 'Notification demo',
      text: 'Nhắc nhở sẽ được lập lại 1 phút',
      trigger: { every: ELocalNotificationTriggerUnit.MINUTE },
      sound: 'file://assets/soundremind.mp3',
      foreground: false
    });
    
  }

  repeatingeveryMorning() {
    alert('Nhắc nhở đã được tạo, bạn sẽ được nhắc nhở vào mỗi buổi sáng lúc 7 giờ ')
    this.localNotifications.schedule({
      id: 42,
      title: 'Good Morning',
      text: 'Bạn nhớ uống thuốc cho buổi sáng hôm nay nhé !',
      trigger: { every: { hour: 7 } },
      sound:'file://assets/soundremind.mp3',
      foreground: false
    });
  }
  repeatingeveryAfternoon() {
    alert('Nhắc nhở đã được tạo, bạn sẽ được nhắc nhở vào mỗi buổi trưa lúc 12 giờ ')
    this.localNotifications.schedule({
      id: 42,
      title: 'Good Afternoon',
      text: 'bạn nhớ uống thuốc cho buổi trưa hôm nay nhé !',
      trigger: { every: { hour: 12 } },
      sound:'file://assets/soundremind.mp3',
      foreground: false
    });
    
  }
  repeatingeveryNight() {
    alert('Nhắc nhở đã được tạo, bạn sẽ được nhắc nhở vào mỗi buổi tối lúc 6 giờ ')
    this.localNotifications.schedule({
      id: 42,
      title: 'Good Night',
      text: 'Bạn nhớ uống thuốc cho buổi tối hôm nay nhé !',
      trigger: { every: { hour: 18 } },
      sound:'file://assets/soundremind.mp3',
      foreground: false
    });
  }

  showAlert(header, sub, msg) {
    this.alertCtrl.create({
      header: header,
      subHeader: sub,
      message: msg,
      buttons: ['OK'] //['Ok',"this.router.navigateByUrl('./prescription')"] ,
      
    }).then(alert => alert.present());
    
  }

  getAll() {
    this.localNotifications.getAll().then((res: ILocalNotification[]) => {
      this.scheduled = res;
    })
  }
}