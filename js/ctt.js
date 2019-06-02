(function() {
	const showSelection = () => tinyMCE.activeEditor.selection.getContent({ format: "text" });
	tinymce.create("tinymce.plugins.ctt", {
		init: function(ed, url) {
			ed.addButton("ctt", {
				title: "Click To Tweet Plugin",
				image: url.replace("/js", "") + "/images/editor-icon.png",
				onclick: function() {
					const seltxt = showSelection();
					const pre_txt = encodeURIComponent(seltxt).replace("%A0", "%20");
					const permalink = jQuery("#editor .edit-post-post-link__link-prefix").text();
					jQuery(document).ready(function($) {
						tinymce.activeEditor.windowManager.open({
							title: "Click To Tweet Plugin",
							width: 1030,
							height: 600,
							classes: "myAwesomeClass-panel",
							url: `${ajaxurl}?action=ctt_show_dialog&pretext=${pre_txt}&permalink=${permalink}`,
						});
					});
				}
			});
		},
		createControl: (n, cm) => null,
		getInfo: () => ({
			longname: "Click To Tweet Plugin",
			author: "ClickToTweet.com",
			authorurl: "http://ctt.ec/",
			infourl: "http://ctt.ec/",
			version: "2.0.10"
		}),
	});
	tinymce.PluginManager.add("ctt", tinymce.plugins.ctt);
})();
