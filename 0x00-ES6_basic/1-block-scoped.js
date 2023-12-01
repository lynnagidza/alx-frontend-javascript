let task;
let task2;

export default function taskBlock(trueOrFalse) {
  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
