function getParameterByName(t,e=window.location.href){t=t.replace(/[\[\]]/g,"\\$&");var o=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return o?o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):"":null}function randomMailHost(t){return t[Math.floor(Math.random()*t.length)]}const storage={get:t=>localStorage.getItem(t)||Cookies.get(t),set(t,e){localStorage.setItem(t,e),Cookies.set(t,e,{expires:365})}};$((function(){$(".baslik").on("click",(function(){var t=$(this).next("ul");t.hasClass("acik")?t.removeClass("acik"):t.addClass("acik")}));var t=getParameterByName("inboxId"),e=getParameterByName("mailhost");t&&(storage.set("shortid",t),storage.set("mailhost",e));var o=storage.get("mailhost")||"",a=[];new ClipboardJS(".copyable"),$customShortId=$("#customShortid"),$shortId=$("#shortid"),$customTheme="check",$placeholder_old="",$customShortId.on("click",(function(){var t=$(this);if($shortId.removeAttr("readonly"),t.hasClass("edit"))$shortId.val(""),t.removeClass("edit"),t.toggleClass($customTheme),t.find("em.custom_btn").hide(),t.find("em.confirm_btn").show(),$placeholder_old=$shortId.prop("placeholder"),$shortId.prop("placeholder",$shortId.attr("editplaceholder"));else{o=randomMailHost(a),$shortId.attr("readonly","true"),t.removeClass("check"),t.find("em.custom_btn").show(),t.find("em.confirm_btn").hide(),t.toggleClass("edit"),$shortId.prop("placeholder",$placeholder_old),$mailUser=$shortId.val().toLowerCase();var e=$mailUser+"@"+o;n($mailUser),$shortId.val(e),window.location.reload()}})),$("#share").on("click",(function(){$shareContaienr=$("#share_qr_container"),$indexContaienr=$("#index_container"),$shareContaienr.hasClass("goster")?($shareContaienr.removeClass("goster"),$indexContaienr.addClass("goster")):($shareContaienr.addClass("goster"),$indexContaienr.removeClass("goster"))})),$maillist=$("#maillist"),$("#back").on("click",(function(){$("#panel2").hide(),$("#panel1").show()})),$("#plain").on("click",(function(){$("#content").hide(),$("#rawcontent").show(),Prism.highlightAll()}));var s=io(window.ioDomain),n=function(t){storage.set("shortid",t);var e=t+"@"+o,a=rootDomain+"?inboxId="+encodeURIComponent(t)+"&mailhost="+encodeURIComponent(o);$("#shortid").val(e),$("#kare_kod_adres").attr("data-clipboard-text",a),$("#kare_kod_adres").attr("value",a),$("#share_qr").attr("src","https://api.qrserver.com/v1/create-qr-code/?data="+encodeURIComponent(a)+"&size=150x150")};$("#refreshShortid").click((function(){s.emit("request shortid",!0)}));try{const t=Cookies.get("mailhosts");a=JSON.parse(t),o=randomMailHost(a)}catch(t){console.error(t)}!function(){const t=storage.get("shortid");t&&n(t),s.on("connect",(function(){s.emit("get domain"),t?s.emit("set shortid",t):s.emit("request shortid",!0)}))}(),s.on("mailHost",(function(t){a=t,o||(o=randomMailHost(t))})),s.on("shortid",(function(t){n(t)})),s.on("statistics",(function(t){$statistic=$("#statistic-text"),t.hasOwnProperty("mailCount")&&$statistic.find(".total_email_count").text(t.mailCount),t.hasOwnProperty("todayMailCount")&&$statistic.find(".today_email_count").text(t.todayMailCount),t.hasOwnProperty("accountCount")&&$statistic.find(".created_inbox_count").text(t.accountCount),$statistic.prop("style","")})),s.on("mail",(function(t){$li=$('<li class="mail active">').data("mail",t),$link=$('<a href="javascript:void(0)">'),$link.append('<div class="avatar"><img src="https://cdn.jsdelivr.net/gh/spamcage/libs/images/posta.png"></div>').append($('<div class="gonderen">').text(t.headers.from)).append($('<div class="baslik">').text(t.headers.subject||"None")).append('<div class="zaman"><img src="https://cdn.jsdelivr.net/gh/spamcage/libs/images/arrow-right.png"></div>'),$li.append($link),$li.on("click","a",(function(){console.log(t.headers.from),$("#summary").html("&lt;"+t.headers.from+"&gt; <strong>"+(t.headers.subject||"None")+"</strong>"),$("#content").html(t.html),$("#content").show(),$("#rawcontent").html($("<pre>").html($("<code>").addClass("language-json").html(JSON.stringify(t,null,2)))),$("#rawcontent").hide(),$("#panel1").hide(),$("#panel2").show()})),$maillist.after($li),$("#emptybox").hide()}))}));