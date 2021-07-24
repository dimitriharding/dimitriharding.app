import sgClient from '@sendgrid/client'
import sgMail from '@sendgrid/mail'
import requireAuth from './_require-auth'

sgClient.setApiKey(process.env.SENDGRID_API_KEY)
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const env = process.env.NODE_ENV || 'development'

const sendConfirmationEmail = (userInfo) => {
  return new Promise((resolve, reject) => {
    const message = {
      to: userInfo.to,
      from: 'dvhharding@gmail.com',
      templateId: 'd-ec3f3f84edf640b5853558facc086e7e',
      dynamic_template_data: {
        verification_link: `${
          env === 'production'
            ? 'https://dimitriharding.com'
            : 'http://localhost:3000'
        }/confirm-email?email=${userInfo.to}`,
        name: userInfo.name,
      },
    }
    return sgMail
      .send(message)
      .then((response) => {
        return resolve(response)
      })
      .catch((error) => {
        return reject(error)
      })
  })
}

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
          email: verified,
          custom_fields: { e1_T: 'subscribed' },
        },
      ],
    }),
  }

  return sgClient
    .request(verified ? verifyEmailOptions : options)
    .then(async () => {
      if (verified) {
        return res.status(200).json({ status: 'success' })
      } else {
        try {
          const response = await sendConfirmationEmail({
            to: email,
            name: firstName,
          })
          return res.status(200).json({ status: 'success', response })
        } catch (error) {
          return res.status(500).json({ status: 'error', error })
        }
      }
    })
    .catch((error) => {
      console.log('newsletter error', JSON.stringify(error, null, '\t'))
      return res.status(500).json({ status: 'error' })
    })
})
