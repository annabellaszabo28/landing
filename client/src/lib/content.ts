// Helper to parse frontmatter without gray-matter (which requires Node Buffer)
function parseFrontmatter(text: string) {
    if (typeof text !== 'string') return { data: {}, content: '' };

    // Normalize newlines
    const normalized = text.replace(/\r\n/g, '\n');

    // Check if it starts with frontmatter delimiter
    if (!normalized.startsWith('---\n')) {
        return { data: {}, content: text };
    }

    // Find the end delimiter
    // We look for \n---\n starting from index 3
    const endDelimiterIndex = normalized.indexOf('\n---\n', 3);

    if (endDelimiterIndex === -1) {
        // Fallback: maybe it ends with just --- at EOF
        if (normalized.endsWith('\n---')) {
            const endIdx = normalized.length - 4;
            const frontmatterRaw = normalized.slice(4, endIdx).trim();
            const content = "";
            return parseFrontmatterBlock(frontmatterRaw, content);
        }
        return { data: {}, content: text };
    }

    const frontmatterRaw = normalized.slice(4, endDelimiterIndex).trim();
    const content = normalized.slice(endDelimiterIndex + 5).trim();

    return parseFrontmatterBlock(frontmatterRaw, content);
}

function parseFrontmatterBlock(frontmatterRaw: string, content: string) {
    const data: Record<string, any> = {};

    frontmatterRaw.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex === -1) return;

        const key = line.slice(0, colonIndex).trim();
        let value = line.slice(colonIndex + 1).trim();

        if (!value) return;

        // Handle arrays like ["a", "b"]
        if (value.startsWith('[') && value.endsWith(']')) {
            try {
                data[key] = JSON.parse(value);
            } catch (e) {
                // simple fallback for comma separated
                data[key] = value.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
            }
        } else {
            // Handle quoted strings
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            data[key] = value;
        }
    });

    return { data, content };
}

// Types
export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    author: string;
    category: string;
    excerpt: string;
    image: string;
    content: string;
}

export interface CaseStudy {
    slug: string;
    client: string;
    category: string;
    title: string;
    description: string;
    result: string;
    tags: string[];
    image: string;
    color: string;
    content: string;
}

// Helper to load markdown content
async function loadMarkdownContent<T>(globs: Record<string, () => Promise<unknown>>): Promise<T[]> {
    const contentPromises = Object.entries(globs).map(async ([path, resolver]) => {
        const fileContent = (await resolver()) as string;
        const { data, content } = parseFrontmatter(fileContent);
        const slug = path.split("/").pop()?.replace(".md", "") || "";

        return { ...data, slug, content } as T;
    });

    return Promise.all(contentPromises);
}

import i18n from '../i18n';

// ... (previous interfaces and helper functions)

// Blog Posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
    const lang = i18n.language.split('-')[0];
    const isHu = lang === 'hu';

    let globs;
    if (isHu) {
        globs = import.meta.glob("../content/blog/*.hu.md", { query: "?raw", import: "default" });
    } else {
        globs = import.meta.glob("../content/blog/*.md", { query: "?raw", import: "default" });
        // Filter out .hu.md files from the default glob if any
        const filteredGlobs: Record<string, () => Promise<unknown>> = {};
        for (const [path, resolver] of Object.entries(globs)) {
            if (!path.endsWith('.hu.md')) {
                filteredGlobs[path] = resolver;
            }
        }
        globs = filteredGlobs;
    }

    const posts = await loadMarkdownContent<BlogPost>(globs);

    // If Hungarian is requested but no posts found, fallback to English
    if (isHu && posts.length === 0) {
        const enGlobs = import.meta.glob("../content/blog/*.md", { query: "?raw", import: "default" });
        const filteredEnGlobs: Record<string, () => Promise<unknown>> = {};
        for (const [path, resolver] of Object.entries(enGlobs)) {
            if (!path.endsWith('.hu.md')) {
                filteredEnGlobs[path] = resolver;
            }
        }
        return (await loadMarkdownContent<BlogPost>(filteredEnGlobs)).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
    const posts = await getAllBlogPosts();
    return posts.find((p) => p.slug === slug || p.slug.replace('.hu', '') === slug);
}

// Case Studies
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
    const lang = i18n.language.split('-')[0];
    const isHu = lang === 'hu';

    let globs;
    if (isHu) {
        globs = import.meta.glob("../content/work/*.hu.md", { query: "?raw", import: "default" });
    } else {
        globs = import.meta.glob("../content/work/*.md", { query: "?raw", import: "default" });
        const filteredGlobs: Record<string, () => Promise<unknown>> = {};
        for (const [path, resolver] of Object.entries(globs)) {
            if (!path.endsWith('.hu.md')) {
                filteredGlobs[path] = resolver;
            }
        }
        globs = filteredGlobs;
    }

    const studies = await loadMarkdownContent<CaseStudy>(globs);

    if (isHu && studies.length === 0) {
        const enGlobs = import.meta.glob("../content/work/*.md", { query: "?raw", import: "default" });
        const filteredEnGlobs: Record<string, () => Promise<unknown>> = {};
        for (const [path, resolver] of Object.entries(enGlobs)) {
            if (!path.endsWith('.hu.md')) {
                filteredEnGlobs[path] = resolver;
            }
        }
        return loadMarkdownContent<CaseStudy>(filteredEnGlobs);
    }

    return studies;
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | undefined> {
    const studies = await getAllCaseStudies();
    return studies.find((s) => s.slug === slug || s.slug.replace('.hu', '') === slug);
}

// Static Pages
export async function getPageContent<T>(pageName: string): Promise<T> {
    const lang = i18n.language.split('-')[0];
    const targetFile = lang === 'hu' ? `${pageName}_hu.json` : `${pageName}.json`;

    const globs = import.meta.glob("../content/pages/*.json", { eager: true });

    let foundPath = Object.keys(globs).find(path => path.endsWith(targetFile));

    // Fallback to English if Hungarian file not found
    if (!foundPath && lang === 'hu') {
        foundPath = Object.keys(globs).find(path => path.endsWith(`${pageName}.json`));
    }

    if (!foundPath) {
        throw new Error(`Content for page ${pageName} not found`);
    }

    return (globs[foundPath] as any).default || (globs[foundPath] as T);
}
