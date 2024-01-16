/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type openAppPage = typeof import('./tests/pages/openAppPage.js');
type Hooks = import('./helpers/hooks.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, openAppPage: openAppPage }
  interface Methods extends Appium, Hooks {}
  interface I extends ReturnType<steps_file>, WithTranslation<Hooks> {}
  namespace Translation {
    interface Actions {}
  }
}
