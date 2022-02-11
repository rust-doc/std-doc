window.ALL_CRATES = ["alloc","core","proc_macro","std","test"];

function ShowHelpTranslateDialog(a)
{
	alert("感谢您的支持，人为纠正功能正处于决策中。请耐心等待下一版本");
	//age = prompt("请输入你的翻译建议:","感谢您的支持，当前功能还在开发中。请耐心等待后续版本");
}

window.onload = function(e) {
	var block = document.querySelectorAll("[istranslationnode='true']");
	block.forEach( ele => {
		var help_trans = document.createElement("a");
		help_trans.textContent = "[帮助纠正😄]";
		help_trans.bindData = ele;
		help_trans.href = "#";
		if(false == ele.firstChild.nodeName.toLowerCase().startsWith("h") )
		help_trans.style = "display: inline-block;margin-bottom: 10px;";
		
		help_trans.onclick =  (e) =>{
			ShowHelpTranslateDialog(e);
		};
		ele.insertBefore(help_trans, ele.firstChild);
	});
}