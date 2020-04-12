
class Chain{
 constructor(bodyA, bodyB){
 var options = {
     bodyA: bodyA,
     bodyB: bodyB ,
     stiffness: 0.001,
     length: 20 
 }
 this.chains = Matter.Constraint.create(options)
 World.add(world, this.chains)
}
display(){
    strokeWeight(7)
    var chains1 = this.chains.bodyA.position
    var chains2 = this.chains.bodyB.position

    line(chains1.x, chains1.y, chains2.x, chains2.y)
}
}
