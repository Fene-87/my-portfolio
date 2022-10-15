import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

type Props = {}

function ContactMe({}: Props) {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
      window.location.href = `mailto:fenekayas87@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. 
      ${formData.message} (${formData.email})`
    };

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl 
      px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute text-gray-500 tracking-[20px] text-2xl top-24 uppercase'>Contact Me</h3>

        <div className='flex flex-col space-y-7 top-36 absolute'>
            <h4 className='text-3xl font-semibold text-center pt-10'>I have got just what you need.{" "}
              <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>  
            </h4>

            <div className='space-y-7'>
                <div className='flex items-center space-x-5 justify-center'>
                  <PhoneIcon className='h-7 w-7 text-[#F7AB0A]'/>
                  <p className='text-lg'>+254713129863</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                  <EnvelopeIcon className='h-7 w-7 text-[#F7AB0A]'/>
                  <p className='text-lg'>Fenekayas87@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                  <MapPinIcon className='h-7 w-7 text-[#F7AB0A]'/>
                  <p className='text-lg'>Nairobi, Kenya</p>
                </div>

            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type='text' />
                    <input {...register('email')} placeholder='Email' className='contactInput' type='email' />
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type='text' />
                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button className='bg-[#F7AB0A]/90 py-3 px-10 rounded-md text-black font-bold'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe