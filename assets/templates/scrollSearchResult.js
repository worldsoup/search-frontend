(function(){dust.register("scrollSearchResult",body_0);function body_0(chk,ctx){return chk.section(ctx.getPath(true,[]),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.section(ctx.get("hits"),ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.section(ctx.get("hits"),ctx,{"else":body_3,"block":body_4},null);}function body_3(chk,ctx){return chk.write("<p>No results found.</p>");}function body_4(chk,ctx){return chk.section(ctx.get("_source"),ctx,{"block":body_5},null).write(" ");}function body_5(chk,ctx){return chk.write(" <div class=\"results-list\"><img class=\"inline\" src=\"").reference(ctx.getPath(false,["appImages","0"]),ctx,"h").write("\"/><h4 class=\"inline\"><a href=\"").section(ctx.get("appStores"),ctx,{"block":body_6},null).write("\">").reference(ctx.get("appTitle"),ctx,"h").write("</a></h4><p>").reference(ctx.get("appDescription"),ctx,"h").notexists(ctx.get("appDescription"),ctx,{"block":body_7},null).write("</p><hr></div>");}function body_6(chk,ctx){return chk.reference(ctx.get("Web"),ctx,"h");}function body_7(chk,ctx){return chk.write(" ").reference(ctx.get("appFullDescription"),ctx,"h").write(" ");}return body_0;})();