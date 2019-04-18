import { upcase } from './libs/utils'
import './styles.scss'

const $root = document.getElementById('MOUNT_NODE')
const title = upcase('Awesome Nail!')

$root.innerHTML = `
  <div class="logo"></div>
  <h1>${title}</h1>
`
