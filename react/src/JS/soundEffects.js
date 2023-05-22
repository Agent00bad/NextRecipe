import {Howl} from "howler";
import enter from "../Sounds/enter.mp3";

export default class playsound{
    sayHello() {
          var soundPlay = () => {
           const sound = new Howl({
             src : enter,
             html5: true
           })
           sound.play();
         }
        return soundPlay;
      }
      sayBye() {
        var soundPlay = () => {
         const sound = new Howl({
           src : enter,
           html5: true
         })
         sound.play();
       }
      return soundPlay; 
    }
    special(src){
      var soundPlay = () => {
        const sound = new Howl({
          src : src,
          html5: true
        })
        sound.play();
          
    }
    return soundPlay;
  }
}