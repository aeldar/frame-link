const parent = (): Window => {
  if (window === window.parent) {
    throw new Error('FrameLinkService: I don\'t have parent! I am the root frame.')
  }
  return window.parent;
}

const self = (): Window => window;

const frameById = (id: string): Window => {
  const frame = window.frames[id];
  if (!frame) {
    throw new Error(`FrameLinkService: iframe with id=${id} was not found.`);
  }
  return typeof frame.postMessage === 'function' ? frame : frame.contentWindow;
}

const specialFrames = {
  self,
  parent,
}

export const findWindow = (id: string): Window =>
  (specialFrames[id] || frameById)(id);
