// import {FirebaseService} from 'ng2-firebase/core';

declare var SC: any;
interface SoundCloudTrack {
  artwork_url: string;
  attachments_uri: string;
  comment_count: number;
  commentable: boolean;
  created_at: string;
  description: string;
  download_count: number;
  downloadable: boolean;
  duration: number;
  favoritings_count: number;
  genre: string;
  id: number;
  kind: string;
  original_content_size: number;
  original_format: string;
  permalink: string;
  permalink_url: string;
  playback_count: number;
  stream_url: string;
  streamable: boolean;
  title: string;
  uri: string;
  user_id: number;
  waveform_url: string;
}

interface Promise<T> {
  then(any) : () => T;
}

export class SoundCloudService {
  constructor() {
    SC.initialize({
      client_id: 'c7b1fd180f6cedbfbccfd9d04e887356'
    });
  }

  getTrack(track: string) : Promise<SoundCloudTrack> {
    return SC.resolve(track);
  }
  getStream(trackid) {
    return SC.stream('tracks/' + trackid.id);
  }

}
