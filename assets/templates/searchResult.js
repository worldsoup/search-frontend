(function(){dust.register("searchResult",body_0);function body_0(chk,ctx){return chk.section(ctx.getPath(true,[]),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.section(ctx.get("hits"),ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write("<div style=\"width: 500px;\"><img src=\"").reference(ctx.getPath(false,["hits","0","_source","appImages","0"]),ctx,"h").write("\" border=0 width=\"100px\" height=\"100px\" /> &nbsp; <b><a href=\"").reference(ctx.getPath(false,["hits","0","_source","appStores","Web"]),ctx,"h").write("\">").reference(ctx.getPath(false,["hits","0","_source","appTitle"]),ctx,"h").write("</a></b><br><br>").reference(ctx.getPath(false,["hits","0","_source","appFullDescription"]),ctx,"h").write("<br></div><div style=\"width: 500px;\"><div style=\"float: left; width: 250px;\"><img src=\"").reference(ctx.getPath(false,["hits","1","_source","appImages","0"]),ctx,"h").write("\" border=0 width=\"100px\" height=\"100px\" /> <br> <b><a href=\"").reference(ctx.getPath(false,["hits","1","_source","appStores","Web"]),ctx,"h").write("\">").reference(ctx.getPath(false,["hits","1","_source","appTitle"]),ctx,"h").write("</a></b><br><br>").reference(ctx.getPath(false,["hits","1","_source","appFullDescription"]),ctx,"h").write("<br></div><div style=\"float: left; width: 250px;\"><img src=\"").reference(ctx.getPath(false,["hits","2","_source","appImages","0"]),ctx,"h").write("\" border=0 width=\"100px\" height=\"100px\" /> <br> <b><a href=\"").reference(ctx.getPath(false,["hits","2","_source","appStores","Web"]),ctx,"h").write("\">").reference(ctx.getPath(false,["hits","2","_source","appTitle"]),ctx,"h").write("</a></b><br><br>").reference(ctx.getPath(false,["hits","2","_source","appFullDescription"]),ctx,"h").write("<br></div></div><div style=\"clear:both;\"></div><br>");}return body_0;})();