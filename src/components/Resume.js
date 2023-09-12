import React from 'react'

function Resume() {
  return (
      <>
          {/* Resume section starts. */}
            <section id='resume' className='py-5'>
                <div className='text-center'>
                    <div className='d-flex justify-content-center resume-head'>
                        <img src="\assets\orangeDot.png" alt="" />
                        <p>RESUME</p>
                    </div>
                    <div>
                        <h2> Education <span className='home-span'>&</span> Experience</h2>
                    </div>
                </div>
                <div className="container-fluid py-5">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className='d-flex justify-content-between align-items-center resume-exp'>
                                <div>
                                    <h6>Worked as a FRONT-END Developer</h6>
                                    <p>Maker's mind soft solutions private limited,<br />
                                    Visakhapatnam</p>
                                </div>
                                <div>
                                    <h6 className='exp-years'>2021 - 2023</h6>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center resume-exp'>
                                <div>
                                    <h6>Bachelor Degree of Science</h6>
                                    <p>Aditya Degree College, <br /> Kakinada.</p>
                                </div>
                                <div>
                                    <h6 className='exp-years'> 2014 - 2017</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='d-flex justify-content-between align-items-center resume-exp'>
                                <div>
                                    <h6>Secondary Education.</h6>
                                    <p>Pragati Vidhyalaya Junior College, <br /> Samalkot.</p>
                                </div>
                                <div>
                                    <h6 className='exp-years'>2012 - 2014</h6>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center resume-exp'>
                                <div>
                                    <h6>Primary School</h6>
                                    <p>ZPHS High School, <br /> Mallam</p>
                                </div>
                                <div>
                                    <h6 className='exp-years'> 2012</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        {/* Resume section ends. */}
      </>
  )
}

export default Resume