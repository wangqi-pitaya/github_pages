import { ReactNode } from 'react';
import pages from './pages';

export * from './routerGuard';

export interface IRoute {
	path: string;
	meta?: {
		title?: string;
	};
	element?: ReactNode;
	children?: IRoute[];
	redirect?: string;
	component?: () => ReactNode;
}

export const routes: IRoute[] = pages;

/**
 *
 * @param root0
 * @param root0.meta
 */
export function onRouteBefore({ meta }: IRoute) {
	if (meta?.title) {
		document.title = meta.title;
	}
}
