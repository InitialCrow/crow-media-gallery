'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./CrowMediaGallery.css');

var _crowLightboxReader = require('crow-lightbox-reader');

var _crowLightboxReader2 = _interopRequireDefault(_crowLightboxReader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CrowMediaGallery = function (_Component) {
  _inherits(CrowMediaGallery, _Component);

  function CrowMediaGallery(props) {
    _classCallCheck(this, CrowMediaGallery);

    //this.state.poolItems = props.items || [] // this is all items audio image or video pool
    var _this = _possibleConstructorReturn(this, (CrowMediaGallery.__proto__ || Object.getPrototypeOf(CrowMediaGallery)).call(this, props));

    _this.onSelect = props.onSelect || false; // this is param for custom user select on item function
    _this.onCustomClick = props.onCustomClick || false; // this is param for custom user click on item function
    _this.itemIndexClicked = null; // by default itemCliked is null when we click on item we put goo index to show in lightbox

    // pass object gallerySettings to change crow-media-gallery configuration
    _this.gallerySettings = props.gallerySettings || {};
    _this.showSelect = _this.gallerySettings.showSelect || true; // show select function and select marker on item
    _this.debug = _this.gallerySettings.debug || false; // enable debug mode to show console msg

    // pass object lightboxSettings to change crow-lightbox-reader configuration
    _this.lightboxSettings = props.lightboxSettings || {};

    //construct props
    _this.nodes = {
      thumb: []
    };
    _this.state = {
      selectItem: false,
      showLightBox: false,
      showGallery: true,
      poolItems: props.items || [] // this is all items audio image or video pool
    };
    return _this;
  }

  _createClass(CrowMediaGallery, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.state.poolItems != props.items) {
        this.setState({ poolItems: props.items });
      }
    }
  }, {
    key: 'console',
    value: function (_console) {
      function console() {
        return _console.apply(this, arguments);
      }

      console.toString = function () {
        return _console.toString();
      };

      return console;
    }(function () {
      var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      if (this.debug !== false) {
        console.log(msg);
      }
    })
  }, {
    key: 'selectItem',
    value: function selectItem() {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      // we change isSelected on item props to select item
      if (this.onSelect !== false) {
        this.onSelect(item); // return item for custom onSelect function
        return;
      }
      if (item.isSelected !== true) {

        item.isSelected = true;
        this.setState({ selectItem: true });
      } else {
        item.isSelected = false;
        this.setState({ selectItem: false });
      }
    }
  }, {
    key: 'renderSlelectBtn',
    value: function renderSlelectBtn() {
      var _this2 = this;

      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      // show select button on item
      if (this.showSelect !== false && item.isSelected !== true) {
        return _react2.default.createElement(
          'div',
          { onClick: function onClick() {
              _this2.selectItem(item);
            }, className: 'crow-gallery-check-btn' },
          _react2.default.createElement(
            'span',
            { className: 'check-symbol' },
            '\u2713'
          )
        );
      } else if (item.isSelected !== false) {
        return _react2.default.createElement(
          'div',
          { onClick: function onClick() {
              _this2.selectItem(item);
            }, className: 'crow-gallery-select-btn' },
          _react2.default.createElement(
            'span',
            { className: 'check-symbol' },
            '\u2713'
          )
        );
      } else if (item == "") {
        this.console("Bug on CrowMediaGallery => renderSlelectBtn func || you need to pass not empty items into items props on crow-media-gallery");
        return;
      }
    }
  }, {
    key: 'renderPoolItemsThumb',
    value: function renderPoolItemsThumb() {
      var _this3 = this;

      // render items
      if (this.state.poolItems != "") {
        var poolItems = [];
        this.state.poolItems.map(function (item, i) {
          if (_this3.renderVideoItemThumb(item, i) !== undefined) {

            poolItems.push(_this3.renderVideoItemThumb(item, i));
          }
          if (_this3.renderImageItemThumb(item, i) !== undefined) {

            poolItems.push(_this3.renderImageItemThumb(item, i));
          }
          if (_this3.renderAudioItemThumb(item, i) !== undefined) {

            poolItems.push(_this3.renderAudioItemThumb(item, i));
          }
        });
        return poolItems;
      } else {
        this.console("Bug on CrowMediaGallery => renderPoolItemsThumb func || you need to pass not empty items into items props on crow-media-gallery");
        return;
      }
    }
  }, {
    key: 'showLigthBox',
    value: function showLigthBox() {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var i = arguments[1];

      if (this.onCustomClick !== false) {
        this.onCustomClick(item, i);
        return;
      }
      this.itemIndexClicked = i;
      this.setState({ showLightBox: true, showGallery: false });
    }
  }, {
    key: 'renderVideoItemThumb',
    value: function renderVideoItemThumb() {
      var _this4 = this;

      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var i = arguments[1];
      // render video item for type "video"

      if (item.type === "video") {
        return _react2.default.createElement(
          'li',
          { ref: function ref(li) {
              _this4.nodes.thumb.push(li);
            }, key: i.toString(), className: 'pool-item' },
          this.renderSlelectBtn(item),
          _react2.default.createElement('video', { onClick: function onClick() {
              _this4.showLigthBox(item, i);
            }, src: item.src, width: item.thumbWidth, height: item.thumbHeight, onPlay: function onPlay(evt) {
              evt.preventDefault();
            } })
        );
      } else if (item.type == "" || item.type == undefined) {
        this.console("Bug on CrowMediaGallery => renderVideoItemThumb func || you need to write type ('video', 'image', 'song') property in items pool ");
        return;
      }
    }
  }, {
    key: 'renderImageItemThumb',
    value: function renderImageItemThumb() {
      var _this5 = this;

      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var i = arguments[1];
      // render image item for type "image"
      if (item.type === "image") {
        return _react2.default.createElement(
          'li',
          { ref: function ref(li) {
              _this5.nodes.thumb.push(li);
            }, key: i.toString(), className: 'pool-item' },
          this.renderSlelectBtn(item),
          _react2.default.createElement('img', { onClick: function onClick() {
              _this5.showLigthBox(item, i);
            }, src: item.src, width: item.thumbWidth, height: item.thumbHeight, alt: item.alt })
        );
      }
      if (item.type == "" || item.type == undefined) {
        this.console("Bug on CrowMediaGallery => renderImageItemThumb func || you need to write type ('video', 'image', 'song') property in items pool ");
        return;
      }
    }
  }, {
    key: 'renderAudioItemThumb',
    value: function renderAudioItemThumb() {
      var _this6 = this;

      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var i = arguments[1];
      // render audio item for type "audio"
      if (item.type === "audio") {
        return _react2.default.createElement(
          'li',
          { ref: function ref(li) {
              _this6.nodes.thumb.push(li);
            }, key: i.toString(), className: 'pool-item' },
          this.renderSlelectBtn(item),
          _react2.default.createElement('img', { src: item.thumbSrc, width: item.thumbWidth, height: item.thumbHeight, alt: 'thumbnail of audio content', onClick: function onClick() {
              _this6.showLigthBox(item, i);
            } })
        );
      } else if (item.type == "" || item.type == undefined) {
        this.console("Bug on CrowMediaGallery => renderAudioItemThumb func || you need to write type ('video', 'image', 'song') property in items pool ");
        return;
      }
    }
  }, {
    key: 'renderPoolListThumb',
    value: function renderPoolListThumb() {
      // render pool list 
      if (this.state.showGallery !== false) {
        return _react2.default.createElement(
          'ul',
          { key: 'r1', className: 'crow-media-gallery-pool-list' },
          this.renderPoolItemsThumb()
        );
      }
    }
  }, {
    key: 'renderLightBoxReader',
    value: function renderLightBoxReader() {
      var _this7 = this;

      // render lightBox
      if (this.state.showLightBox !== false) {
        this.lightboxSettings.showLightBox = this.state.showLightBox;
        return _react2.default.createElement(_crowLightboxReader2.default, { closeCallBack: function closeCallBack() {
            _this7.setState({ showLightBox: false, showGallery: true });
          }, isRead: this.itemIndexClicked, items: this.state.poolItems, settings: this.lightboxSettings });
      }
    }
  }, {
    key: 'showRenderer',
    value: function showRenderer() {
      // render all render
      var render = [];
      render.push(this.renderPoolListThumb());
      if (this.state.showGallery !== false) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'crow-media-gallery' },
            render
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          null,
          this.renderLightBoxReader()
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.showRenderer();
    }
  }]);

  return CrowMediaGallery;
}(_react.Component);

exports.default = CrowMediaGallery;
