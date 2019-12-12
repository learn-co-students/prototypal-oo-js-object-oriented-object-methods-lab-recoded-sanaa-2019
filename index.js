function BoardMember(name,homeState,training){
  this.name=name
  this.homeState=homeState
  this.training=training
}
BoardMember..veto=function(){
  return "No, I must disagree"
}