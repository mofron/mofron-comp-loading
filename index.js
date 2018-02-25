/**
 * @file   mofron-comp-loading/index.js
 * @brief  loading component for mofron
 * @author simpart
 */
let mf = require('mofron');
let ModalFil = require('mofron-comp-modalfil');
let Frame  = require('mofron-comp-frame');
let Text   = require('mofron-comp-text');
let Center = require('mofron-effect-center');

/**
 * @class mofron.comp.Loading
 * @brief loading component class
 */
mf.comp.Loading = class extends ModalFil {
    
    constructor (po) {
        try {
            super();
            this.name('Loading');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : (Date object) display date
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
            /* set frame */
            this.addChild(this.frame());
            this.frame().addEffect(new Center());
            /* set text */
            this.text(
                new Text({
                    size  : 30,
                    style : { 'margin' : 'auto' },
                    text  : 'Loading...'
                })
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    frame (val) {
        try {
            if (undefined === val) {
                /* getter */
                if (0 === this.child().length) {
                    return new Frame({
                        color : new mf.Color(255,255,255),
                        size  : new mf.Param(200, 100),
                        style : { 'display' : 'flex' }
                    });
                }
                return this.child()[0];
            }
            /* setter */
            if (true !== mf.func.isInclude(val, 'Frame')) {
                throw new Error('invalid parameter');
            }
            this.updChild(
                this.child()[0],
                val
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (val) {
        try {
            if (undefined === val) {
                /* getter */
                let chd = this.frame().child();
                let ret = [];
                for (let c_idx in chd) {
                    if (true === mf.func.isInclude(chd[c_idx], 'Text')) {
                        ret.push(chd[c_idx]);
                    }
                }
                return ret;
            }
            /* setter  */
            if (true !== mf.func.isInclude(val, 'Text')) {
                throw new Error('invalid parameter');
            }
            this.frame().addChild(val);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Loading;
