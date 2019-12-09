import Vue from 'vue'

/** NewHopeUI component common definition */
export declare class NewHopeUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type NewHopeUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type NewHopeUIHorizontalAlignment = 'left' | 'center' | 'right'
