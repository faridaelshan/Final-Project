import React from 'react'
import {GrContactInfo} from 'react-icons/gr'
import {BsMailbox} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='contact row gx-0 py-5'>
      <div className="storecol col-4 d-flex justify-content-center">
        <div className='store'>
          <h2>Store information</h2>
          <p className='mt-4'>Nice to meet you! We are a tech-driven online retailer located near Salt Lake City in the shadow of the Wasatch Mountains.</p>
          <div className='d-flex flex-column justify-content-start'>
            <div className='contactinfo'>
              <GrContactInfo style={{"fontSize":"2rem"}}/>
            </div>
            <p className='mt-3'>Leo Bookery
            <br />
            United States
            </p>
          </div>
          <div className='d-flex flex-column justify-content-start'>
              <BsMailbox style={{"fontSize":"2.5rem"}}/>
            <p className='mt-3'>Email us:
            <br />
            demo@demo.com
            </p>
          </div>
        </div>
      </div>
      <div className="col-4 request">
        <h2>Send a request</h2>
        <label htmlFor="subject" className='subject my-2 text-muted'>SUBJECT</label>
        <select className="form-select text-muted" id='subject' aria-label="Default select example">
        <option className='text-muted' selected>Customer service</option>
        <option className='text-muted' value={1}>Webmaster</option>
        </select>
        <label htmlFor="email" className='email text-muted my-2'>EMAIL ADDRESS</label>
        <input type="email" id="email" placeholder='your@email.com' />
        <p className='attachment text-muted my-2'>ATTACHMENT</p>
        <div className='filediv'>
          <input type="text" className='disabled'  disabled />
          <label htmlFor="attachment" className='attachmentlabel text-light bg-danger my-2'>Choose File</label>
          <input className='fileinput' type="file" name="" id="attachment" />
        </div>
        <div className="mb-3 messagediv">
        <label htmlFor="exampleFormControlTextarea1" className="form-label message">MESSAGE</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='How can we help?' rows={3} defaultValue={""} />
      </div>
      </div>
      <div className="col-4 d-flex justify-content-start">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d281161.2853886706!2d-2.1205218771049292!3d56.5956238646277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48869a72956edd17%3A0x6a045b9f1b668b!2s41%20Newmanswalls%20Ave%2C%20Montrose%20DD10%209DD%2C%20Birl%C9%99%C5%9Fmi%C5%9F%20Krall%C4%B1q!5e0!3m2!1saz!2s!4v1656764638285!5m2!1saz!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  )
}

export default Contact