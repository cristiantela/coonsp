//   __
//  / _|
// | |     __     __    _ __    __   _ __
// | |    /  \   /  \  | /  \  / _| | /  \
// | |   | /\ | | /\ | |  /\ | \ \  |  /\ |
// | |_  | \/ | | \/ | | | | |  \ \ |  \/ |
//  \__|  \__/   \__/  |_| |_| |__/ |  __/  v.2
//                                  | |
//                                  |_|
//
// Criado por Matheus Cristian Santos Portela
// Facebook - www.facebook.com/mathuesJS
// em 24/08/2014(DD/MM/AAAA) Ã s 21:03
(function(w){w.Coonsp=function(c){var c=c,C=c.getContext("2d"),a=true,e=this,i={},f=30,F={},b=false,n="center",W="width",h="height";this.elements={};this.start=function(){a=true;function s(){C.clearRect(0,0,c[W],c[h]);if(b){F[b](e);}for(var i in e.elements){var E=e.elements[i];var x=(E.x)?E.x:0;var y=(E.y)?E.y:0;var w=(E.w)?E.w:0;var h=(E.h)?E.h:0;var B=(E.background)?E.background:"#000000";if(B.slice(0,4)+B.slice(-1)=="url()"){if(!i[B.slice(4,-1)]){i[B.slice(4,-1)]=new Image();i[B.slice(4,-1)].src=B.slice(4,-1);B=i[B.slice(4,-1)];}else{B=i[B.slice(4,-1)];}}else{C.fillStyle=B;}var r=(E.resize)?E.resize:false;var p=(E.ponto)?E.ponto:"top-left";var l=p.split("-");var newX=0;var newY=0;var rotate=(E.rotate)?E.rotate:0;if((!r)&&(typeof B=="object")){w=B[W];h=B[h];}if(l[0]=="top"){newY=0;}else if(l[0]==n){newY=-(h/2);}else if(l[0]=="bottom"){newY=-h;}if(l[0]=="left"){newX=0;}else if(l[0]==n){newX=-(w/2);}else if(l[0]=="right"){newX=-w;}C.save();C.translate(x,y);C.rotate(rotate);if(!E.type||E.type=="block"){if(typeof B=="object"){C.drawImage(B,newX,newY,w,h);}else{C.fillRect(newX,newY,w,h);}}C.restore();}if(a){setTimeout(s,1000/f);}}s();};this.frame=function(o){if(o.before){o.before(e);}F[o.name]=o.function;if(o.inicialize){b=o.name;}};this.call=function(o){b=o;};this.stop=function(){a=false;};this.fps=function(o){f=o;}}})(window);
console.log("  __\n / _|\n| |     __     __    _ __    __   _ __\n| |    /  \\   /  \\  | /  \\  / _| | /  \\\n| |   | /\\ | | /\\ | |  /\\ | \\ \\  |  /\\ |\n| |_  | \\/ | | \\/ | | | | |  \\ \\ |  \\/ |\n \\__|  \\__/   \\__/  |_| |_| |__/ |  __/  v.2\n                                 | |\n                                 |_|\n\nCoonsp - Criado Por Matheus Cristian\nFacebook - www.facebook.com/mathuesJS");
