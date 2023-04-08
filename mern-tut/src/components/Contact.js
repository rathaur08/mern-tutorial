import React from 'react'

const Contact = () => {
    return (
        <div>
            <div class="container overflow-hidden mt-4">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-2 border bg-light">
                            Phone <br />
                            +91 9216002473
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-2 border bg-light">
                            Email <br />
                            acbd@gmail.com
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-2 border bg-light">
                            Address <br />
                            Delhi India
                        </div>
                    </div>
                </div>
            </div>
            <div className='container w-50 mt-4' style={{ background: "#d8dee1" }}>
                <div className='form-container'>
                    <h1>Get in Touch </h1>
                    <form class="row g-3">
                        <div class="col-md-4">
                            <input type="name" class="form-control" id="name" placeholder='Your Name' />
                        </div>
                        <div class="col-md-4">
                            <input type="email" class="form-control" id="email" placeholder='Your Email' />
                        </div>
                        <div class="col-md-4">
                            <input type="number" class="form-control" id="number" placeholder='Your Phone Number' />
                        </div>
                        <div class="col-md-12 mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
                        </div>
                        <div class="col-md-4">
                            <button type="submit" class="btn btn-primary mb-2">Send Message</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact