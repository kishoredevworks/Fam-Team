import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, MessageSquare, Send } from 'lucide-react'

export default function PremiumContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const validateForm = () => {
    let formErrors = {}
    if (!formData.name.trim()) formErrors.name = "Name is required"
    if (!formData.email.trim()) {
      formErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid"
    }
    if (!formData.message.trim()) formErrors.message = "Message is required"
    return formErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true)
      setErrors({})
      try {
        // Simulating an API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } catch (error) {
        setSubmitStatus('error')
      } finally {
        setIsSubmitting(false)
      }
    } else {
      setErrors(formErrors)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg pl-10 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300"
                  placeholder="Your Name"
                />
                <User className="absolute left-3 top-2.5 text-white opacity-70" size={18} />
              </div>
              {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg pl-10 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300"
                  placeholder="your@email.com"
                />
                <Mail className="absolute left-3 top-2.5 text-white opacity-70" size={18} />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg pl-10 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300"
                  placeholder="Your message here..."
                ></textarea>
                <MessageSquare className="absolute left-3 top-2.5 text-white opacity-70" size={18} />
              </div>
              {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message}</p>}
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full mt-6 px-4 py-2 bg-white text-purple-700 rounded-lg font-semibold flex items-center justify-center transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send className="ml-2" size={18} />
          </motion.button>
          {submitStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-sm text-green-300 text-center"
            >
              Message sent successfully!
            </motion.p>
          )}
          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-sm text-red-300 text-center"
            >
              An error occurred. Please try again.
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  )
}