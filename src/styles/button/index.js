import { colors } from '../common/colors'
import { createStyleFactory } from '../../util'
const buttonStyles = [{
    margin: '3px' // this should be tokenized
},
({ secondary }) => ({
    backgroundColor: secondary ? colors.br_moonstone : colors.br_blue,
    color: secondary ? 'black' : colors.br_offwhite // black should be tokenized
})]

export default createStyleFactory(buttonStyles)
