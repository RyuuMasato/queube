import {QueueService} from './queue.service';

export function main() {
  describe('NameList Service', () => {
    let nameListService: QueueService;

    beforeEach(() => {
      nameListService = new QueueService;
    });

    it('should return the list of names', () => {
      let names = nameListService.get();
      expect(names).toEqual(jasmine.any(Array));
    });
  });
}
