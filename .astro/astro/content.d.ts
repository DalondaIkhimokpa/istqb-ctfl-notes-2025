declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"guides/fundamentals-of-testing/advantages-whole-team-approach.mdx": {
	id: "guides/fundamentals-of-testing/advantages-whole-team-approach.mdx";
  slug: "guides/fundamentals-of-testing/advantages-whole-team-approach";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/errors-defects-failures-root-causes.mdx": {
	id: "guides/fundamentals-of-testing/errors-defects-failures-root-causes.mdx";
  slug: "guides/fundamentals-of-testing/errors-defects-failures-root-causes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/generic-skills-required.mdx": {
	id: "guides/fundamentals-of-testing/generic-skills-required.mdx";
  slug: "guides/fundamentals-of-testing/generic-skills-required";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/independence-of-testing.mdx": {
	id: "guides/fundamentals-of-testing/independence-of-testing.mdx";
  slug: "guides/fundamentals-of-testing/independence-of-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/levels-of-independence.mdx": {
	id: "guides/fundamentals-of-testing/levels-of-independence.mdx";
  slug: "guides/fundamentals-of-testing/levels-of-independence";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/test-activities-tasks.mdx": {
	id: "guides/fundamentals-of-testing/test-activities-tasks.mdx";
  slug: "guides/fundamentals-of-testing/test-activities-tasks";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/test-process-context.mdx": {
	id: "guides/fundamentals-of-testing/test-process-context.mdx";
  slug: "guides/fundamentals-of-testing/test-process-context";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/testing-and-debugging.mdx": {
	id: "guides/fundamentals-of-testing/testing-and-debugging.mdx";
  slug: "guides/fundamentals-of-testing/testing-and-debugging";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/testing-and-qa.mdx": {
	id: "guides/fundamentals-of-testing/testing-and-qa.mdx";
  slug: "guides/fundamentals-of-testing/testing-and-qa";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/testing-principles.mdx": {
	id: "guides/fundamentals-of-testing/testing-principles.mdx";
  slug: "guides/fundamentals-of-testing/testing-principles";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/testing-roles.mdx": {
	id: "guides/fundamentals-of-testing/testing-roles.mdx";
  slug: "guides/fundamentals-of-testing/testing-roles";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/testings-contributions-success.mdx": {
	id: "guides/fundamentals-of-testing/testings-contributions-success.mdx";
  slug: "guides/fundamentals-of-testing/testings-contributions-success";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/testware.mdx": {
	id: "guides/fundamentals-of-testing/testware.mdx";
  slug: "guides/fundamentals-of-testing/testware";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/traceability-test-basis-work-products.mdx": {
	id: "guides/fundamentals-of-testing/traceability-test-basis-work-products.mdx";
  slug: "guides/fundamentals-of-testing/traceability-test-basis-work-products";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/what-is-testing.mdx": {
	id: "guides/fundamentals-of-testing/what-is-testing.mdx";
  slug: "guides/fundamentals-of-testing/what-is-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/whole-team-approach.mdx": {
	id: "guides/fundamentals-of-testing/whole-team-approach.mdx";
  slug: "guides/fundamentals-of-testing/whole-team-approach";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/fundamentals-of-testing/why-is-testing-necessary.mdx": {
	id: "guides/fundamentals-of-testing/why-is-testing-necessary.mdx";
  slug: "guides/fundamentals-of-testing/why-is-testing-necessary";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/general-insights.mdx": {
	id: "guides/general-insights.mdx";
  slug: "guides/general-insights";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/home-page.mdx": {
	id: "guides/home-page.mdx";
  slug: "guides/home-page";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/interview-questions.mdx": {
	id: "guides/interview-questions.mdx";
  slug: "guides/interview-questions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/communicating-testing-status.mdx": {
	id: "guides/managing-test-activities/communicating-testing-status.mdx";
  slug: "guides/managing-test-activities/communicating-testing-status";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/configuration-management.mdx": {
	id: "guides/managing-test-activities/configuration-management.mdx";
  slug: "guides/managing-test-activities/configuration-management";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/defect-management.mdx": {
	id: "guides/managing-test-activities/defect-management.mdx";
  slug: "guides/managing-test-activities/defect-management";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/entry-exit-criteria.mdx": {
	id: "guides/managing-test-activities/entry-exit-criteria.mdx";
  slug: "guides/managing-test-activities/entry-exit-criteria";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/estimation-techniques.mdx": {
	id: "guides/managing-test-activities/estimation-techniques.mdx";
  slug: "guides/managing-test-activities/estimation-techniques";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/product-risk-analysis.mdx": {
	id: "guides/managing-test-activities/product-risk-analysis.mdx";
  slug: "guides/managing-test-activities/product-risk-analysis";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/project-product-risks.mdx": {
	id: "guides/managing-test-activities/project-product-risks.mdx";
  slug: "guides/managing-test-activities/project-product-risks";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/risk-attributes.mdx": {
	id: "guides/managing-test-activities/risk-attributes.mdx";
  slug: "guides/managing-test-activities/risk-attributes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/risk-control.mdx": {
	id: "guides/managing-test-activities/risk-control.mdx";
  slug: "guides/managing-test-activities/risk-control";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/risk-definition.mdx": {
	id: "guides/managing-test-activities/risk-definition.mdx";
  slug: "guides/managing-test-activities/risk-definition";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/test-case-prioritisation.mdx": {
	id: "guides/managing-test-activities/test-case-prioritisation.mdx";
  slug: "guides/managing-test-activities/test-case-prioritisation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/test-monitoring.mdx": {
	id: "guides/managing-test-activities/test-monitoring.mdx";
  slug: "guides/managing-test-activities/test-monitoring";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/test-plan-content.mdx": {
	id: "guides/managing-test-activities/test-plan-content.mdx";
  slug: "guides/managing-test-activities/test-plan-content";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/test-pyramid.mdx": {
	id: "guides/managing-test-activities/test-pyramid.mdx";
  slug: "guides/managing-test-activities/test-pyramid";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/test-reporting.mdx": {
	id: "guides/managing-test-activities/test-reporting.mdx";
  slug: "guides/managing-test-activities/test-reporting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/tester-contribution-planning.mdx": {
	id: "guides/managing-test-activities/tester-contribution-planning.mdx";
  slug: "guides/managing-test-activities/tester-contribution-planning";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/managing-test-activities/testing-quadrants.mdx": {
	id: "guides/managing-test-activities/testing-quadrants.mdx";
  slug: "guides/managing-test-activities/testing-quadrants";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/static-testing/differences-static-dynamic-testing.mdx": {
	id: "guides/static-testing/differences-static-dynamic-testing.mdx";
  slug: "guides/static-testing/differences-static-dynamic-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/static-testing/feedback-review-process.mdx": {
	id: "guides/static-testing/feedback-review-process.mdx";
  slug: "guides/static-testing/feedback-review-process";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/static-testing/review-process-activities.mdx": {
	id: "guides/static-testing/review-process-activities.mdx";
  slug: "guides/static-testing/review-process-activities";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/static-testing/review-roles-responsibilities.mdx": {
	id: "guides/static-testing/review-roles-responsibilities.mdx";
  slug: "guides/static-testing/review-roles-responsibilities";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/static-testing/review-types.mdx": {
	id: "guides/static-testing/review-types.mdx";
  slug: "guides/static-testing/review-types";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/static-testing/static-testing-basics.mdx": {
	id: "guides/static-testing/static-testing-basics.mdx";
  slug: "guides/static-testing/static-testing-basics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/static-testing/success-factors-reviews.mdx": {
	id: "guides/static-testing/success-factors-reviews.mdx";
  slug: "guides/static-testing/success-factors-reviews";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/static-testing/value-static-testing.mdx": {
	id: "guides/static-testing/value-static-testing.mdx";
  slug: "guides/static-testing/value-static-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/static-testing/work-products-static-testing.mdx": {
	id: "guides/static-testing/work-products-static-testing.mdx";
  slug: "guides/static-testing/work-products-static-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/boundary-value-analysis.mdx": {
	id: "guides/test-analysis-design/boundary-value-analysis.mdx";
  slug: "guides/test-analysis-design/boundary-value-analysis";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/branch-testing-coverage.mdx": {
	id: "guides/test-analysis-design/branch-testing-coverage.mdx";
  slug: "guides/test-analysis-design/branch-testing-coverage";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/checklist-based-testing.mdx": {
	id: "guides/test-analysis-design/checklist-based-testing.mdx";
  slug: "guides/test-analysis-design/checklist-based-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/collaboration-based-approaches.mdx": {
	id: "guides/test-analysis-design/collaboration-based-approaches.mdx";
  slug: "guides/test-analysis-design/collaboration-based-approaches";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/decision-table-testing.mdx": {
	id: "guides/test-analysis-design/decision-table-testing.mdx";
  slug: "guides/test-analysis-design/decision-table-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/ecommerce-website-checkout.mdx": {
	id: "guides/test-analysis-design/ecommerce-website-checkout.mdx";
  slug: "guides/test-analysis-design/ecommerce-website-checkout";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/equivalence-partitioning.mdx": {
	id: "guides/test-analysis-design/equivalence-partitioning.mdx";
  slug: "guides/test-analysis-design/equivalence-partitioning";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/error-guessing.mdx": {
	id: "guides/test-analysis-design/error-guessing.mdx";
  slug: "guides/test-analysis-design/error-guessing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/exercise.mdx": {
	id: "guides/test-analysis-design/exercise.mdx";
  slug: "guides/test-analysis-design/exercise";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/exploratory-testing.mdx": {
	id: "guides/test-analysis-design/exploratory-testing.mdx";
  slug: "guides/test-analysis-design/exploratory-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/hospital-management-software.mdx": {
	id: "guides/test-analysis-design/hospital-management-software.mdx";
  slug: "guides/test-analysis-design/hospital-management-software";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/state-transition-testing.mdx": {
	id: "guides/test-analysis-design/state-transition-testing.mdx";
  slug: "guides/test-analysis-design/state-transition-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/statement-testing-coverage.mdx": {
	id: "guides/test-analysis-design/statement-testing-coverage.mdx";
  slug: "guides/test-analysis-design/statement-testing-coverage";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/test-techniques-overview.mdx": {
	id: "guides/test-analysis-design/test-techniques-overview.mdx";
  slug: "guides/test-analysis-design/test-techniques-overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/value-white-box-testing.mdx": {
	id: "guides/test-analysis-design/value-white-box-testing.mdx";
  slug: "guides/test-analysis-design/value-white-box-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-analysis-design/white-box-techniques.mdx": {
	id: "guides/test-analysis-design/white-box-techniques.mdx";
  slug: "guides/test-analysis-design/white-box-techniques";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-tools/benefits-risks-test-automation.mdx": {
	id: "guides/test-tools/benefits-risks-test-automation.mdx";
  slug: "guides/test-tools/benefits-risks-test-automation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-tools/meaning-purpose-tool-support.mdx": {
	id: "guides/test-tools/meaning-purpose-tool-support.mdx";
  slug: "guides/test-tools/meaning-purpose-tool-support";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/test-tools/tool-support-testing.mdx": {
	id: "guides/test-tools/tool-support-testing.mdx";
  slug: "guides/test-tools/tool-support-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/acceptance-testing.mdx": {
	id: "guides/testing-throughout-lifecycle/acceptance-testing.mdx";
  slug: "guides/testing-throughout-lifecycle/acceptance-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/component-testing.mdx": {
	id: "guides/testing-throughout-lifecycle/component-testing.mdx";
  slug: "guides/testing-throughout-lifecycle/component-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/confirmation-regression-testing.mdx": {
	id: "guides/testing-throughout-lifecycle/confirmation-regression-testing.mdx";
  slug: "guides/testing-throughout-lifecycle/confirmation-regression-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/devops-testing.mdx": {
	id: "guides/testing-throughout-lifecycle/devops-testing.mdx";
  slug: "guides/testing-throughout-lifecycle/devops-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/impact-of-sdlc-on-testing.mdx": {
	id: "guides/testing-throughout-lifecycle/impact-of-sdlc-on-testing.mdx";
  slug: "guides/testing-throughout-lifecycle/impact-of-sdlc-on-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/integration-testing.mdx": {
	id: "guides/testing-throughout-lifecycle/integration-testing.mdx";
  slug: "guides/testing-throughout-lifecycle/integration-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/maintenance-testing.mdx": {
	id: "guides/testing-throughout-lifecycle/maintenance-testing.mdx";
  slug: "guides/testing-throughout-lifecycle/maintenance-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/retrospectives-process-improvement.mdx": {
	id: "guides/testing-throughout-lifecycle/retrospectives-process-improvement.mdx";
  slug: "guides/testing-throughout-lifecycle/retrospectives-process-improvement";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/sdlc-good-testing-practices.mdx": {
	id: "guides/testing-throughout-lifecycle/sdlc-good-testing-practices.mdx";
  slug: "guides/testing-throughout-lifecycle/sdlc-good-testing-practices";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/sdlc-models.mdx": {
	id: "guides/testing-throughout-lifecycle/sdlc-models.mdx";
  slug: "guides/testing-throughout-lifecycle/sdlc-models";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/shift-left-approach.mdx": {
	id: "guides/testing-throughout-lifecycle/shift-left-approach.mdx";
  slug: "guides/testing-throughout-lifecycle/shift-left-approach";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/sit.mdx": {
	id: "guides/testing-throughout-lifecycle/sit.mdx";
  slug: "guides/testing-throughout-lifecycle/sit";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/software-development-models.mdx": {
	id: "guides/testing-throughout-lifecycle/software-development-models.mdx";
  slug: "guides/testing-throughout-lifecycle/software-development-models";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/software-development-testing.mdx": {
	id: "guides/testing-throughout-lifecycle/software-development-testing.mdx";
  slug: "guides/testing-throughout-lifecycle/software-development-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/system-testing.mdx": {
	id: "guides/testing-throughout-lifecycle/system-testing.mdx";
  slug: "guides/testing-throughout-lifecycle/system-testing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/test-levels.mdx": {
	id: "guides/testing-throughout-lifecycle/test-levels.mdx";
  slug: "guides/testing-throughout-lifecycle/test-levels";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/test-types.mdx": {
	id: "guides/testing-throughout-lifecycle/test-types.mdx";
  slug: "guides/testing-throughout-lifecycle/test-types";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/testing-throughout-lifecycle/testing-driver-development.mdx": {
	id: "guides/testing-throughout-lifecycle/testing-driver-development.mdx";
  slug: "guides/testing-throughout-lifecycle/testing-driver-development";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"reference/example.md": {
	id: "reference/example.md";
  slug: "reference/example";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
