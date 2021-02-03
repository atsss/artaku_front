export const GaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

// assume system can't get the ga id
export const existsGaId = GaId !== ''

// messure pv
export const pageview = (path) => {
  window.gtag('config', GaId, {
    page_path: path,
  })
}

// send event
export const event = ({ action, category, label, value = '' }) => {
  if (!existsGaId) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  })
}
