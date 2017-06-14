        (function(w, d, undefined){
            String.prototype.format = function(){
                return this.replace(/\{(\d+)\}/g, (m, n) => { return arguments[n]; })
            };
            window.decryptEmail = (function(code){
                let bin2str = '';
                code.split(' ').map(bin =>
                    bin2str += String.fromCharCode(parseInt(bin, 2))
                );
                return bin2str;
            });
            d.querySelector("#z").innerHTML = '<a href="mailto:{0}">{0}</a>'.format(decryptEmail("01100011 01101111 01101110 01110100 01100001 01110100 01101111 01000000 01100011 01111001 01110100 01100001 01100100 01100101 01101100 00101110 01100011 01101111"));
        })(window, document);