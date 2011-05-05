define([
	"doh",
	"require",
	"./loader/modules"], function(doh, require){
	if(doh.isBrowser){
		doh.register(require.nameToUrl("./loader/config.html")+"?dojoConfig-djConfig-require");
		doh.register(require.nameToUrl("./loader/config.html")+"?dojoConfig-require");
		doh.register(require.nameToUrl("./loader/config.html")+"?dojoConfig-djConfig");
		doh.register(require.nameToUrl("./loader/config.html")+"?dojoConfig");
		doh.register(require.nameToUrl("./loader/config.html")+"?djConfig-require");
		doh.register(require.nameToUrl("./loader/config.html")+"?djConfig");
		doh.register(require.nameToUrl("./loader/config.html")+"?require");
		doh.register(require.nameToUrl("./loader/configApi.html"));
		doh.register(require.nameToUrl("./loader/config-sniff.html"));
		doh.register(require.nameToUrl("./loader/config-sniff-djConfig.html"));
		doh.register(require.nameToUrl("./loader/config-has.html"));
		doh.register(require.nameToUrl("./loader/errorApi.html"));
		doh.register(require.nameToUrl("./loader/errorApi.html")+"?noCatch");
		doh.register(require.nameToUrl("./loader/cdnTest.html"));
	}
});
