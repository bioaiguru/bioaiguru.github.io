/**
 * Content loading utilities for service pages
 */

export interface ServiceContent {
    id: string;
    title: string;
    tagline: string;
    description: string;
    [key: string]: any;
}

/**
 * Load service content from JSON file
 * @param path - Path to JSON file relative to content/services/
 * @returns Service content object
 */
export async function getServiceContent(path: string): Promise<ServiceContent> {
    try {
        const content = await import(`@/content/services/${path}.json`);
        return content.default || content;
    } catch (error) {
        console.error(`Failed to load content from ${path}:`, error);
        throw new Error(`Content not found: ${path}`);
    }
}

/**
 * Load transcriptomics overview content
 */
export async function getTranscriptomicsContent() {
    return getServiceContent('omics/transcriptomics');
}

/**
 * Load bulk RNA-seq content
 */
export async function getBulkRNAContent() {
    return getServiceContent('omics/transcriptomics/bulk-rna');
}
