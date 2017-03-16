var React = require('react');

var Example = React.createClass({
    render: function () {
        return (
            <div className="app-wrapper">
                <div className="drawer-manager">
                    <span className="pane pane-one"></span>
                    <span className="pane pane-two"></span>
                    <span className="pane pane-three"></span>
                </div>
                <div className="pane pane-list pane-one">
                </div>
                <div className="pane pane-intro pane-two">
                </div>
            </div>
        )
    }
});

module.exports = Example;