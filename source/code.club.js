const CodeClub = {}

export default CodeClub;

import $ from 'jquery'
// import Handlebars from 'handlebars'
import * as shell from './code.club.shell'
(() => {
    CodeClub.init = ($wrapper) => {
        shell.init($wrapper)
    }
})();

$(() => {
    CodeClub.init($('#code-club'))
})

