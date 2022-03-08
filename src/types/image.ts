/**
 * @type IImage
 */
export type IImage = {
  readonly id?: number;
  readonly paths: {
    readonly sm: string;
    readonly md: string;
    readonly lg: string;
  }
};