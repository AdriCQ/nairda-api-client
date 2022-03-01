/**
 * @type Paginated
 */
export type Paginated<T> = {
  readonly data: readonly T[];
  readonly links: {
    readonly first: string | null;
    readonly last: string | null;
    readonly prev: string | null;
    readonly next: string | null;
  };
  readonly meta: {
    readonly current_page: number;
    readonly from: number;
    readonly path: string;
    readonly per_page: number;
    readonly to: number;
  }
}