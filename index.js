console.log('linked..')
const root = ReactDOM.createRoot(document.querySelector('#root'))
const element = React.createElement('div', {className: 'wrapper'},
  [
    React.createElement('div', {className: 'parent'},
      [
        React.createElement('h1', {className: 'parent-title'}, 'I\'m parent.'),
        React.createElement('p', {}, 'Barir Korta')
      ]
    )
  ],
  [
    React.createElement('div', {className: 'parent-two'},
      [
        React.createElement('h1', {className: 'parent-title'}, 'I\'m parent two.'),
        React.createElement('p', {}, 'Barir Second Korta')
      ]
    )
  ]
)

console.log(element)
root.render(element)
