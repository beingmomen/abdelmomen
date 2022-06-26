import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBarcode, faHouse, faFile, faEnvelope, faListCheck, faCartShopping, faBuilding, faHeading, faDiagramProject, faHandDots, faBolt, faLocationDot, faAt, faPhone, faMobile, faMessage } from '@fortawesome/free-solid-svg-icons'
// import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


config.autoAddCss = false
library.add(faBarcode, faFile, faTwitter, faHouse, faListCheck, faEnvelope, faCartShopping, faBuilding, faLinkedinIn, faHandDots, faHeading, faDiagramProject, faBolt, faMessage, faLocationDot, faAt, faPhone, faMobile)
Vue.component('font-awesome-icon', FontAwesomeIcon)