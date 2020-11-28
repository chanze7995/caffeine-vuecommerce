import { createApp } from 'vue'

import iconSpriteLoadComponent from '../../components/svgSprites/Icon.vue'
const app = createApp({})
app.component('icon', iconSpriteLoadComponent)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../../assets/img/icons', false, /\.svg$/)

requireAll(req)
