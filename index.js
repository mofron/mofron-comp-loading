/**
 * @file mofron-comp-loading/index.js
 * @brief loading component for mofron
 *        it is a component to display when loading
 * @feature the display position is automatically centered
 *          this comp is displayed like a modal window
 * @author simpart
 */
const mf = require("mofron");
const ModalFil = require("mofron-comp-modalfil");
const Frame  = require("mofron-comp-frame");
const Text   = require("mofron-comp-text");
const HrzPos = require("mofron-effect-hrzpos");
const VrtPos = require("mofron-effect-vrtpos");

mf.comp.Loading = class extends ModalFil {
    
    /**
     * initialize loading component
     *
     * @param (component/object) component: child component
     *                           object: component options
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name("Loading");
            this.prmOpt(po);
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
                    style: { "position": "relative" }, baseColor: [253,253,253],
                    size: ["2rem","1rem"],
                    child: new Text({
                               text: "Loading...", style: { "position": "relative" },
                               effect: [new HrzPos("center"), new VrtPos("center")],
                               size: "0.2rem"
                           })
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
            if (true === mf.func.isComp(prm)) {
                prm.effect([new HrzPos('center'), new VrtPos('center')]);
            }
            return this.innerComp("loadComp", prm, mf.Component);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Loading;
/* end of file */
