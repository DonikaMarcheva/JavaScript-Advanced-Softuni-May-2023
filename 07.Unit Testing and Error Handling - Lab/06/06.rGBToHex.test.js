const {rgbToHexColor}=require('./06.rGBToHex');
const {expect} = require('chai');

describe('return color',()=>{

    it('converts black',()=>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    })

    it('converts white',()=>{
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    })

    it ('convert to ble #234465',()=>{
        expect(rgbToHexColor(35, 68, 101)).to.equal('#234465')
    })

    it ('return undefined for missinng params',()=>{
        expect(rgbToHexColor(0,0, )).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    })

    it ('return undefined for out of lower bound',()=>{
        expect(rgbToHexColor(-1,0,0 )).to.be.undefined;
        expect(rgbToHexColor(0,-1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,-1)).to.be.undefined;
    })

    it ('return undefined for out of upper bound',()=>{
        expect(rgbToHexColor(256,0,0 )).to.be.undefined;
        expect(rgbToHexColor(0,256,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,256)).to.be.undefined;
    })

    it ('return undefined for floating number',()=>{
        expect(rgbToHexColor(1.1,0,0 )).to.be.undefined;
        expect(rgbToHexColor(0,1.1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,1.1)).to.be.undefined;
    })
})

