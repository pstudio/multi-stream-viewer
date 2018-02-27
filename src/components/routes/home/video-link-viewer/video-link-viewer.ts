import { Component, Vue, Prop } from 'vue-property-decorator'
import { VideoLink } from '../video-link'
import { VideoProviders } from '../../../../shared/providers/providers'
import { url } from 'inspector'

@Component({
  template: require('./video-link-viewer.html')
})
export class VideoLinkViewerComponent extends Vue {
  @Prop({ required: true })
  videoLink: VideoLink

  alertMsg = ''

  urlStringChanged () {
    try {
      this.videoLink.url = new URL(this.videoLink.urlString)
      this.alertMsg = 'The provided URL is not recognized as a valid video provider'
      VideoProviders.forEach((v,k) => {
        if (v.acceptsHostName(this.videoLink.url)) {
          const id = v.getVideoIdFromUrl(this.videoLink.url)
          if (id === '') {
            this.alertMsg = 'We were not able to find a valid Video ID from the provided URL'
          } else {
            this.alertMsg = id
          }
        }
      })
    } catch (error) {
      this.alertMsg = 'Input is not a valid URL'
      this.videoLink.url = null
    }
  }
}
