import styled from 'styled-components'
import { flexbox, space, layout, color, } from 'styled-system'

const Box = styled('div')(
  {
    boxSizing: 'border-box',
  },
  flexbox,
  space,
  layout,
  color,
)

export default Box