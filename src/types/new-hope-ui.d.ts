
import { NhRow } from './row'

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of nh-hope-ui */
export const version: string

/**
 * Install all new-hope-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(NhHopeUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** Row Layout Component */
export class Row extends ElRow {}