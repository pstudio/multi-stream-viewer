import { Component, Vue, Prop } from 'vue-property-decorator'
import { PlayerBus } from '../util/player-bus'
// let AlertIcon = require('vue-ionicons/dist/ios-alert')
// import * as AlertIcon from 'vue-ionicons/dist/ios-alert'

@Component({
  template: require('./player-controller.html')
  // components: {
  //   'alert-icon': AlertIcon
  // }
})
export class PlayerControllerComponent extends Vue {
  firstPlay = true

  controllerStyle = {
    position: 'absolute',
    width: '600px',
    height: '70px',
    left: '760px',
    top: '800px',
    backgroundColor: '#aaaaaa'
  }

  play () {
    if (this.firstPlay) {
      this.firstPlay = false
      this.seek()
    }
    PlayerBus.$emit('play')
    console.debug('play')
  }

  pause () {
    PlayerBus.$emit('pause')
    console.debug('pause')
  }

  seek () {
    PlayerBus.$emit('seek')
    console.debug('seek')
  }
}
