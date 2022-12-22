import './artiste.vue.css.proxy.js';

const defaultExport = {
  name: 'artiste',
  methods :{
    selectArtist(artist){
      this.selectedArtistId = artist.id

      this.selectedArtistImg = artist.src
    }
  },
  data(){
    return{
      selectedArtistId: 0,
      selectedArtistImg: './img/angele.png',
      artists : [
          {
              id: 0,
              name: 'angèle',
              src: './img/angele.png',
              date: '15 DECEMBRE 2020',
              loca: 'LYON, PALAIS DES SPORTS'
          },
          {
              name: 'damso',
              src: './img/damso.jpg',
              id: 1,
              date: '16 DECEMBRE 2020',
              loca: 'PARIS, PALAIS DES SPORTS'
          },
          {
              name: 'laylow',
              src: './img/laylow.jpg',
              id: 2,
              date: '17 DECEMBRE 2020',
              loca: 'MACON, PALAIS DES SPORTS'
          },
          {
              name: 'rihanna',
              src: './img/rihanna.jpg',
              id: 3,
              date: '18 DECEMBRE 2020',
              loca: 'LENS, PALAIS DES SPORTS'
          },
          {
              name: 'pnl',
              src: './img/pnl.jpg',
              id: 4,
              date: '19 DECEMBRE 2020',
              loca: 'ANNECY, PALAIS DES SPORTS'
          },
      ]
    }
  }
}

import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "contArtiste" }
const _hoisted_2 = { class: "nomArtiste" }
const _hoisted_3 = ["onClick"]
const _hoisted_4 = { class: "imageArtiste" }
const _hoisted_5 = ["src"]
const _hoisted_6 = { class: "artisteBas" }
const _hoisted_7 = { class: "artisteBasGauche" }
const _hoisted_8 = /*#__PURE__*/_createElementVNode("div", { class: "artisteBasDroite" }, [
  /*#__PURE__*/_createElementVNode("a", null, "RESERVER")
], -1)

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.artists, (artist) => {
        return (_openBlock(), _createElementBlock("a", {
          class: _normalizeClass({ active: artist.id == _ctx.selectedArtistId }),
          onClick: $event => (_ctx.selectArtist(artist))
        }, _toDisplayString(artist.name), 11, _hoisted_3))
      }), 256))
    ]),
    _createElementVNode("div", _hoisted_4, [
      _createElementVNode("img", {
        class: "imageAngele",
        src: _ctx.selectedArtistImg,
        alt: "Angele la chanteuse"
      }, null, 8, _hoisted_5)
    ]),
    _createElementVNode("div", _hoisted_6, [
      _createElementVNode("div", _hoisted_7, [
        _createElementVNode("h4", null, _toDisplayString(_ctx.artists.find(artist => artist.id == _ctx.selectedArtistId).date), 1),
        _createElementVNode("p", null, _toDisplayString(_ctx.artists.find(artist => artist.id == _ctx.selectedArtistId).loca), 1)
      ]),
      _hoisted_8
    ])
  ]))
};

defaultExport.render = render;

export default defaultExport;