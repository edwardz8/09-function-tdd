import aliveNeighbors from './alive-neighbors';

export default function (a) {

  const reviveEh = aliveNeighbors(a);

  if (reviveEh < 2) {
  return false;
}

if (reviveEh !== 3) {
  return false;
}

if (reviveEh == 3) {
  return true;
}

}
