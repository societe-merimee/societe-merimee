import '@fontsource/dm-sans'
import '@fontsource/dm-serif-display'
import '@fontsource/dm-serif-display/400-italic.css'
import './style.css'

import { defineDetailsCustomElement } from '@components/02-moleculs/details/details'
import { defineTabsCustomElement } from '@components/02-moleculs/tabs/tabs'
import { defineSortableTableCustomElement } from '@components/03-organisms/table/sortableTable'
import { defineSausageLinksCustomElement } from '@components/03-organisms/header/sausageLinks'

defineDetailsCustomElement()
defineTabsCustomElement()
defineSortableTableCustomElement()
defineSausageLinksCustomElement()
