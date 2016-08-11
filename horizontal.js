/* See license.txt for terms of usage */

const Tabbar = React.createFactory(require('devtools/client/shared/components/tabs/tabbar'));
const SplitBox = React.createFactory(require('devtools/client/shared/components/splitter/split-box'));
const Tabs = React.createFactory(require('devtools/client/shared/components/tabs/tabs').Tabs);
const TabPanel = React.createFactory(require('devtools/client/shared/components/tabs/tabs').TabPanel);

const { div } = React.DOM;


// 1 example

let Container1 = React.createFactory(React.createClass({
  render() {
    return (
      div({className: 'splitBoxParent'},
        SplitBox({
          vert: false,
          rightControl: true,
          initialSize: 150,
          left: div({className: 'panel title'},
            '1. example showing top and bottom panels'
          ),
          right: div({className: 'panel'},
            'Bottom panel (e.g. DevTools Toolbox)'
          ),
        })
      )
    );
  }
}));

ReactDOM.render(Container1(), document.getElementById('container1'));

// 2 example

let Container2 = React.createFactory(React.createClass({
  render() {
    return (
      div({className: 'splitBoxParent'},
        SplitBox({
          vert: false,
          initialSize: 100,
          left: div({className: 'panel title'},
            '2. example using more horizontal splitters'
          ),
          right: SplitBox({
            vert: false,
            initialSize: 200,
            left: div({className: 'panel'}, 'panel 1'),
            right: div({className: 'panel'}, 'panel 2'),
            rightControl: true,
          })
        })
      )
    );
  }
}));

ReactDOM.render(Container2(), document.getElementById('container2'));

// 3. example

let Container3 = React.createFactory(React.createClass({
  render() {
    return (
      div({className: 'splitBoxParent'},
        SplitBox({
          vert: false,
          initialSize: 200,
          left: div({className: 'panel title'},
            '3. example using more horizontal splitters, but different resizing logic'
          ),
          right: SplitBox({
            vert: false,
            initialSize: 200,
            left: div({className: 'panel'}, 'panel 1'),
            right: div({className: 'panel'}, 'panel 2'),
            rightControl: false,
          })
        })
      )
    );
  }
}));

ReactDOM.render(Container3(), document.getElementById('container3'));

// 4. example

let Container4 = React.createFactory(React.createClass({
  render() {
    return (
      div({className: 'splitBoxParent'},
        SplitBox({
          vert: false,
          initialSize: 150,
          rightControl: true,
          left: div({className: 'panel title'},
            '4. mixing horizontal and vertical splitters'
          ),
          right: SplitBox({
            initialSize: 100,
            rightControl: true,
            left: div({className: 'panel'}, 'Main Panel'),
            right: div({className: 'panel'}, 'SideBar'),
          })
        })
      )
    );
  }
}));

ReactDOM.render(Container4(), document.getElementById('container4'));
