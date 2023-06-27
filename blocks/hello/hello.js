import { getLibs } from '../../scripts/utils.js';

export default async (block) => {
  const { textContent } = block;
  const { createTag, loadScript } = await import(`${getLibs()}/utils/utils.js`)
  await loadScript('/deps/gsap.min.js');
  const [hello, name] = textContent.trim().split(',');
  const helloEl = createTag('h2', {class: 'hello-title'}, `${hello || "Hello"},`);
  const nameEl = createTag('p', {class: 'hello-name'}, (name || "World"));
  block.replaceChildren(helloEl, nameEl);
  if (hello) window?.gsap?.to(helloEl,  { x: 200 });
  if (name)  window?.gsap?.to(helloEl,  { x: 400 });
};
