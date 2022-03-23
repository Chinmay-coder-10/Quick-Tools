import ReactDom from 'react-dom'
import App from './components/App.js'
import '../src/index.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDom.render(
    <App />,
    document.getElementById('root')
);

