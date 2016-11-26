import { connect } from 'react-redux'
import { changeLangAction } from '../actions'
import ChangeLangButton from '../components/ChangeLangButton'

const mapStateToProps = (state) => {
  return {
    lang: state.langReducer.lang
  }
}

const mapDispatchToProps = ({
  onChange: changeLangAction
})

const ChangeLangContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeLangButton)

export default ChangeLangContainer
