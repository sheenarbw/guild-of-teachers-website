import type { MDXComponents } from "mdx/types";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        ...components,
        h1: ({ children }) => <h1 className="text-4xl">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl">{children}</h2>,
    };
}