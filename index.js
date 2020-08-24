/**
 * @file mofron-comp-loading/index.js
 * @brief loading component for mofron
 *        it's component for display when loading
 * @feature the display position is automatically centered
 *          this component is displayed like a modal window
 * @license MIT
 */
const ModalFil = require("mofron-comp-modalfil");
const Frame  = require("mofron-comp-frame");
const Text   = require("mofron-comp-text");
const HrzPos = require("mofron-effect-hrzpos");
const VrtPos = require("mofron-effect-vrtpos");
const comutl = mofron.util.common;

module.exports = class extends ModalFil {
    
    /**
     * initialize loading component
     *
     * @param (mixed) component: child component
     *                key-value: component config
     * @short text
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("Loading");
            this.shortForm("text");

	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.child(this.loadComp());
            /* defalut loading */
            this.loadComp(
                new Frame({
		    baseColor: [253,253,253],
		    size: new mofron.class.ConfArg("2rem","1rem"),
		    child: this.text()
                })
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * replace loading component
     *
     * @param (component) replace loading component
     * @return (coponent) loading component
     * @type parameter
     */
    loadComp (prm) {
        try {
            if (true === comutl.iscmp(prm)) {
                prm.effect([ new HrzPos('center'), new VrtPos('center') ]);
            }
            return this.innerComp("loadComp", prm, mofron.class.Component);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * display string
     * 
     * @param (mixed) string: string for display
     *                mofron-comp-text: text component for display
     * @return (mofron-comp-text) text component for display
     * @type parameter
     */
    text (prm) {
        try {
	    if ("string" === typeof prm) {
                prm = new Text(prm);
	    }
	    if (true === comutl.isinc(prm, "Text")) {
	        prm.config({
                    effect: [new HrzPos("center"), new VrtPos("center")],
		    size: new mofron.class.ConfArg("0.2rem",{ passive: true })
	        });
            }
	    return this.innerComp("text", prm, Text);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
