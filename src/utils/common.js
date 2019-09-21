export default class common {
  static formateTime (date){
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  }
}