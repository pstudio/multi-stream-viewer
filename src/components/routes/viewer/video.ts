import { IVideoPlayer } from '../../../shared/providers/providers'

/**
 * video provider - twitch, youtube, ...
 * video id - e.g. bVQogFuMq7c
 * timestamp - where to start the video from
 * muted - should video audio be muted
 */

export interface Video {
  provider: VideoProvider,
  id: string,
  timestamp?: number,
  muted?: boolean,
  player?: IVideoPlayer
}

export enum VideoProvider {
  youtube = 'yt',
  twitch = 'tw'
}
