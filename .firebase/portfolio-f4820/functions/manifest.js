export const manifest = {
	appDir: "_app",
	appPath: "Portfolio/_app",
	assets: new Set([".DS_Store","favicon.png","wavesOpacity.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.8cf7ab9c.js","imports":["_app/immutable/entry/start.8cf7ab9c.js","_app/immutable/chunks/index.e65d10ad.js","_app/immutable/chunks/singletons.a677c4c2.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.82fa2f78.js","imports":["_app/immutable/entry/app.82fa2f78.js","_app/immutable/chunks/index.e65d10ad.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
