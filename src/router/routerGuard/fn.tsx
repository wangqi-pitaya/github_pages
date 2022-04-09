import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import Guard from './guard';

let handleRouteBefore: any = null;

export function setRouteBefore(fn: any) {
	handleRouteBefore = fn;
}

function lazyLoad(importFn: any, meta: any) {
	meta = meta || {};
	const Element = React.lazy(importFn);
	const lazyElement = (
		// fallback值就是路由切换时的loading组件
		<Suspense fallback={<div>loading</div>}>
			<Element _meta={meta} />
		</Suspense>
	);
	return <Guard element={lazyElement} meta={meta} handleRouteBefore={handleRouteBefore} />;
}

/**
 * transformRoutes 方法对原始路由配置进行了递归遍历处理，转换成react-router需要的路由配置数据格式
 */
export function transforRoutes(routes: any) {
	const list: any = [];
	routes.forEach((route: any) => {
		const obj = { ...route };
		if (obj.redirect) {
			obj.element = <Navigate to={obj.redirect} replace />;
		}
		if (obj.component) {
			obj.element = lazyLoad(obj.component, obj.meta);
		}
		delete obj.redirect;
		delete obj.component;
		delete obj.meta;
		if (obj.children) {
			obj.children = transforRoutes(obj.children);
		}
		list.push(obj);
	});

	return list;
}
