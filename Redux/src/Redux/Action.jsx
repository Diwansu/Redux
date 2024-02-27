

const increase = "increase";
const decrease = "decrease";

export function increaseNumber() {
  return {
    type: increase,
  };
}
export function decreaseNumber() {
  return {
    type: decrease,
  };
}
