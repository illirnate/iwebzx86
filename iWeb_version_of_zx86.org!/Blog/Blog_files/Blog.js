// Created by iWeb 3.0.2 local-build-20240515

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,332),url:'Blog_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Blog_files/stroke_1.png'},{rect:new IWRect(2,-2,356,4),url:'Blog_files/stroke_2.png'},{rect:new IWRect(358,-2,4,4),url:'Blog_files/stroke_3.png'},{rect:new IWRect(358,2,4,332),url:'Blog_files/stroke_4.png'},{rect:new IWRect(358,334,4,4),url:'Blog_files/stroke_5.png'},{rect:new IWRect(2,334,356,4),url:'Blog_files/stroke_6.png'},{rect:new IWRect(-2,334,4,4),url:'Blog_files/stroke_7.png'}],new IWSize(360,336))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://zx86.org/iWeb_version_of_zx86.org%21/Blog/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Blog_files/BlogMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
