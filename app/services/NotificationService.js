import PushNotificationIOS from '@react-native-community/push-notification-ios'
import PushNotification from 'react-native-push-notification'

const setUpService = onNotificationCb => {
  PushNotification.configure({
    onNotification: function(notification) {
      onNotificationCb(notification)
      notification.finish(PushNotificationIOS.FetchResult.NoData)
    },

    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
  })
}

const scheduleNotification = (title, message, date) => {
  PushNotification.localNotificationSchedule({
    title,
    message,
    date,
  })
}

export default { setUpService, scheduleNotification }
