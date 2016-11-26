import React, { PropTypes } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import i18n from 'i18n'

const ChangeLangButton = ({lang, onChange}) => (
  <div>
    <SelectField
      floatingLabelText={i18n.t('language')}
      value={lang}
      onChange={(event, index, value) => {
        onChange(value)
      }}
    >
      <MenuItem value='en' primaryText='en' />
      <MenuItem value='ru' primaryText='ru' />
      <MenuItem value='he' primaryText='he' />
    </SelectField>
  </div>
)
ChangeLangButton.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default ChangeLangButton
