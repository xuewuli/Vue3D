import {
  Box3, Vector3,
} from 'three';

const box = new Box3();

function getSize(object) {
  box.setFromObject(object);

  return box.getSize(new Vector3());
}

function getCenter(object) {
  box.setFromObject(object);

  return box.getCenter(new Vector3());
}

export { getSize, getCenter };
