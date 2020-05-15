import { call } from 'redux-saga/effects'
import notificationService from '../services/NotificationService'
import _ from 'lodash'
import moment from 'moment'

const setUpNotificationSchedule = shiftDuration => {
  _.range(shiftDuration / 2).forEach(i => {
    notificationService.scheduleNotification(
      `Remember to wash your hands!`,
      'Click here to start your timer',
      moment()
        .add((i + 1) * 2, 'h')
        .toDate()
    )
  })
}
function* shiftSaga() {
  const shiftDuration = 8
  yield call(setUpNotificationSchedule, shiftDuration)
}

export default shiftSaga
