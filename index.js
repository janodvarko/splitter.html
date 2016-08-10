/* See license.txt for terms of usage */

const Tabbar = React.createFactory(require('devtools/client/shared/components/tabs/tabbar'));
const SplitBox = React.createFactory(require('devtools/client/shared/components/splitter/split-box'));
const Tabs = React.createFactory(require('devtools/client/shared/components/tabs/tabs').Tabs);
const TabPanel = React.createFactory(require('devtools/client/shared/components/tabs/tabs').TabPanel);

const { div } = React.DOM;

var TabPanelTest = React.createFactory(React.createClass({
  displayName: 'TabPanelTest',

  render: function () {
    return (
      div({
        ref: 'content',
        className: 'tab-panel',
      })
    );
  }
}));

let MainPanel = React.createFactory(React.createClass({
  displayName: 'MainPanel',

  render: function () {
    return (
      div({},
        div({className: 'panel title'},
          '1. Simple example of Main and Side panel'
        )
      )
    );
  }
}));

let SidePanel = React.createFactory(React.createClass({
  displayName: 'SidePanel',

  render: function () {
    return (
      Tabs({},
        TabPanel({title: 'Rules'},
          div({}, 'First panel')
        ),
        TabPanel({title: 'Computed'},
          div({}, 'Second panel')
        )
      )
    );
  }
}));


let splitter = SplitBox({
  initialSize: 350,
  left: MainPanel(),
  right: SidePanel(),
  rightControl: true,
});

ReactDOM.render(splitter, document.getElementById('container1'));

// Second example

let Container2 = React.createFactory(React.createClass({
  render() {
    return (
      div({className: 'splitBoxParent'},
        SplitBox({
          initialSize: 300,
          left: div({className: 'panel title'},
            '2. example showing left and right side panels'
          ),
          right: SplitBox({
            initialSize: 300,
            left: div({className: 'panel'}, 'center (main) panel'),
            right: div({className: 'panel'}, 'right (side) panel'),
            rightControl: true,
          })
        })
      )
    );
  }
}));

ReactDOM.render(Container2(), document.getElementById('container2'));

// Third example

let Container3 = React.createFactory(React.createClass({
  render() {
    return (
      div({className: 'splitBoxParent'},
        SplitBox({
          initialSize: 200,
          left: div({className: 'panel title'},
            '3. example again showing left and right side panels, but the resizing logic is different'
          ),
          right: SplitBox({
            initialSize: 300,
            left: div({className: 'panel'}, 'center panel'),
            right: div({className: 'panel'}, 'right panel'),
            rightControl: false,
          })
        })
      )
    );
  }
}));

ReactDOM.render(Container3(), document.getElementById('container3'));

// Forth example

let Container4 = React.createFactory(React.createClass({
  render() {
    return (
      div({className: 'splitBoxParent'},
        SplitBox({
          initialSize: 100,
          left: div({className: 'panel title'}, '4. example shows bunch of columns'),
          right: SplitBox({
            initialSize: 400,
            left: div({className: 'panel'}, 'second panel (this one is taking the rest of the horizontal space)'),
            rightControl: true,
            right: SplitBox({
              initialSize: 300,
              left: div({className: 'panel'}, 'third panel'),
              rightControl: true,
                right: SplitBox({
                  initialSize: 200,
                  left: div({className: 'panel'}, 'fourth panel'),
                  rightControl: true,
                    right: SplitBox({
                      initialSize: 100,
                      left: div({className: 'panel'}, 'fifth panel'),
                      rightControl: true,
                      right: div({className: 'panel'}, 'sixth panel'),
                    }),
                }),
            }),
          })
        })
      )
    );
  }
}));

ReactDOM.render(Container4(), document.getElementById('container4'));

// Fifth example

let Container5 = React.createFactory(React.createClass({
  render() {
    return (
      div({className: 'splitBoxParent'},
        SplitBox({
          className: 'leftFlexSplitter',
          flexBox: true,
          initialSize: 160,
          minWidth: 100,
          maxWidth: 300,
          left:
            div({
              className: 'panel title',
              style: {backgroundColor: 'rgb(213,233,234)'}},
                '5. example uses flexbox layout. Make the window width less than 600px. Max-width of this panel: 300px, min-width: 100px'
            ),
        }),
        div({
          className: 'centerFlexPanel',
          style: {
            backgroundColor: 'rgb(240,240,240)'}},
          'center panel'
        ),
        SplitBox({
          className: 'rightFlexSplitter',
          flexBox: true,
          initialSize: 160,
          minWidth: 100,
          maxWidth: 300,
          rightControl: true,
          right: div({
            className: 'panel rightFlexPanel',
            style: {backgroundColor: 'rgb(213,195,234)'}},
            'right panel'
          )
        })
      )
    );
  }
}));

ReactDOM.render(Container5(), document.getElementById('container5'));

let Container6 = React.createFactory(React.createClass({
  render() {
    return (
      div({className: 'splitBoxParent'},
        SplitBox({
          vert: false,
          initialSize: 300,
          left: div({className: 'panel title'},
            '6. example showing horizontal splitter'
          ),
          right: Container5()
        })
      )
    );
  }
}));


//ReactDOM.render(Container5(), document.getElementById('container6'));
