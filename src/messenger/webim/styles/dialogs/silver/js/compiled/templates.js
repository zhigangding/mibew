(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b.sound_control=a(function(a,b,c,d,e){function j(a,b){var d="",e,f;return d+='\n    <div class="tpl-image sound-control-on" title="',f=c.L10n,e=f?f.call(a,"chat.window.toolbar.turn_off_sound",{hash:{}}):g.call(a,"L10n","chat.window.toolbar.turn_off_sound",{hash:{}}),d+=h(e)+'"></div>\n',d}function k(a,b){var d="",e,f;return d+='\n    <div class="tpl-image sound-control-off" title="',f=c.L10n,e=f?f.call(a,"chat.window.toolbar.turn_on_sound",{hash:{}}):g.call(a,"L10n","chat.window.toolbar.turn_on_sound",{hash:{}}),d+=h(e)+'"></div>\n',d}c=c||a.helpers;var f,g=c.helperMissing,h=this.escapeExpression,i=this;return f=b.enabled,f=c["if"].call(b,f,{hash:{},inverse:i.program(3,k,e),fn:i.program(1,j,e)}),f||f===0?f:""}),b.user_name_control=a(function(a,b,c,d,e){function k(a,b){var d="",e,f;d+='\n    <span class="user-name-control-prefix">',f=c.L10n,e=f?f.call(a,"chat.client.name",{hash:{}}):i.call(a,"L10n","chat.client.name",{hash:{}}),d+=h(e)+"</span>\n    ",e=a.nameInput,e=c["if"].call(a,e,{hash:{},inverse:j.program(4,m,b),fn:j.program(2,l,b)});if(e||e===0)d+=e;return d+="\n",d}function l(a,b){var d="",e,f;return d+='\n        <div class="user-name-control-input-bg"><input id="user-name-control-input" type="text" size="12" value="',e=a.user,e=e==null||e===!1?e:e.name,e=typeof e===g?e():e,d+=h(e)+'" class="username" /></div>\n        <a href="javascript:void(0)" class="user-name-control-set tpl-image" title="',f=c.L10n,e=f?f.call(a,"chat.client.changename",{hash:{}}):i.call(a,"L10n","chat.client.changename",{hash:{}}),d+=h(e)+'"></a>\n    ',d}function m(a,b){var d="",e,f;return d+='\n        <a href="javascript:void(0)" title="',f=c.L10n,e=f?f.call(a,"chat.client.changename",{hash:{}}):i.call(a,"L10n","chat.client.changename",{hash:{}}),d+=h(e)+'">',e=a.user,e=e==null||e===!1?e:e.name,e=typeof e===g?e():e,d+=h(e)+'</a>\n        <a class="user-name-control-change tpl-image" title="',f=c.L10n,e=f?f.call(a,"chat.client.changename",{hash:{}}):i.call(a,"L10n","chat.client.changename",{hash:{}}),d+=h(e)+'"></a>\n    ',d}function n(a,b){var d="",e,f;return d+="\n",f=c.L10n,e=f?f.call(a,"chat.client.name",{hash:{}}):i.call(a,"L10n","chat.client.name",{hash:{}}),d+=h(e)+"&nbsp;",e=a.user,e=e==null||e===!1?e:e.name,e=typeof e===g?e():e,d+=h(e)+"\n",d}c=c||a.helpers;var f,g="function",h=this.escapeExpression,i=c.helperMissing,j=this;return f=b.user,f=f==null||f===!1?f:f.canChangeName,f=c["if"].call(b,f,{hash:{},inverse:j.program(6,n,e),fn:j.program(1,k,e)}),f||f===0?f:""}),b.status=a(function(a,b,c,d,e){c=c||a.helpers;var f,g,h="function",i=this.escapeExpression;return g=c.title,g?f=g.call(b,{hash:{}}):(f=b.title,f=typeof f===h?f():f),i(f)}),b.status_typing=a(function(a,b,c,d,e){c=c||a.helpers;var f,g,h=c.helperMissing,i=this.escapeExpression;return g=c.L10n,f=g?g.call(b,"typing.remote",{hash:{}}):h.call(b,"L10n","typing.remote",{hash:{}}),i(f)}),b.status_message=a(function(a,b,c,d,e){c=c||a.helpers;var f,g,h="function",i=this.escapeExpression;return g=c.message,g?f=g.call(b,{hash:{}}):(f=b.message,f=typeof f===h?f():f),i(f)}),b.sound=a(function(a,b,c,d,e){function j(a,b){var d="",e,f;return d+='\n<audio autoplay src="',f=c.file,f?e=f.call(a,{hash:{}}):(e=a.file,e=typeof e===g?e():e),d+=h(e)+'">\n    <embed src="',f=c.file,f?e=f.call(a,{hash:{}}):(e=a.file,e=typeof e===g?e():e),d+=h(e)+'" hidden="true" autostart="true" loop="false" />\n</audio>\n',d}c=c||a.helpers;var f,g="function",h=this.escapeExpression,i=this;return f=b.file,f=c["if"].call(b,f,{hash:{},inverse:i.noop,fn:i.program(1,j,e)}),f||f===0?f:""}),b.close_control=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i=c.helperMissing,j=this.escapeExpression;return f+='<div class="tpl-image" title="',h=c.L10n,g=h?h.call(b,"chat.window.close_title",{hash:{}}):i.call(b,"L10n","chat.window.close_title",{hash:{}}),f+=j(g)+'"></div>',f}),b.avatar=a(function(a,b,c,d,e){function j(a,b){var d="",e,f;return d+='<img src="',f=c.imageLink,f?e=f.call(a,{hash:{}}):(e=a.imageLink,e=typeof e===g?e():e),d+=h(e)+'" border="0" alt="" />',d}function k(a,b){return'<div class="default-avatar"></div>'}c=c||a.helpers;var f,g="function",h=this.escapeExpression,i=this;return f=b.imageLink,f=c["if"].call(b,f,{hash:{},inverse:i.program(3,k,e),fn:i.program(1,j,e)}),f||f===0?f:""}),b.refresh_control=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i=c.helperMissing,j=this.escapeExpression;return f+='<div class="tpl-image" title="',h=c.L10n,g=h?h.call(b,"chat.window.toolbar.refresh",{hash:{}}):i.call(b,"L10n","chat.window.toolbar.refresh",{hash:{}}),f+=j(g)+'"></div>',f}),b.history_control=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i=c.helperMissing,j=this.escapeExpression;return f+='<div class="tpl-image" title="',h=c.L10n,g=h?h.call(b,"page.analysis.userhistory.title",{hash:{}}):i.call(b,"L10n","page.analysis.userhistory.title",{hash:{}}),f+=j(g)+'"></div>\n',f+='\n<div class="control-config" data-win-params="toolbar=0,scrollbars=0,location=0,statusbar=1,menubar=0,width=720,height=560,resizable=1"></div>',f}),b.send_mail_control=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i=c.helperMissing,j=this.escapeExpression;return f+='<div class="tpl-image" title="',h=c.L10n,g=h?h.call(b,"chat.window.toolbar.mail_history",{hash:{}}):i.call(b,"L10n","chat.window.toolbar.mail_history",{hash:{}}),f+=j(g)+'"></div>\n',f+='\n<div class="control-config" data-win-params="toolbar=0,scrollbars=0,location=0,statusbar=1,menubar=0,width=603,height=254,resizable=0"></div>',f}),b.secure_mode_control=a(function(a,b,c,d,e){return c=c||a.helpers,'<div class="tpl-image" title="SSL"></div>'}),b.redirect_control=a(function(a,b,c,d,e){function j(a,b){var d="",e,f;return d+='\n<div class="tpl-image" title="',f=c.L10n,e=f?f.call(a,"chat.window.toolbar.redirect_user",{hash:{}}):g.call(a,"L10n","chat.window.toolbar.redirect_user",{hash:{}}),d+=h(e)+'"></div>\n',d}c=c||a.helpers;var f,g=c.helperMissing,h=this.escapeExpression,i=this;return f=b.user,f=f==null||f===!1?f:f.canPost,f=c["if"].call(b,f,{hash:{},inverse:i.noop,fn:i.program(1,j,e)}),f||f===0?f:""}),b.message_form=a(function(a,b,c,d,e){function l(a,b){return'\n    <div class="bgc"><div class="bgl"><div class="bgr">\n        <textarea id="message-input" class="message" tabindex="0" rows="4" cols="10"></textarea>\n    </div></div></div>\n'}function m(a,b){var d="",e,f;d+='\n    <div id="postmessage">\n        <div id="predefined-wrapper">\n            ',e=a.user,e=e==null||e===!1?e:e.isAgent,e=c["if"].call(a,e,{hash:{},inverse:k.noop,fn:k.program(4,n,b)});if(e||e===0)d+=e;return d+='\n        </div>\n        <a href="javascript:void(0)" id="send-message" title="',f=c.L10n,e=f?f.call(a,"chat.window.send_message",{hash:{}}):j.call(a,"L10n","chat.window.send_message",{hash:{}}),d+=i(e)+'">',f=c.L10n,e=f?f.call(a,"chat.window.send_message_short_and_shortcut",{hash:{}}):j.call(a,"L10n","chat.window.send_message_short_and_shortcut",{hash:{}}),d+=i(e)+"</a>\n    </div>\n",d}function n(a,b){var d="",e,f;d+='\n                <select id="predefined" size="1" class="answer">\n                    <option>',f=c.L10n,e=f?f.call(a,"chat.window.predefined.select_answer",{hash:{}}):j.call(a,"L10n","chat.window.predefined.select_answer",{hash:{}}),d+=i(e)+"</option>\n                ",e=a.predefinedAnswers,e=c.each.call(a,e,{hash:{},inverse:k.noop,fn:k.program(5,o,b)});if(e||e===0)d+=e;return d+="\n                </select>\n            ",d}function o(a,b){var c="",d;return c+="\n                    <option>",d=a["short"],d=typeof d===h?d():d,c+=i(d)+"</option>\n                ",c}c=c||a.helpers;var f="",g,h="function",i=this.escapeExpression,j=c.helperMissing,k=this;f+='<div id="message">\n',g=b.user,g=g==null||g===!1?g:g.canPost,g=c["if"].call(b,g,{hash:{},inverse:k.noop,fn:k.program(1,l,e)});if(g||g===0)f+=g;f+='\n</div>\n\n<div id="send">\n',g=b.user,g=g==null||g===!1?g:g.canPost,g=c["if"].call(b,g,{hash:{},inverse:k.noop,fn:k.program(3,m,e)});if(g||g===0)f+=g;return f+='\n</div>\n<div class="clear"></div>',f}),b.message=a(function(a,b,c,d,e){function m(a,b){var d="",e,f;return d+="<span class='n",f=c.kindName,f?e=f.call(a,{hash:{}}):(e=a.kindName,e=typeof e===i?e():e),d+=j(e)+"'>",f=c.name,f?e=f.call(a,{hash:{}}):(e=a.name,e=typeof e===i?e():e),d+=j(e)+"</span>: ",d}function n(a,b){var d,e;return d=a.message,e=c.apply,d=e?e.call(a,d,"urlReplace, nl2br, allowTags",{hash:{}}):k.call(a,"apply",d,"urlReplace, nl2br, allowTags",{hash:{}}),j(d)}function o(a,b){var d,e;return d=a.message,e=c.apply,d=e?e.call(a,d,"urlReplace, nl2br",{hash:{}}):k.call(a,"apply",d,"urlReplace, nl2br",{hash:{}}),j(d)}c=c||a.helpers;var f="",g,h,i="function",j=this.escapeExpression,k=c.helperMissing,l=this;f+="<span>",g=b.created,h=c.formatTime,g=h?h.call(b,g,{hash:{}}):k.call(b,"formatTime",g,{hash:{}}),f+=j(g)+"</span> \n",g=b.name,g=c["if"].call(b,g,{hash:{},inverse:l.noop,fn:l.program(1,m,e)});if(g||g===0)f+=g;f+="\n<span class='m",h=c.kindName,h?g=h.call(b,{hash:{}}):(g=b.kindName,g=typeof g===i?g():g),f+=j(g)+"'>",g=b.allowFormatting,g=c["if"].call(b,g,{hash:{},inverse:l.program(5,o,e),fn:l.program(3,n,e)});if(g||g===0)f+=g;return f+="</span><br/>",f})})()