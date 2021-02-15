import React from 'react'

import { ServicesWrap, ServicesTitle, ServicesTitle2, ServicesCard, CardTitle, CardTitle2, CardInfo, CardWrap } from './ServicesElements'

const Services = () => (
  <ServicesWrap>
    <ServicesTitle>Our Services</ServicesTitle>
    <ServicesTitle2>*All pricing based on quote</ServicesTitle2>
    <CardWrap>
      <ServicesCard>
        <CardTitle>Residential Cleaning</CardTitle>
        <CardTitle2>Set a regular schedule: weekly, bi-weekly, or monthly</CardTitle2>
        <CardInfo>Vacuum all carpets</CardInfo>
        <CardInfo>Mopping of all hard floors (wood/tile)</CardInfo>
        <CardInfo>Dusting all furniture and fixtures</CardInfo>
        <CardInfo>Clean and sanitize bathrooms</CardInfo>
        <CardInfo>Wipe down of all appliances</CardInfo>
        <CardInfo>General kitchen cleaning</CardInfo>
      </ServicesCard>
    </CardWrap>
    <CardWrap>
      <ServicesCard>
        <CardTitle>Business Cleaning</CardTitle>
        <CardTitle2>Set a regular schedule: weekly, bi-weekly, or monthly</CardTitle2>
        <CardInfo>Vacuum all carpets</CardInfo>
        <CardInfo>Mopping of all hard floors (wood/tile)</CardInfo>
        <CardInfo>Dusting all furniture and fixtures</CardInfo>
        <CardInfo>Clean and sanitize bathrooms</CardInfo>
        <CardInfo>Wipe down of all appliances</CardInfo>
        <CardInfo>General kitchen cleaning</CardInfo>
      </ServicesCard>
    </CardWrap>
    <CardWrap>
      <ServicesCard>
        <CardTitle>One Time Cleaning</CardTitle>
        <CardTitle2>Schedule a one time cleaning</CardTitle2>
        <CardInfo>Vacuum all carpets</CardInfo>
        <CardInfo>Mopping of all hard floors (wood/tile)</CardInfo>
        <CardInfo>Dusting all furniture and fixtures</CardInfo>
        <CardInfo>Clean and sanitize bathrooms</CardInfo>
        <CardInfo>Wipe down of all appliances</CardInfo>
        <CardInfo>General kitchen cleaning</CardInfo>
      </ServicesCard>
    </CardWrap>
    <CardWrap>
      <ServicesCard>
        <CardTitle>Post Construction Cleaning</CardTitle>
        <CardTitle2>Messy after Construction? Give us a Call</CardTitle2>
        <CardInfo>Vacuum all carpets</CardInfo>
        <CardInfo>Mopping of all hard floors (wood/tile)</CardInfo>
        <CardInfo>Dusting all furniture and fixtures</CardInfo>
        <CardInfo>Wipe down Walls</CardInfo>
      </ServicesCard>
    </CardWrap>
  </ServicesWrap>
)

export default Services;