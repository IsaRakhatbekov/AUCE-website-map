import { readFileSync } from 'fs';
import { join } from 'path';

export default function SitemapContent() {
	const html = readFileSync(
		join(process.cwd(), 'content/sitemap-body.html'),
		'utf-8',
	);

	return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
