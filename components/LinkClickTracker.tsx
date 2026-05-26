'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';

export default function LinkClickTracker() {
	useEffect(() => {
		function onClick(e: MouseEvent) {
			const link = (e.target as Element).closest('a.url') as
				| HTMLAnchorElement
				| null;
			if (!link) return;
			track('sitemap_link', {
				path: (link.textContent || '').trim().slice(0, 200),
				href: link.href.slice(0, 200),
			});
		}

		document.addEventListener('click', onClick);
		return () => document.removeEventListener('click', onClick);
	}, []);

	return null;
}
