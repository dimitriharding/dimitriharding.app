import sgClient from '@sendgrid/client'
import requireAuth from './_require-auth'

sgClient.setApiKey(process.env.SENDGRID_API_KEY)

export default requireAuth((req, res) => {
  const { email, firstName, lastName } = req.body
  const { verified } = req.query

  const options = {
    method: 'PUT',
    url: '/v3/marketing/contacts',
    body: JSON.stringify({
      list_ids: [process.env.SENDGRID_LIST_ID],
      contacts: [
        {
          email: email,
          first_name: firstName,
          last_name: lastName,
          custom_fields: { e1_T: 'pending' },
        },
      ],
    }),
  }

  const verifyEmailOptions = {
    method: 'PUT',
    url: '/v3/marketing/contacts',
    body: JSON.stringify({
      list_ids: [process.env.SENDGRID_LIST_ID],
      contacts: [
        {
          email: email,
          custom_fields: { e1_T: 'subscribed' },
        },
      ],
    }),
  }

  return sgClient
    .request(verified ? verifyEmailOptions : options)
    .then(() => {
      return res.status(200).json({ status: 'success' })
    })
    .catch((error) => {
      console.log('newsletter error', JSON.stringify(error, null, '\t'))
      return res.status(500).json({ status: 'error' })
    })
})
