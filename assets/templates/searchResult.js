(function(){dust.register("searchResult",body_0);function body_0(chk,ctx){return chk.section(ctx.getPath(true,[]),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.section(ctx.get("hits"),ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write("<div class=\"results-container\"><a href=\"").reference(ctx.getPath(false,["hits","0","_source","appUrl"]),ctx,"h").write("\"><div class=\"top-result\"><img src=\"").reference(ctx.getPath(false,["hits","0","_source","appImages","0"]),ctx,"h").write(" ").notexists(ctx.getPath(false,["hits","0","_source","appImages","0"]),ctx,{"block":body_3},null).write("\" height=\"100\" /><h1>").reference(ctx.getPath(false,["hits","0","_source","appTitle"]),ctx,"h").write("</h1><p class=\"result-description\">").reference(ctx.getPath(false,["hits","0","_source","appDescription"]),ctx,"h").notexists(ctx.getPath(false,["hits","0","_source","appDescription"]),ctx,{"block":body_4},null).write("</p></div></a> ").exists(ctx.getPath(false,["hits","1","_source","appTitle"]),ctx,{"block":body_5},null).write("<div style=\"clear:both;\"></div><br></div>");}function body_3(chk,ctx){return chk.write(" ").reference(ctx.getPath(false,["hits","0","_source","appImages","1"]),ctx,"h").write(" ");}function body_4(chk,ctx){return chk.write(" ").reference(ctx.getPath(false,["hits","0","_source","appFullDescription"]),ctx,"h").write(" ");}function body_5(chk,ctx){return chk.write("<div class=\"secondary-results\"><div class=\"result-2\"><a href=\"").reference(ctx.getPath(false,["hits","1","_source","appUrl"]),ctx,"h").write("\"><img src=\"").reference(ctx.getPath(false,["hits","1","_source","appImages","0"]),ctx,"h").write(" ").notexists(ctx.getPath(false,["hits","1","_source","appImages","0"]),ctx,{"block":body_6},null).write("\" border=0 width=\"100px\" height=\"100px\" /> <br> <b>").reference(ctx.getPath(false,["hits","1","_source","appTitle"]),ctx,"h").write("</b><br><p class=\"result-description\">").reference(ctx.getPath(false,["hits","1","_source","appDescription"]),ctx,"h").notexists(ctx.getPath(false,["hits","1","_source","appDescription"]),ctx,{"block":body_7},null).write("</p> </a> </div>").exists(ctx.getPath(false,["hits","2","_source","appTitle"]),ctx,{"block":body_8},null).write("</div>");}function body_6(chk,ctx){return chk.write(" ").reference(ctx.getPath(false,["hits","1","_source","appImages","1"]),ctx,"h").write(" ");}function body_7(chk,ctx){return chk.write(" ").reference(ctx.getPath(false,["hits","1","_source","appFullDescription"]),ctx,"h").write(" ");}function body_8(chk,ctx){return chk.write("<div class=\"divider\"></div><div class=\"result-3\"><a href=\"").reference(ctx.getPath(false,["hits","2","_source","appUrl"]),ctx,"h").write("\"><img src=\"").reference(ctx.getPath(false,["hits","2","_source","appImages","0"]),ctx,"h").write(" ").notexists(ctx.getPath(false,["hits","2","_source","appImages","0"]),ctx,{"block":body_9},null).write("\" border=0 width=\"100px\" height=\"100px\" /> <br> <b>").reference(ctx.getPath(false,["hits","2","_source","appTitle"]),ctx,"h").write("</b><br><p class=\"result-description\">").reference(ctx.getPath(false,["hits","2","_source","appDescription"]),ctx,"h").notexists(ctx.getPath(false,["hits","2","_source","appDescription"]),ctx,{"block":body_10},null).write("</p></a></div>");}function body_9(chk,ctx){return chk.write(" ").reference(ctx.getPath(false,["hits","2","_source","appImages","1"]),ctx,"h").write(" ");}function body_10(chk,ctx){return chk.write(" ").reference(ctx.getPath(false,["hits","2","_source","appFullDescription"]),ctx,"h").write(" ");}return body_0;})();