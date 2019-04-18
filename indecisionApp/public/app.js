'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('Visible App is running');

var visibilty = function (_React$Component) {
    _inherits(visibilty, _React$Component);

    function visibilty(props) {
        _classCallCheck(this, visibilty);

        var _this = _possibleConstructorReturn(this, (visibilty.__proto__ || Object.getPrototypeOf(visibilty)).call(this, props));

        _this.handleToggle = _this.handleToggle.bind(_this);
        _this.state = {
            show: false
        };
        return _this;
    }

    return visibilty;
}(React.Component);

// let visbilty = false
// const toggleVisibilty = () => {
//     //Takes the current visibilty value and flip it from true to false(When clicked)
//     visbilty = !visbilty
//     render()
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>visbilty toggle</h1>
//             <button onClick = {toggleVisibilty}>
//             {visbilty ? 'HIDE ME': 'SHOW ME'}
//             </button>
//             {visbilty && (
//                 <div>
//                     <p>
//                     these are some detailsç
//                     </p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(jsx, document.getElementById('app'))
// }


// render()
