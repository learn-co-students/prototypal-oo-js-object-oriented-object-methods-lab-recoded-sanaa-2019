function BoardMember (name , homeState , training ){
    this.name = name 
    this.homeState = homeState
    this.training = training
    BoardMember.prototype.veto =function(){
        let str= "No, I must disagree"
        return str
    }
    BoardMember.prototype.approve =function (){
        let str= "You can do that!"
        return str
    }
    BoardMember.prototype.doCharity = function(){
        let str= "I like to help people."
        return str
    }
    BoardMember.prototype.releasePressStatement = function(){
        let str= "You will see great things from Scuber."
        return str
    }
    BoardMember.prototype.sayHi = function(){
        let str= `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
        
        return str
    }
    
}