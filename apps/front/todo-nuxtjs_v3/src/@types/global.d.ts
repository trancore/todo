import type { DefineComponent } from 'vue';

declare module '*.svg' {
  const component: DefineComponent;
  export default component;
}
