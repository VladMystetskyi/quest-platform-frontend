import React, { PropTypes } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import i18n from 'i18n'

const ChangeLangButton = ({lang, onChange, className}) => (
  <div className={className}>
    <SelectField
      style={{width: '50px'}}
      value={lang}
      onChange={(event, index, value) => {
        onChange(value)
      }}
    >
      <MenuItem value='en' primaryText={i18n.t('en')} />
      <MenuItem value='ru' primaryText={i18n.t('ru')} />
      <MenuItem value='he' primaryText={i18n.t('he')} />
    </SelectField>
  </div>
)
ChangeLangButton.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default ChangeLangButton
