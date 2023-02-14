import React, { useState } from 'react'
import Navbar from './Navbar'
import Car from './assets/Model 3.jpeg'
import './Order.css'
import { Button } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import data from './data.json';


function Order() {

  const [selectedTab, setSelectedTab] = useState('PURCHASE');
  const [selectedOption, setSelectedOption] = useState('MODEL 3');
  const [isActive, setIsActive] = useState(1);
  const [wheel, setWheel] = useState(1);
  const [interior, setInterior] = useState(1);

  const handleInteriorOption = (interior) => () => {
    setInterior(interior);
  }

  const handleWheelOption = (wheel) => () => {
    setWheel(wheel)
  }

  const handleClick = (active) => () => {
    setIsActive(active)
  }


  const handleOptionClick = (option) => () => {
    setSelectedOption(option)
  }


  const handleTablick = (tab) => () => {
    setSelectedTab(tab)
  }


  return (
    <div className='order'>
      {/* Navbar */}
      <div className='order--container'>
        <div className='order--image'>
          <img src={Car} />
        </div>
        <div className='order--info'>
          <h1>Model 3</h1>
          <p>Est. Delivery: Feb - March 2023</p>
          <div className='order--priceSavings'>
            <button onClick={handleTablick('PURCHASE')} className={`tab ${selectedTab === "PURCHASE" ? 'tab-active' : ''}`} >Purchase Price</button>
            <button onClick={handleTablick('SAVINGS')} className={`tab ${selectedTab === "SAVINGS" ? 'tab-active' : ''}`} >Potential Savings</button>
          </div>
          <div className='order--rangeSpeed'>
              <h2>{selectedOption === "MODEL 3" ? data.prices[0].modelRange: data.prices[1].modelRange}</h2>
              <h2>{selectedOption === "MODEL 3" ? data.prices[0].modelTopSpeed : data.prices[1].modelTopSpeed}</h2>
              <h2>{selectedOption === "MODEL 3" ? data.prices[0].modelAcceleration : data.prices[1].modelAcceleration}</h2>
              <p>Range (EPA est.)</p>
              <p>Top Speed</p>
              <p>0-60 mph</p>
          </div>
          <div className='order--option'>
            <p>Rear-Wheel Drive</p>
            <div onClick={handleOptionClick('MODEL 3')} className={`order--price ${selectedOption === "MODEL 3" ? 'active--option' : ''}`}>
              <p className='model--name'>{data.prices[0].modelName}</p>
              <p className='model--price'>{selectedTab === "PURCHASE" ? data.prices[0].modelPrice : data.prices[0].modelSavings}</p>
            </div>
          </div>
          <div className='order--option'>
            <p>Dual Motor All-Wheel Drive</p>
            <div onClick={handleOptionClick('MODEL 3 PERFORMANCE')} className= {`order--price ${selectedOption === "MODEL 3 PERFORMANCE" ? 'active--option' : ''}`}>
              <p className='model--name'>{data.prices[1].modelName}</p>
              <p className='model--price'>{selectedTab === "PURCHASE" ? data.prices[1].modelPrice : data.prices[1].modelSavings}</p>
            </div>
            <div className='order--price disabled'>
              <p className='model--name'>Model 3 Long Range</p>
              <p className='model--price'></p>
            </div>
          </div>
          <div className='order--otherInfo'>
            <p>Available in 2023</p>
            <p>All prices are shown without potential incentives or gas savings of $11,700.</p>
          </div>
          <div className='order--paint'>
            <h2>Paint</h2>
            <div className='order--paintContainer'>
              <div className='order--paint1'>
                <img onClick={handleClick(1)} className={isActive == 1 ? 'active' : ''} src='https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_White.png' />
              </div>
              <div className='order--paint2'>
                <img onClick={handleClick(2)} className={isActive == 2 ? 'active' : ''} src='https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_MidnightSilver.png' />
              </div>
              <div className='order--paint3'>
                <img onClick={handleClick(3)} className={isActive == 3 ? 'active' : ''} src='https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Blue.png' />
              </div>
              <div className='order--paint4'>
                <img onClick={handleClick(4)} className={isActive == 4 ? 'active' : ''} src='https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Black.png' />
              </div>
              <div className='order--paint5'>
                <img onClick={handleClick(5)} className={isActive == 5 ? 'active' : ''} src='https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Red.png' />
              </div>
            </div>
          </div>
          <div className='order--wheels'>
              <h2>Wheels</h2>  
              <div className='order--wheelContainer'>
                <div className='order--wheel1'>
                  <img onClick={handleWheelOption(1)} className={wheel == 1 ? 'active' : ''} src='https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/option-wheels-18-aero.png' />
                </div>
                <div className='order--wheel2'>
                  <img onClick={handleWheelOption(2)} className={wheel == 2 ? 'active' : ''} src='https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/option-wheels-19-sport.png' />
                </div>
              </div>
            </div>
            <div className='order--interior'>
              <h2>Interior</h2>
              <div className='order--interiorColorContainer'>
                <div className='order--interiorColor1'>
                  <img onClick={handleInteriorOption(1)} className={interior == 1 ? 'active' : ''} src='https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Interior_Black.png' />
                </div>
                <div className='order--interiorColor2'>
                  <img onClick={handleInteriorOption(2)} className={interior == 2 ? 'active' : ''} src='https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Interior_White.png' />
                </div>
              </div>
            </div>
            <div className='order--features'>
              <div className='order--feature1'>
                <h2>Enhanced Autopilot</h2>
                <p>$6,000</p>
                <ul>
                  <li>Navigate on Autopilot</li>
                  <li>Auto Lane Change</li>
                  <li>Autopark</li>
                  <li>Summon</li>
                  <li>Smart Summon</li>
                </ul>
                <div className='order--featureButton'>
                  <Button variant='contained'>Add</Button>
                  <Button variant='contained'>Feature Details</Button>
                </div>
              </div>
              <div className='order--feature2'>
                <h2>Full Self-Driving Capability</h2>
                <p>$15,000</p>
                <ul>
                  <li>All functionalities of Basic Autopilot and Enhanced Autopilot</li>
                  <li>Traffic Light and Stop Sign Control</li>
                </ul>
                <div className='order--featureInfo'>
                  <p>Coming Soon</p>
                  <li>Autosteer on city streets</li>
                  <p>The currently enabled features require active driver supervision and do not make the vehicle autonomous. The activation and use of these features are dependent on achieving reliability far in excess of human drivers as demonstrated by billions of miles of experience, as well as regulatory approval, which may take longer in some jurisdictions. As these self-driving features evolve, your car will be continuously upgraded through over-the-air software updates.</p>
                </div>
                <div className='order--featureButton'>
                  <Button variant='contained'>Add</Button>
                  <Button variant='contained'>Feature Details</Button>
                </div>
                <p>Software options are excluded from the federal tax credit price cap</p>
              </div>
            </div>
            <div className='order--charging'>
              <h2>Charging</h2>
              <div className='order--chargingInfo'>
                <InfoIcon className='order--infoIcon'></InfoIcon>
                <p>Home charging equipment is not included</p>
              </div>
              <div className='order--charging1'>
                <input type='checkbox' />
                <span>Wall Connector</span>
                <p>$425</p>
              </div>
              <div className='order--charging2'>
                <input type='checkbox' />
                <span>Mobile Connector</span>
                <p>$425</p>
              </div>
              <p>Est. Shipment: Based on Vehicle Delivery</p>
            </div>
            <div className='order--confirmation'>
              <h2>Order Your Model 3</h2>
              <p>Est. Delivery: Feb - Mar 2023</p>
              <Button variant='contained'>Continue to Payment</Button>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default Order