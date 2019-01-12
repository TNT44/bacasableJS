//default constructor for Preset 'class'
function Preset(params) {
    var properties = $.extend({
        //these are the defaults
        id: null,
        name: null,
        inItems: [],
        outItems: [],
    }, params);

    console.log('Preset instantiated');
    this.id = properties.id;
    this.name = properties.name;
    this.inItems = properties.inItems;
    this.outItems = properties.outItems;
}

presetNoParams = new Preset();
presetEmptyParams = new Preset({});
presetSomeParams = new Preset({id: 666, inItems:['item_1', 'item_2']});
presetAllParams = new Preset({id: 666, name: 'SOpreset', inItems: ['item_1', 'item_2'], outItems: ['item_3', 'item_4']});
