import {FirebaseService, FirebaseArray} from 'ng2-firebase/core';
import {Injectable} from 'angular2/core';

@Injectable()
export class QueueService {
  private queue : FirebaseArray;
  constructor(private firebaseService : FirebaseService) {}

  setQueue(queue) {
    this.queue = this.firebaseService.child(`${queue}/queue`).asArray();
  }

  get() {
    return this.queue.observable.map((tracks : Array) => tracks.sort((a, b) => {
      if (a.created_at > b.created_at) {
        return 1;
      }
      if (a.created_at < b.created_at) {
        return -1;
      }
      // a must be equal to b
      return 0;
    }));
  }

  add(value: string): void {
    this.queue.add(value);
  }
}
