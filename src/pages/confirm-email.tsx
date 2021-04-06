import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Result from '../components/Result'
import { Button } from '@chakra-ui/react'
import { verifyEmail } from '../util/api'
import PageLoader from '../components/Common/PageLoader'

const ConfirmEmail = () => {
  const router = useRouter()
  const { query } = router

  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (query.email) {
      verifyEmail(query.email)
        .then(() => {
          setStatus('success')
        })
        .catch(() => {
          setStatus('error')
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [query])

  if (isLoading) return <PageLoader />

  return (
    <>
      {status && status === 'success' ? (
        <Result
          status="success"
          title="Successfully Verified Your Email!"
          subTitle="We'll get you updated with the latest news and offerings."
          extra={[
            <Button
              onClick={() => router.push('/')}
              key="button-one"
              colorScheme="primary"
              variant="glass"
            >
              Back to home
            </Button>,
          ]}
        />
      ) : (
        <Result
          status="error"
          title="Email Verification Failed"
          subTitle="Please check and modify the following information before resubmitting."
          extra={[
            <Button
              onClick={() => router.push('/')}
              colorScheme="blackAlpha"
              variant="solid"
              key="back-homepage"
            >
              Go to homepage
            </Button>,
            <Button key="resend-button" variant="outline">
              Resend Verification
            </Button>,
          ]}
        />
      )}
    </>
  )
}

export default ConfirmEmail
