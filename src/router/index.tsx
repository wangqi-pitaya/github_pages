import { ReactNode } from 'react';
import pages from './pages';

export * from './routerGuard';

export interface IRoute {
	path: string;
	title?: string;
	meta?: {
		title?: string;
	};
	element?: ReactNode;
	children?: IRoute[];
	redirect?: string;
	component?: () => ReactNode;
}

export const routes: IRoute[] = pages;

export function onRouteBefore({ meta }: IRoute) {
	if (meta?.title) {
		document.title = meta.title;
	}
}
