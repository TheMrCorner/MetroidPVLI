//Los floater son unos enemigos que se mueven de
//izda a dcha y son invulnerables al daño. Además,
//flotan.
class Floater extends Enemies {
  //COnstructor del floater
  constructor (posX, posY, gravity, sprite, speedX, speedY, colliders, lives, damage, type, player){
    super(posX, posY, gravity, sprite, speedX, speedY, colliders, lives, damage, type, player);
    this._actualDir = 1;
    this.get_Damaged = function() {
      this.hSpeed = 10;  //quita vida, reduce su velocidad y empieza el timer de velocidad bajada
      this.vSpeed = 10;
      this._velocityTimer = game.time.now + 300;
    }
  }

  update(){
    this.colision();
    this.logic();
  }
  ///-------------Lógica del floater-----------///
  logic(){
      if(this.sprite.body.onWall()){ //si se choca con pared
        if(this._actualDir === 1){
            this.moveLeft(this.sprite, 0); //cambia de direccion
            this._actualDir = -1;
        }
        else{
          this.moveRight(this.sprite, 0);
          this._actualDir = 1;
        }
      }
      else{
          this.select_Dir(); //si no, se mueve de acuerdo a su direccion actual...
      }
  }

  select_Dir(){
    if(this._actualDir === 1){
      this.moveRight(this.sprite, 0);
      this.sprite.scale.x = -1;
    }
    else{
      this.moveLeft(this.sprite, 0);
      this.sprite.scale.x = 1;
    }
  }
}
