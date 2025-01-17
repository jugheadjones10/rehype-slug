/**
 * Plugin to add `id`s to headings.
 *
 * @type {import('unified').Plugin<Array<void>, Root>}
 */
export function rehypeSlug(): void | import("unified").Transformer<import("hast").Root, import("hast").Root>;
export type Root = import('hast').Root;
