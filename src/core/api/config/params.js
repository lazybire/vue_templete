import global from '@/core/global/global.js'
var param = global.global.getParam();
const params = {
  childId: param.childId || "",
  token: param.token || "test",
  activityId: param.activityId || "",
  pushType:param.pushType||"",
  schoolId: param.schoolId || "",
  classId: param.classId || "",
  fromId:param.fromId||"",
  wordId:param.wordId||"",
  userType:param.userType||"",
  share:param.share||"",
  openApp:param.openApp||"",
  userId:param.userId||"",
  appVersion:param.appVersion||"",
  subUserId:param.subUserId||"",
  termId:param.termId||"",
  idCard:param.idCard||""

}


export default params;
