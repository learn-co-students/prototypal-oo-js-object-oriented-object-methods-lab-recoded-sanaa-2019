function boardMember(name,homeState,training){
  this.name=name
  this.homeState=homeState
  this.training=training
}
boardMember.veto=function(){
  return "No, I must disagree"
}