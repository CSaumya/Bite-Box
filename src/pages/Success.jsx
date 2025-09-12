import React, { useEffect, useState } from 'react'
import { PuffLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const [loading, setLoading] = useState(true)
  const [showMessage, setShowMessage] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoading(false)
      setShowMessage(true)
    }, 3000)

    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 5000)

    const redirectTimer = setTimeout(() => {
      navigate('/')
    }, 6000)

    return () => {
      clearTimeout(loaderTimer)
      clearTimeout(fadeTimer)
      clearTimeout(redirectTimer)
    }
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      {loading ? (
        <PuffLoader color="#ffaa00" />
      ) : (
        showMessage && (
          <div
            className={`transition-opacity duration-1000 ${
              fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#ff7b00]">
              Order Successful!
            </h2>
            <p className="text-[#ffaa00] font-semibold">
              Your order has been placed successfully. 🎉
            </p>
          </div>
        )
      )}
    </div>
  )
}

export default Success
