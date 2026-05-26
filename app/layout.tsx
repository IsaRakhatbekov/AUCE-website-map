import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import LinkClickTracker from '@/components/LinkClickTracker';
import './globals.css';

export const metadata: Metadata = {
	title: 'Карта сайта AUCA — auca.kg',
	description:
		'Полная иерархическая структура сайта American University of Central Asia (русская версия)',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body>
				{children}
				<Analytics />
				<LinkClickTracker />
			</body>
		</html>
	);
}
