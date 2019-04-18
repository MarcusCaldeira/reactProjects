'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_React$Component) {
    _inherits(Toggle, _React$Component);

    function Toggle(props) {
        _classCallCheck(this, Toggle);

        var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

        _this.handleToggle = _this.handleToggle.bind(_this);
        _this.state = {
            visbilty: false
        };
        return _this;
    }

    _createClass(Toggle, [{
        key: 'handleToggle',
        value: function handleToggle() {
            this.setState(function (oldState) {
                return {
                    visbilty: true
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'visbilty toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleToggle },
                    this.state.visbilty ? 'HIDE ME' : 'SHOW ME'
                ),
                this.state.visbilty && React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'these are some details'
                    )
                )
            );
        }
    }]);

    return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(Toggle, null), document.getElementById('app'));

// let visbilty = false
// const toggleVisibilty = () => {
//     //Takes the current visibilty value and flip it from true to false(When clicked)
//     visbilty = !visbilty
//     render()
// }

// const render = () => {
// const jsx = (
//     <div>
//         <h1>visbilty toggle</h1>
//         <button onClick = {toggleVisibilty}>
//         {visbilty ? 'HIDE ME': 'SHOW ME'}
//         </button>
//         {visbilty && (
//             <div>
//                 <p>
//                 these are some detailsç
//                 </p>
//             </div>
//         )}
//     </div>
// )
//     ReactDOM.render(jsx, document.getElementById('app'))
// }


// render()
