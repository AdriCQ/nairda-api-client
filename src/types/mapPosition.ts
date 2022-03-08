/**
 * @type IMapPosition
 */
export type IMapPosition = {
  readonly id?: number;
  readonly title?: string;
  readonly coords: {
    readonly lat: number;
    readonly lng: number;
  };
  readonly public?: boolean;
}