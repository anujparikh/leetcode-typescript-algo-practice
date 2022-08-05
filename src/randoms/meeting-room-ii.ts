//@ts-nocheck

/**
 * Another solution using MinHeap: https://www.youtube.com/watch?v=PWgFnSygweI&ab_channel=KevinNaughtonJr.
 */
class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const min_meeting_rooms = function (meetings: any) {
  let noOfReqRooms = 0;
  const startTimeArray = [];
  const endTimeArray = [];
  let counter = 0;

  for (const meeting of meetings) {
    startTimeArray.push(meeting.start);
    endTimeArray.push(meeting.end);
  }

  startTimeArray.sort((a, b) => a - b);
  endTimeArray.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < startTimeArray.length) {
    if (startTimeArray[i] < endTimeArray[j]) {
      i++;
      counter++;
    } else {
      j++;
      counter--;
    }
    noOfReqRooms = Math.max(noOfReqRooms, counter);
  }

  return noOfReqRooms;
};

console.log(
  `Minimum meeting rooms required: ${min_meeting_rooms([
    new Meeting(4, 5),
    new Meeting(2, 3),
    new Meeting(2, 4),
    new Meeting(3, 5),
  ])}`
);
console.log(
  `Minimum meeting rooms required: ${min_meeting_rooms([
    new Meeting(1, 4),
    new Meeting(2, 5),
    new Meeting(7, 9),
  ])}`
);
console.log(
  `Minimum meeting rooms required: ${min_meeting_rooms([
    new Meeting(6, 7),
    new Meeting(2, 4),
    new Meeting(8, 12),
  ])}`
);
console.log(
  `Minimum meeting rooms required: ${min_meeting_rooms([
    new Meeting(1, 4),
    new Meeting(2, 3),
    new Meeting(3, 6),
  ])}`
);
console.log(
  `Minimum meeting rooms required: ${min_meeting_rooms([
    new Meeting(4, 5),
    new Meeting(2, 3),
    new Meeting(2, 4),
    new Meeting(3, 5),
  ])}`
);
